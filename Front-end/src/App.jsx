import React from "react";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import BlogPage from "./Components/BlogPage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import PageNotFound from "./Components/PageNotFound";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import VerifyOtp from "./Components/VerifyOtp";
import { ToastContainer } from "react-toastify";
import Loader from "./Components/Loader";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <ToastContainer/>
        <Loader/>
      </BrowserRouter>
    </div>
  );
};

export default App;
