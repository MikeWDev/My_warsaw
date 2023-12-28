import logo from "../assets/img/My_warsaw_logo.png";
import { sideArrow } from "../assets/img/svgIndex";
import FooterHeading from "../components/footerHeading";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-con container">
          <div className="footer-content-con">
            <div className="footer-logo-con">
              <img src={logo} alt="Logo of the restaurant" />
            </div>
            <div className="footer-info-con">
              <div className="footer-about-info">
                <FooterHeading text="About restaurant" />
                <div className="footer-about-disc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore{" "}
                  </p>
                </div>
              </div>
              <div className="footer-menu-con">
                <FooterHeading text="Menu" />
                <div className="footer-menu-links">
                  <ul>
                    <li>{sideArrow} Zapiekanki</li>
                    <li>{sideArrow} Pierogi</li>
                    <li>{sideArrow} Drinks</li>
                    <li>{sideArrow} Zapiekanki</li>
                    <li>{sideArrow} Pierogi</li>
                  </ul>
                </div>
              </div>

              <div className="footer-nav-con">
                <FooterHeading text="Navigation" />
                <div className="footer-nav">
                  <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Specials</li>
                    <li>About us</li>
                    <li>Location</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
