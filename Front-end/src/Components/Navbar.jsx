import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { userAuth } from "../Context/AuthContext";
import { FiHeart, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = userAuth();
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="w-full font-poppins sticky top-0 z-50 bg-white">
        {/* Top strip */}
        <div className="w-full flex items-center justify-between py-2 bg-primary text-white px-4 md:px-10 text-sm">
          <p className="flex items-center space-x-4">
            <span>🎉 Free Delivery on Orders Above ₹500</span>
            <a href="tel:9876543210" className="hidden md:inline">
              📞 Call: 91 98765 43210
            </a>
          </p>
          <p className="hidden md:block">🕒 Open: 9 AM - 9 PM</p>
        </div>

        {/* Main navbar */}
        <div className="w-full flex items-center justify-between px-4 md:px-10 py-3 md:py-4 shadow-md relative">
          {/* Mobile Left - Menu */}
          <div className="md:hidden flex items-center">
            <div className="z-30" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <HiOutlineX className="text-3xl text-blackprimary" />
              ) : (
                <HiOutlineMenu className="text-3xl text-blackprimary" />
              )}
            </div>
          </div>

          {/* Logo (centered in mobile view) */}
          <div className="flex items-center space-x-2 mx-auto md:mx-0">
            <span className="size-10 rounded-full bg-primary flex items-center justify-center">
              <img src="/icons/lollipop2.svg" alt="logo" className="size-6" />
            </span>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-2xl font-semibold text-blackprimary">
                Sweet Delights
              </h1>
              <p className="text-blacksecondary text-xs">
                Traditional Sweets Since 1997
              </p>
            </div>
          </div>

          {/* Mobile Right - Cart & Profile */}
          <div className="md:hidden flex items-center gap-4 text-xl ml-auto">
            <FiShoppingCart className="hover:text-blue-500 cursor-pointer" onClick={()=> navigate("/cart")} />
            <FiUser
              className="hover:text-green-500 cursor-pointer"
              onClick={() => navigate(user ? "/profile" : "/signin")}
            />
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center relative text-blacksecondary ">
            <FiSearch className="absolute left-3 size-4" />
            <input
              type="text"
              className="w-md text-sm outline-none ps-10 py-2 rounded border border-border focus:ring-1 focus:ring-blackprimary"
              placeholder="Search for sweets, laddus, barfi..."
            />
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-6 font-medium text-blacksecondary text-base">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "text-blacksecondary hover:text-primary"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-5 text-blacksecondary text-xl">
            <FiHeart className="hover:text-red-500 cursor-pointer" />
            <FiShoppingCart className="hover:text-blue-500 cursor-pointer" onClick={()=> navigate("/cart")} />
            <FiUser className="hover:text-green-500 cursor-pointer" />
          </div>

          {/* Desktop Profile / Login */}
          <div className="hidden md:flex items-center ms-4">
            {!user ? (
              <NavLink
                to="/signin"
                className="text-white px-5 py-2 rounded bg-primary"
              >
                Login
              </NavLink>
            ) : (
              <span
                onClick={() => navigate("/profile")}
                className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center uppercase cursor-pointer"
              >
                {user.name.charAt(0)}
              </span>
            )}
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col px-6 py-4 text-blacksecondary space-y-4 z-20">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {!user ? (
                <NavLink
                  to="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-center py-2 rounded bg-primary"
                >
                  Login
                </NavLink>
              ) : (
                <span
                  onClick={() => {
                    navigate("/profile");
                    setMenuOpen(false);
                  }}
                  className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center uppercase cursor-pointer"
                >
                  {user.name.charAt(0)}
                </span>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
