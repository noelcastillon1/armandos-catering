import ConsultForm from "../components/ConsultForm"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ConsultationPage = () => {
  return (
    <>
      <Navbar />
      <div id="interestForm" className="consultation-container px-12 py-4">
        <h4 className="text-5xl py-4 text-center">Interested in our services? Let's talk!</h4>
        <ConsultForm />
      </div>
      <Footer />
    </>
  )
}

export default ConsultationPage