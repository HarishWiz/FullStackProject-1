import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config()
const transporter = nodemailer.createTransport({
  secure:true,
  host:"smtp.gmail.com",
  port:465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOtpEmail = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify Your Email - Your OTP",
      text: `Your OTP code is ${otp}`,
    });
    console.log("OTP Email sent Successfully");
  } catch (error) {
    console.log("Failed to send OTP", error);
    throw new Error("Email Sending Failed");
  }
};
export default sendOtpEmail;

export function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

