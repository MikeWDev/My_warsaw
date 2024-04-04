import itemPic from "../../assets/img/home-page-bg.jpg";
import Linebreak from "../our_menu_page/lineBreak";
import { Minus, Plus, X } from "@phosphor-icons/react";
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
            <div className="delete-icon">
              <X color="#fff" />
            </div>
          </div>
          <div className="summary-data">
            <div className="item-quantity">
              <div className="svg-qty-plus">
                <Plus size={18} fill="#fff" />
              </div>
              <div className="count-qty">
                <p>x1</p>
              </div>
              <div className="svg-qty-minus">
                <Minus size={18} fill="#fff" />
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
