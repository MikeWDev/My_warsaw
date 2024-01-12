import AboutUsPage from "./pages/AboutUsPage";
import ContactUs from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import OfferPage from "./pages/OfferPage";
import Footer from "./pages/footer";

function App() {
  return (
    <>
      <HomePage name="home" />
      <OfferPage name="offer" />
      <AboutUsPage name="about" />
      <ContactUs name="contact" />
      <Footer />
      {/* <OurMenu /> */}
    </>
  );
}

export default App;
