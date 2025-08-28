import FeaturedSweets from "../Components/FeaturedSweets";
import Hero from "../Components/Hero";
import HighlightSection from "../Components/HighlightSection";
import NewsletterSignup from "../Components/NewsLetterSignup";
import SweetCategories from "../Components/SweetCategories";

const HomePage = () => {
  return (
    <>
      <Hero />
      <SweetCategories/>
      <FeaturedSweets/>
      <HighlightSection/>
      <NewsletterSignup/>
    </>
  );
};

export default HomePage;
