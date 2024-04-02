import Hero from "../components/Hero";
import FoodMenuSection from "../components/FoodMenuSection";
import ConsultationSection from "../components/ConsultationSection";
import Services from "../components/Services";
import Story from "../components/Story";
import ReviewSection from "../components/ReviewSection";


const Home = () => {
  return (
    <>
      <Hero />
      <FoodMenuSection />
      <Services />
      <ConsultationSection />
      <Story />
      <ReviewSection />
    </>
  );
};

export default Home;
