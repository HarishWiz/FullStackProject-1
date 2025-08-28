import { FaAward, FaHeart, FaLeaf, FaStar } from "react-icons/fa";
import Hero from "../Components/Hero";

const storyTimeline = [
  {
    year: "1993",
    title: "The Beginning",
    description:
      "It all started in 1993 when our founder, Shri Ramesh Kumar, began making traditional sweets in his small kitchen with recipes passed down through generations. What started as a passion for preserving authentic flavors soon became a beloved neighborhood sweet shop.",
    image: "/assets/default.png",
    reverse: true,
  },
  {
    year: "2000s",
    title: "Growing with Love",
    description:
      "As word spread about our authentic taste and quality, we expanded our offerings while maintaining the same traditional methods. We introduced sugar-free options and fusion sweets while keeping our classic recipes unchanged.",
    image: "/assets/default.png",
    reverse: false,
  },
  {
    year: "2020s",
    title: "Digital Era",
    description:
      "Today, we've embraced technology to reach sweet lovers everywhere while maintaining our commitment to quality. Our online platform allows us to deliver fresh, authentic sweets to your doorstep, bringing families together through the joy of traditional flavors.",
    image: "/assets/default.png",
    reverse: true,
  },
];

const achievements = [
  { value: "30+", label: "Years of Experience" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "50+", label: "Sweet Varieties" },
  { value: "4.8★", label: "Customer Rating" },
];

const values = [
  {
    icon: <FaLeaf className="text-white text-2xl" />,
    title: "100% Pure Ingredients",
    description:
      "We use only the finest quality ghee, dry fruits, and authentic ingredients sourced directly from trusted suppliers.",
    bg: "bg-green-600",
  },
  {
    icon: <FaStar className="text-white text-2xl" />,
    title: "Fresh Daily",
    description:
      "All our sweets are prepared fresh daily using traditional methods to ensure maximum taste and quality.",
    bg: "bg-yellow-500",
  },
  {
    icon: <FaHeart className="text-white text-2xl" />,
    title: "Made with Love",
    description:
      "Every sweet is crafted with care and attention to detail, maintaining the authentic taste that has been our signature for 30 years.",
    bg: "bg-red-400",
  },
];

const awards = [
  { title: "Best Sweet Shop 2023", subtitle: "City Food Awards" },
  { title: "Excellence in Quality", subtitle: "Food Safety Authority" },
  { title: "Customer Choice Award", subtitle: "Local Business Excellence" },
];

const AboutPage = () => {
  return (
    <div className="w-full h-full">
      <Hero />

      {/* Story Section */}
      <section className="min-h-screen container mx-auto px-4 md:px-48 py-16">
        <div className="flex flex-col items-center justify-center space-y-20 w-full max-w-6xl">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold text-blackprimary">
              Our Sweet Story
            </h1>
            <p className="text-lg text-blacksecondary">
              A legacy built on tradition, quality, and love
            </p>
          </div>

          {storyTimeline.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10 w-full`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="size-80 object-cover rounded-lg"
              />
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-xl font-semibold text-blackprimary">
                  {item.title} ({item.year})
                </h3>
                <p className="text-blacksecondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values & Achievements */}
      <section className="w-full flex flex-col items-center justify-center px-4 md:px-10 py-16 bg-gray-50">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-blackprimary">
            Our Values & Achievements
          </h2>
          <p className="text-lg text-blacksecondary">
            What makes us the preferred choice for sweet lovers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 w-full">
          {values.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-10 bg-white rounded-lg shadow-md"
            >
              <div
                className={`size-16 flex items-center justify-center rounded-full ${item.bg}`}
              >
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-blackprimary">
                {item.title}
              </h4>
              <p className="text-base text-blacksecondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="text-4xl font-bold text-primary">{item.value}</h3>
              <p className="text-lg text-blacksecondary">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="text-center space-y-6 px-4 md:px-10 py-16 bg-white">
        <h2 className="text-3xl font-bold text-blackprimary">
          Awards & Recognition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {awards.map((item, index) => (
            <div
              key={index}
              className="bg-white md:shadow-md p-10 space-y-5 rounded-lg flex flex-col items-center"
            >
              <FaAward className="text-5xl text-[#EFC646]" />
              <h4 className="text-xl font-semibold text-blackprimary">
                {item.title}
              </h4>
              <p className="text-base text-blacksecondary">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#F97316] via-[#fb923c] to-[#fcd34d] py-16 px-4 md:px-10 text-center space-y-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white">Experience Our Legacy</h2>
        <p className="text-white max-w-3xl mx-auto">
          Join thousands of satisfied customers who trust us for authentic,
          fresh, and delicious sweets.
        </p>
        <button className="bg-white hover:bg-amber-600 text-sm text-primary font-semibold px-6 py-2 rounded-md transition duration-300">
          Shop Our Sweets
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
