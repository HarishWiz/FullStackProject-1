import { FaShieldAlt, FaTruck, FaMedal, FaHeart } from "react-icons/fa";

const HighlightSection = () => {
  const features = [
    {
      icon: <FaShieldAlt className=" text-3xl" />,
      title: "100% Pure Ingredients",
      description: "Made with finest quality ghee and authentic ingredients",
      bg: "bg-[#DCFCE7]",
      color: "text-[#16A34A]",
    },
    {
      icon: <FaTruck className=" text-3xl" />,
      title: "Fresh Delivery",
      description: "Same day delivery for orders placed before 2 PM",
      bg: "bg-[#DBEAFE]",
      color: "text-[#2563EB]",
    },
    {
      icon: <FaMedal className=" text-3xl" />,
      title: "30 Years Experience",
      description: "Three decades of traditional sweet making expertise",
      bg: "bg-[#FEF9C3]",
      color: "text-[#CA8A04]",
    },
    {
      icon: <FaHeart className=" text-3xl" />,
      title: "Customer Love",
      description: "Over 10,000+ happy customers and counting",
      bg: "bg-[#F3E8FF]",
      color: "text-[#AB60EF]",
    },
  ];

  return (
    <section className="w-full mx-auto px-4 md:px-10 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center  bg-white p-5"
          >
            <div
              className={`size-20 flex items-center justify-center rounded-full mb-4 ${item.bg} ${item.color}`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-blackprimary mb-2">
              {item.title}
            </h3>
            <p className="text-base text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightSection;
