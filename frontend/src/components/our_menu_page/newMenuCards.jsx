import { useState } from "react";
import zapiekMush from "../../assets/img/home-page-bg.png";
const NewMenuCard = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  function handleToggle() {
    setIsOverlayActive(!isOverlayActive);
  }
  return (
    <div className="card">
      <div className="card-img">
        <img src={zapiekMush} alt="The picture of baguette with mushrooms" />
        <div
          className="alerg-overlap"
          style={isOverlayActive ? { opacity: "1" } : { opacity: "0" }}
        ></div>
      </div>
      <div className="card-details">
        <div className="card-heading">
          <div className="card-item-name">
            <h5>Zapiekanka</h5>
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
          <p>mushrooms, cheese, wheat bagueette, lorem ipsum doret set amet</p>
        </div>
        <div className="card-button-con">
          <div className="button-price">
            <h5>£13.40</h5>
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
