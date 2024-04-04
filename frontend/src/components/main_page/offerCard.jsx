import zapiekMush from "../../assets/img/home-page-bg.jpg";
import { Link as RouterLink } from "react-router-dom";
const OfferCard = () => {
  return (
    <>
      <RouterLink to="our-menu">
        <div className="offer-card">
          <div className="offer-card-img">
            <img
              src={zapiekMush}
              alt="The picture of baguette with mushrooms"
            />
          </div>
          <div className="offer-card-details">
            <div className="offer-card-heading">
              <h5>Zapiekanka</h5>
            </div>
            <div className="offer-card-ing">
              <p>
                mushrooms, cheese, wheat bagueette, lorem ipsum doret set amet
              </p>
            </div>
            <div className="offer-card-price">
              <h5>£13.40</h5>
            </div>
          </div>
        </div>
      </RouterLink>
    </>
  );
};

export default OfferCard;
