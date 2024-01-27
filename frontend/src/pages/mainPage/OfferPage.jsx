import ArrowDown from "../../components/main_page/arrowDown";
import OfferCarousel from "../../components/main_page/offerCarousel";
import { Link } from "react-scroll";

const OfferPage = (props) => {
  return (
    <>
      <section name={props.name} className="offer-section">
        <div className="offer container grid">
          <div className="offer-content ">
            <div className="offer-header-container">
              <div className="offer-small-heading">
                <div className="offer-sub-heading">
                  <h3>Best Food Menu</h3>
                </div>
                <div className="heading">
                  <h2>Our Popular Food Items</h2>
                </div>
              </div>
            </div>

            <OfferCarousel />

            <div className="btn offer-btn">
              <button>see full menu</button>
            </div>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1300}
            >
              <ArrowDown />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferPage;
