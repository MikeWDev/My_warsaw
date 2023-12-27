import ArrowDown from "../components/arrowDown";
import Figure from "../components/figure";

const AboutUsPage = () => {
  return (
    <>
      <section className="section-about-us">
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
              <ArrowDown />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
