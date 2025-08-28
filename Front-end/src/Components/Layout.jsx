import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200); // Fixed: Ensure scrollY is used
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      {showScrollToTop && (
        <button
          className="fixed bottom-6 right-10 bg-primary cursor-pointer hover:bg-primaryhover text-white p-3 rounded shadow-lg transition-opacity duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </>
  );
};

export default Layout;