import dotenv from "dotenv";
dotenv.config();

import sendOtpEmail, { generateOtp } from "./Utils/SendOtpEmail.js";

const test = async () => {
  const otp = generateOtp();
  console.log("Generated OTP:", otp);

  try {
    await sendOtpEmail("harishharish8122@gmail.com", otp);
    console.log("✅ Test email sent successfully!");
  } catch (err) {
    console.error("❌ Error sending test email:", err);
  }
};

test();
