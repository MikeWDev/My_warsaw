import itemPic from "../assets/img/home-page-bg.png";
import Linebreak from "./lineBreak";
const BasketSummaryCard = () => {
  return (
    <>
      <div className="summary-card-con">
        <div className="summary-img">
          <img src={itemPic} alt="" />
        </div>
        <div className="summary-card-content">
          <div className="summary-item-name">
            <p>Zapiekanka</p>
          </div>
          <div className="summary-data">
            <div className="item-quantity">
              <p>x1</p>
            </div>
            <div className="item-price">
              <p>$13.40</p>
            </div>
          </div>
        </div>
      </div>
      <Linebreak />
    </>
  );
};

export default BasketSummaryCard;
