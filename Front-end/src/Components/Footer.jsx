import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "All Products",
  "About Us",
  "Contact",
  "Shopping Cart",
  "Track Order",
];

const sweetCategories = [
  "Traditional Sweets",
  "Dry Fruit Sweets",
  "Sugar-Free Options",
  "Festive Specials",
  "Gift Boxes",
];

const contactDetails = [
  {
    icon: <FaMapMarkerAlt className="text-primary" />,
    text: "123 Sweet Street, Gandhi Nagar, Mumbai, Maharashtra 400001",
  },
  {
    icon: <FaPhoneAlt className="text-primary" />,
    text: "+91 98765 43210",
  },
  {
    icon: <FaPhoneAlt className="text-primary" />,
    text: "+91 98765 43211",
  },
  {
    icon: <FaEnvelope className="text-primary" />,
    text: "info@sweetdelights.com",
  },
  {
    icon: <FaClock className="text-primary" />,
    text: "Mon-Sat: 9 AM - 9 PM",
  },
  {
    icon: <FaClock className="text-primary" />,
    text: "Sunday: 10 AM - 8 PM",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-5 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="col-span-1">
          <div className="flex items-center space-x-2 mx-auto md:mx-0 mb-3">
            <span className="size-10 rounded-full bg-primary flex items-center justify-center">
              <img src="/icons/lollipop2.svg" alt="logo" className="size-6" />
            </span>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-2xl font-semibold">Sweet Delights</h1>
              <p className="text-xs text-gray-200">Since 1993</p>
            </div>
          </div>
          <p className="text-sm mb-3 md:mb-4">
            Bringing you the finest traditional Indian sweets made with authentic recipes and premium ingredients for over 30 years.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-white hover:text-primary cursor-pointer" />
            <FaInstagram className="text-white hover:text-primary cursor-pointer" />
            <FaTwitter className="text-white hover:text-primary cursor-pointer" />
            <FaYoutube className="text-white hover:text-primary cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2 text-xl">Quick Links</h3>
          <ul className="space-y-1 text-gray-100">
            {quickLinks.map((link, index) => (
              <li
                key={index}
                className="text-md hover:text-orange-600 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Sweet Categories */}
        <div>
          <h3 className="font-semibold mb-2 text-xl">Sweet Categories</h3>
          <ul className="space-y-1 text-gray-100">
            {sweetCategories.map((category, index) => (
              <li
                key={index}
                className="text-md hover:text-orange-600 cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2 text-xl">Get in Touch</h3>
          <ul className="space-y-2 text-gray-100">
            {contactDetails.map((item, index) => (
              <li key={index} className="text-md flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <h4 className="font-semibold text-xl">
          Stay Sweet with Our Newsletter
        </h4>
        <p className="text-md mb-6">
          Get exclusive offers and festive specials delivered to your inbox
        </p>
        <div className="flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded w-60 md:w-80 text-white bg-gray-800 "
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Subscribe
          </button>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 border-t border-gray-700 text-xs pt-6 text-gray-300 space-x-4">
          <span>© 2024 Sweet Delights. All rights reserved.</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms of Service</span>
          <span className="hover:underline cursor-pointer">Refund Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
