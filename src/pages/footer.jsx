import logo from "../assets/img/My_warsaw_logo.png";
import { sideArrow } from "../assets/img/svgIndex";
import FooterHeading from "../components/footerHeading";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-con container">
          <div className="footer-info-con">
            <div className="footer-logo-con">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-500}
                duration={1300}
              >
                <img src={logo} alt="Logo of the restaurant" />
              </Link>
            </div>
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
                  <li>
                    {sideArrow} <p>Zapiekanki</p>
                  </li>
                  <li>
                    {sideArrow} <p>Pierogi</p>
                  </li>
                  <li>
                    {sideArrow} <p>Drinks</p>
                  </li>
                  <li>
                    {sideArrow} <p>Zapiekanki</p>
                  </li>
                  <li>
                    {sideArrow} <p>Pierogi</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-nav-con">
              <FooterHeading text="Navigation" />
              <div className="footer-nav">
                <ul>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-500}
                    duration={1000}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    activeClass="active"
                    to="#"
                    spy={true}
                    smooth={true}
                    offset={-500}
                    duration={1300}
                  >
                    <li>Menu</li>
                  </Link>
                  <Link
                    activeClass="active"
                    to="offer"
                    spy={true}
                    smooth={true}
                    offset={130}
                    duration={1000}
                  >
                    <li>Specials</li>
                  </Link>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                  >
                    <li>About us</li>
                  </Link>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                  >
                    <li>Location</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-info container">
          <div className="copywright">
            <p>
              Copyright © 2023 MyWarsaw. All Rights Reserved by KDevelopment
            </p>
          </div>
          <div className="pp-links">
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
