import MenuCard from "../components/menuCard";
import { arrowDown } from "../assets/img/svgIndex";
import ArrowDown from "../components/arrowDown";

const OfferPage = () => {
  return (
    <>
      <section className="offer-section">
        <div className="offer container grid">
          <div className="offer-content ">
            <div className="offer-header-container">
              <div className="offer-small-heading">
                <div className="offer-sub-heading">
                  <h3>BestFoodMenu</h3>
                </div>
                <div className="heading">
                  <h2>Our Popular Food Items</h2>
                </div>
              </div>
            </div>
            <div className="offer-card-container grid grid--4-cols">
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
            </div>
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
