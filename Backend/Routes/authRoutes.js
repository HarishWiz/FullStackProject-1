import express from "express";
import bcrypt from "bcryptjs";
import User from "../Models/User.js";
import sendOtpEmail, { generateOtp } from "../Utils/SendOtpEmail.js";
import TempOtp from "../Models/TempOtp.js";

const router = express.Router();

// Sign Up

router.post("/signup-request", async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    // Generate OTP
    const otp = generateOtp();

    // Save OTP to DB
    await TempOtp.findOneAndUpdate(
      { email },
      { otp, createdAt: new Date() },
      { upsert: true, new: true }
    );

    // Send OTP to users email
    await sendOtpEmail(email, otp);

    res.status(200).json({ message: "OTP sent to Your Email" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

router.post("/verify-otp", async (req, res) => {
  const { email, otp, name, password } = req.body;
  try {
    const TempRecord = await TempOtp.findOne({ email });

    if (!TempRecord || TempRecord.otp !== otp) {
      return res.status(400).json({ message: "Invalid or Expired OTP " });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create New User
    const NewUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await NewUser.save();

    // Remove Temp OTP Record
    await TempOtp.deleteOne({ email });

    res
      .status(201)
      .json({ message: "Account Verified and Created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went Wrong" });
  }
});

// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: "User Already Exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create New User Document
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(201).json({ message: "User Created Successfully..." });
//   } catch (err) {
//     res.status(500).json({ message: "Something Went Wrong" });
//   }
// });

// Sign in

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find User in DB by email

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // compare provided password with hashed password in DB

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login Successfull",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
});
export default router;
