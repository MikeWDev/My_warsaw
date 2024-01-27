import ArrowDown from "../../components/main_page/arrowDown";
import Figure from "../../components/main_page/figure";
import { Link } from "react-scroll";
const AboutUsPage = (props) => {
  return (
    <>
      <section name={props.name} className="section-about-us">
        <div className="about container">
          <div className="about-content-con">
            <div className="about-heading-con">
              <div className="heading-box"></div>
              <div className="about-heading big-slogans">
                <h1>About us</h1>
              </div>
            </div>
            <div className="about-figure-con">
              <Figure />
              <Figure />
              <Figure />
            </div>
            <div className="about-arrow-con">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={1300}
              >
                <ArrowDown />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
