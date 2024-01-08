import FooterHeading from "./footerHeading";
import logo from "../assets/img/My_warsaw_logo.png";
import { sideArrow } from "../assets/img/svgIndex";
const FooterSm = () => {
  return (
    <>
      <div className="footer-sm">
        <div className="footer-logo-con">
          <img src={logo} alt="Logo of the restaurant" />
        </div>
        <div className="footer-about-info">
          <FooterHeading text="About restaurant" />
          <div className="footer-about-disc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore{" "}
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
              <li>Home</li>
              <li>Menu</li>
              <li>Specials</li>
              <li>About us</li>
              <li>Location</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSm;
