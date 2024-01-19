import AboutUsPage from "./pages/AboutUsPage";
import ContactUs from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import Footer from "./pages/footer";
import OurMenuPage from "./pages/OurMenuPage";

function App() {
  return (
    <>
      <HomePage name="home" />
      <OfferPage name="offer" />
      <AboutUsPage name="about" />
      <ContactUs name="contact" />
      <Footer />
      <OurMenuPage />
    </>
  );
}

export default App;
