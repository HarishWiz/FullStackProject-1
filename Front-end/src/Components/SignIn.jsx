import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useLoader } from "../Context/LoaderContext";
import Loader from "./Loader";
const SignIn = () => {
  const navigate = useNavigate();
  const { login } = userAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [keepLogedin, setKeepLogedin] = useState(true);
  const { setLoading } = useLoader();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  setTimeout(() => {}, 2000);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const res = await fetch("http://localhost:8000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        login(data.user);
        toast.success("Login Successfull");
        setFormData({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <div className="p-10 md:shadow-md md:backdrop-blur-md space-y-5 md:border border-gray-500 bg-white rounded-lg">
        <h1 className="text-4xl font-semibold">Sign in</h1>
        <form
          className="flex flex-col items-start space-y-3 w-full"
          onSubmit={handleSubmit}
        >
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              className="border border-gray-400 outline-none rounded p-2 w-80"
            />
          </div>
          <div className="flex items-center justify-between text-sm w-full">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={keepLogedin}
                onChange={(e) => setKeepLogedin(e.target.checked)}
                className=" size-4 border border-gray-400 outline-none rounded cursor-pointer"
              />
              <span>Keep me logged in</span>
            </div>
            <div className="text-blue-600 hover:underline ">
              <a href="#">Forget Password?</a>
            </div>
          </div>
          <button
            className="px-8 py-2 text-white rounded-full outline-none bg-blue-500 hover:bg-[#007be7] cursor-pointer w-full mt-3"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center text-sm space-x-2">
          <span>Don't have an account ?</span>
          <Link to={"/signup"} className="text-blue-500 hover:underline">
            Create New User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
