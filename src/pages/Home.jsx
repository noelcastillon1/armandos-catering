import Hero from "../components/Hero";
import ItalianMenu from "../components/constants/ItalianMenu";
import ConsultForm from "../components/ConsultForm";
import Services from "../components/Services";
import Reviews from "../components/Reviews";


const Home = () => {
  return (
    <>
      <Hero />
      <ItalianMenu />
      <ConsultForm />
      <Services />
      <Reviews />
    </>
  );
};

export default Home;
