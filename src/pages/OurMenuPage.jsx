import { useState } from "react";

import { menuChoices } from "../data";
import Linebreak from "../components/lineBreak";
import MenuCard from "../components/BasketMenuCard";
import { basketSvg } from "../assets/img/svgIndex";
import BasketSummaryCard from "../components/basketSummaryCard";
import NavBar from "../components/navBar";
import MenuChoice from "../components/menuChoice";
import DeliveryDetails from "../components/deliveryDetails";
import DeliveryCheckout from "../components/deliveryCheckout";
const OurMenuPage = () => {
  return (
    <>
      <section className="menu-section">
        <NavBar />
        <div className="menu container">
          <div className="content-con">
            {/* <DeliveryCheckout />
            <DeliveryDetails />
            <MenuChoice /> */}
          </div>
          <div className="basket-con">
            <div className="basket-header-con">
              <div className="basket-svg">{basketSvg}</div>
              <div className="basket-header">
                <h3>Your Order</h3>
              </div>
            </div>
            <div className="basket-content">
              <BasketSummaryCard />
              <BasketSummaryCard />
              <BasketSummaryCard />
            </div>
            <div className="summary-price-con">
              <div className="summary-subtotal">
                <div className="subtotal-heading">
                  <p>Subtotal: </p>
                </div>
                <div className="subtotal-price">
                  <p>$40.20</p>
                </div>
              </div>
              <div className="summary-delivery">
                <div className="delivery-heading">
                  <p>Delivery:</p>
                </div>
                <div className="delivery-price">
                  <p>$3.99</p>
                </div>
              </div>
            </div>
            <Linebreak />
            <div className="summary-total-con">
              <div className="summary-total">
                <div className="summary-total-heading">
                  <p>Total: </p>
                </div>
                <div className="summary-total-price">
                  <p>44.19</p>
                </div>
              </div>
              <div className="summary-button-con">
                <button>Pay</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMenuPage;
