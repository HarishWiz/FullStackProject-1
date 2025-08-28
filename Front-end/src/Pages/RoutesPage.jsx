import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import ProductsPage from "./ProductsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import PageNotFound from "../Components/PageNotFound";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Profile from "../Components/Profile";
import VerifyOtp from "../Components/VerifyOtp";
import CartPage from "./CartPage";

const RoutesPage = () => {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutesPage;
