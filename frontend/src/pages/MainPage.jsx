import AboutUsPage from "./mainPage/AboutUsPage";
import ContactUs from "./mainPage/ContactUsPage";
import HomePage from "./mainPage/HomePage";
import OfferPage from "./mainPage/OfferPage";
import Footer from "./mainPage/footer";

const MainPage = () => {
  return (
    <>
      <HomePage name="home" />
      <OfferPage name="offer" />
      <AboutUsPage name="about" />
      <ContactUs name="contact" />
      <Footer />
    </>
  );
};

export default MainPage;
