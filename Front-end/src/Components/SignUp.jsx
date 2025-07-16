import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { useLoader } from "../Context/LoaderContext";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { setLoading } = useLoader();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/signup-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("OTP Send to your Email!");
        navigate("/verify-otp", { state: formData });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <div className="p-10 md:shadow-md md:backdrop-blur-md space-y-5 md:border border-gray-500 bg-white rounded-lg">
        <h1 className="text-4xl font-semibold">Sign up</h1>
        <form
          className="flex flex-col items-start space-y-3 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start space-y-1">
            <label className=" font-semibold text-gray-900">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 outline-none rounded p-2 w-80"
            />
          </div>
          <div className="flex flex-col items-start space-y-1">
            <label className=" font-semibold text-gray-900">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 outline-none rounded p-2 w-80"
            />
          </div>
          <div className="flex flex-col items-start space-y-1">
            <label className=" font-semibold text-gray-900">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-400 outline-none rounded p-2 w-80"
            />
          </div>
          <div className="flex items-center justify-between text-sm w-full">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className=" size-4 border border-gray-400 outline-none rounded cursor-pointer"
              />
              <span>Remember Me</span>
            </div>
          </div>
          <button
            className="px-8 py-2 text-white rounded-full outline-none bg-blue-500 hover:bg-[#007be7] cursor-pointer w-full mt-3"
            type="submit"
          >
            Continue
          </button>
        </form>
        <div className="flex items-center text-sm space-x-2">
          <span>Already have an account ?</span>
          <Link to={"/signin"} className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
