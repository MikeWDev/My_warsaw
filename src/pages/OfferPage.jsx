import ArrowDown from "../components/arrowDown";
import OfferCarousel from "../components/offerCarousel";

const OfferPage = () => {
  return (
    <>
      <section className="offer-section">
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
            <ArrowDown />
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferPage;
