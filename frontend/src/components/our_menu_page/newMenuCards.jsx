import { useState } from "react";
import zapiekMush from "../../assets/img/home-page-bg.jpg";
const NewMenuCard = ({ data }) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  function handleToggle() {
    setIsOverlayActive(!isOverlayActive);
  }

  return (
    <div className="card">
      <div className="card-img">
        <img
          src={`${data.imgSrc}`}
          alt="The picture of baguette with mushrooms"
        />
        <div
          className="alerg-overlap"
          style={isOverlayActive ? { opacity: "1" } : { opacity: "0" }}
        >
          {data.allergens}
        </div>
      </div>
      <div className="card-details">
        <div className="card-heading">
          <div className="card-item-name">
            <h5>{data.title}</h5>
          </div>
          <div
            onClick={handleToggle}
            className={
              isOverlayActive
                ? "info-alerg-box alerg-active grow-anim"
                : "grow-anim info-alerg-box"
            }
          >
            i
          </div>
        </div>
        <div className="card-ing">
          <p>{data.ingridients}</p>
        </div>
        <div className="card-button-con">
          <div className="button-price">
            <h5>£ {data.mealPrice}</h5>
          </div>
          <div className="button-card">
            <h5>ADD TO CART</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMenuCard;
