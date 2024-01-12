import { facebook, twitter, instagram } from "../assets/img/svgIndex";
import GoogleMap from "../components/googleMap";
const ContactUs = (props) => {
  return (
    <>
      <section name={props.name} className="contact-section">
        <div className="contact container">
          <div className="contact-content-con">
            <div className="contact-details-con">
              <div className="contact-header-con">
                <div className="heading-box"></div>
                <div className="contact-heading big-slogans">
                  <h1>Contact us</h1>
                </div>
              </div>
              <div className="contact-direction">
                <p>
                  Our local is l Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  conse
                </p>
              </div>
              <div className="contact-info-con">
                <div className="contact-phone">
                  <h3>Call: 74521698423</h3>
                </div>
                <div className="contact-email">
                  <h3>Email: food@mysite.com</h3>
                </div>
              </div>
              <div className="contact-socials">
                <div className="social contact-twitter">{twitter}</div>
                <div className="social contact-facebook">{facebook}</div>
                <div className="social contact-instagram">{instagram}</div>
              </div>
            </div>
            <div className="contact-map-con">
              <GoogleMap />
              <div className="adress-box">
                <div className="adress-heading">
                  <h2>Adress</h2>
                </div>
                <div className="adress-details">
                  <p>
                    19-23 The Village <br />
                    Unit 6 King St, Reading
                    <br /> RG1 2HG <br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
