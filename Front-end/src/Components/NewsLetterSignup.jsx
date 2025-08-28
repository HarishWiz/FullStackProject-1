const NewsletterSignup = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#F97316] via-[#fb923c] to-[#fcd34d]
 py-16 px-4 md:px-8 lg:px-16 text-center flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center w-full md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Stay Sweet with Us!
        </h2>
        <p className="text-white mb-6 text-md md:text-xl">
          Get exclusive offers, festive specials, and sweet updates delivered to
          your inbox
        </p>
      </div>

      <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-2/3 px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#F6A623]"
        />
        <button
          type="submit"
          className="bg-white hover:border-primary text-primary hover:border cursor-pointer font-semibold px-6 py-2 rounded-md transition duration-200"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSignup;
