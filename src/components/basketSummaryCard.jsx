import itemPic from "../assets/img/home-page-bg.png";
import Linebreak from "./lineBreak";
import { xSvg } from "../assets/img/svgIndex";
import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
const BasketSummaryCard = () => {
  return (
    <>
      <div className="summary-card-con">
        <div className="summary-img">
          <img src={itemPic} alt="" />
        </div>
        <div className="summary-card-content">
          <div className="summary-item-name">
            <div className="item-name">
              <p>Zapiekanka</p>
            </div>
            <div className="delete-icon">{xSvg}</div>
          </div>
          <div className="summary-data">
            <div className="item-quantity">
              <div className="svg-qty-plus">
                <PlusCircle size={18} fill="#ec2427" />
              </div>
              <div className="count-qty">
                <p>x1</p>
              </div>
              <div className="svg-qty-minus">
                <MinusCircle size={18} color="#ec2427" />
              </div>
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
