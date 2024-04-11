import { useState } from "react";

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
          <h1>Allergens</h1>
          {data.allergens &&
            data.allergens.map((allergen, i) => <p>{allergen}</p>)}
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
          {data.ingridients &&
            data.ingridients.map((ingridient, i) => (
              <p> {ingridient + ","} </p>
            ))}
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
