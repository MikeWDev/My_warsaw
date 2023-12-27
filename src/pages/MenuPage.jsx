import MenuCard from "../components/menuCard";
import { arrowDown } from "../assets/img/svgIndex";
import ArrowDown from "../components/arrowDown";

const MenuPage = () => {
  return (
    <>
      <section className="menu-section">
        <div className="menu container grid">
          <div className="menu-content ">
            <div className="menu-header-container">
              <div className="menu-small-heading">
                <div className="menu-sub-heading">
                  <h3>BestFoodMenu</h3>
                </div>
                <div className="heading">
                  <h2>Our Popular Food Items</h2>
                </div>
              </div>
            </div>
            <div className="menu-card-container grid grid--4-cols">
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
            </div>
            <div className="btn menu-btn">
              <button>see full menu</button>
            </div>
            <ArrowDown />
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
