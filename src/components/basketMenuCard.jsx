import zapiekMush from "../assets/img/home-page-bg.png";
import { plusButton } from "../assets/img/svgIndex";
const MenuCard = () => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={zapiekMush} alt="The picture of baguette with mushrooms" />
        </div>
        <div className="card-details">
          <div className="card-heading">
            <h5>Zapiekanka</h5>
          </div>
          <div className="card-ing">
            <p>
              mushrooms, cheese, wheat bagueette, lorem ipsum doret set amet
            </p>
          </div>
          <div className="card-price">
            <h5>£13.40</h5>
          </div>
        </div>
        <div className="plus-button btn">{plusButton}</div>
      </div>
    </>
  );
};

export default MenuCard;
