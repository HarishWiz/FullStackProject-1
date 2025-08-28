import { FiShoppingCart } from "react-icons/fi";
import { LuTruck, LuShield } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="relative w-full h-full font-poppins">
      <img
        src="/assets/landing.jpg"
        alt="landing"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay Content */}
      <div className="relative z-10 inset-0 flex flex-col justify-center px-6 md:px-10 space-y-6 md:space-y-8 bg-black/40 py-14">
        {/* Top Label */}
        <p className="flex items-center gap-2 text-xs rounded-full px-2 py-1 text-[#4D0E05] bg-[#FDEBD2] font-semibold w-fit">
          <img
            src="/icons/lollipop2.svg"
            alt="svg"
            className="w-5 h-5 object-cover"
          />
          <span>30 Years of Sweet Excellence</span>
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black max-w-4xl leading-tight">
          Freshly Baked <span className="text-primary">Happiness</span>{" "}
          Delivered to Your Door!
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl">
          Experience the authentic taste of traditional Indian sweets made with
          100% pure ghee and finest ingredients. From classic laddus to premium
          dry fruit sweets.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button className="px-6 py-2 rounded-md flex items-center gap-2 text-white bg-[#f97316] hover:bg-[#e55d04] text-sm">
            <FiShoppingCart className="w-4 h-4" />
            <span>Shop Now</span>
          </button>
          <button className="px-6 py-2 rounded-md border border-primary text-sm text-primary hover:bg-primary hover:text-white transition">
            View Menu
          </button>
        </div>

        {/* Info Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-white text-sm">
          <p className="flex items-center gap-1">
            <LuTruck className="text-green-500 w-4 h-4" />
            <span>Free Delivery above ₹500</span>
          </p>
          <p className="flex items-center gap-1">
            <LuShield className="text-blue-500 w-4 h-4" />
            <span>100% Pure & Fresh</span>
          </p>
        </div>
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
    </div>
  );
};

export default Hero;
