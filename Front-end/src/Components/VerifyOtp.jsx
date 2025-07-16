import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { name, email, password } = location.state || {};

  const [otp, setOtp] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, name, password }),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("OTP Verified and Account Created Successfully!")
        navigate("/signin");
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <form
        className="p-6 md:border border-gray-500 rounded-md bg-white md:shadow-md"
        onSubmit={handleVerify}
      >
        <h2 className="font-semibold text-lg">Enter OTP Sent to {email}</h2>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border border-gray-400 outline-none rounded p-2 w-full my-3"
        />
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          type="submit"
        >
          Verify & Create Account
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
