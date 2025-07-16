import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { userAuth } from "../Context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = userAuth();
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full flex items-center justify-between py-4 px-4 md:px-12 bg-gray-700 sticky top-0 left-0 right-0 z-50">
      <h1 className="text-amber-300 text-2xl font-bold ">Landings</h1>
      <div className="flex items-center space-x-3">
        <ul className="hidden md:flex  items-center space-x-10 font-semibold text-white text-lg justify-around">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500"
                    : "text-white hover:text-amber-500"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {!user && (
            <>
              <li>
                <NavLink to="/signin" className="hover:text-amber-500">
                  Sign-in
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" className="hover:text-amber-500">
                  Sign-up
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {user && (
            <span
              onClick={() => {
                navigate("/profile");
                setMenuOpen(false);
              }}
              className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center uppercase cursor-pointer "
            >
              {user.name.charAt(0)}
            </span>
        )}
        <div className="md:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiOutlineX className="text-3xl text-white cursor-pointer" />
          ) : (
            <HiOutlineMenu className="text-3xl text-white cursor-pointer" />
          )}
        </div>
      </div>
      {menuOpen && (
        <ul className="absolute top-14 left-0 w-full bg-gray-700 flex flex-col items-start px-10 space-y-6 py-6 font-semibold text-white">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500"
                    : "text-white hover:text-amber-500"
                }
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {!user && (
            <>
              <li>
                <NavLink
                  to="/signin"
                  className="hover:text-amber-500"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Sign-in
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className="hover:text-amber-500"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Sign-up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      )}{" "}
    </div>
  );
};

export default Navbar;
