import Linebreak from "../components/our_menu_page/lineBreak";
import BasketSummaryCard from "../components/our_menu_page/basketSummaryCard";
import MenuChoice from "../components/our_menu_page/menuChoice";
import DeliveryDetails from "../components/our_menu_page/deliveryDetails";
import DeliveryCheckout from "../components/our_menu_page/deliveryCheckout";
import { Basket } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Route, useLoaderData } from "react-router-dom";
import NavBarOurMenu from "../components/our_menu_page/navBarOurMenu";
const OurMenuPage = () => {
  const [isSmallBasketActive, setIsSmallBasketActive] = useState(false);
  function handleToggle() {
    setIsSmallBasketActive(!isSmallBasketActive);
  }
  const meals = useLoaderData();

  return (
    <>
      <section className="menu-section">
        <NavBarOurMenu />
        <div className="menu container">
          <div className="content-con">
            <MenuChoice meals={meals} />
            {/* <DeliveryCheckout />
            <DeliveryDetails /> */}
          </div>
          {/* <div
            className={
              isSmallBasketActive
                ? "basket-con basket-con-slide "
                : "basket-con"
            }
          >
            <div className="basket-header-con">
              <div className="basket-svg">
                <Basket size={32} color="#fff" />
              </div>
              <div className="basket-header">
                <h3>Your Order</h3>
              </div>
            </div>
            <div className="basket-content">
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
              <div className=" btn summary-button-con">
                <button>Pay</button>
              </div>
            </div>
          </div> */}
          <div
            className={
              isSmallBasketActive
                ? "basket-slide-icon basket-slide-icon-slide"
                : "basket-slide-icon"
            }
            onClick={handleToggle}
          >
            {isSmallBasketActive ? (
              <CaretRight onClick={handleToggle} color="#fff" size={32} />
            ) : (
              <Basket onClick={handleToggle} color="#fff" size={32} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMenuPage;
