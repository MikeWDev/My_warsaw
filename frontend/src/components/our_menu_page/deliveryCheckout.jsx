import Linebreak from "../our_menu_page/lineBreak";
import { CheckCircle } from "@phosphor-icons/react";
const DeliveryCheckout = () => {
  return (
    <>
      <div className="checkout-con">
        <div className="checkout-header-con">
          <h1>Checkout</h1>
        </div>
        <Linebreak />
        <div className="checkout-confirm">
          <div className="confirm-svg-con">
            <CheckCircle size={48} color="#fff" />
          </div>
          <div className="confirm-data">
            <div className="confirm-order-no">
              <p>Order #444</p>
            </div>
            <div className="confirm-thanks">
              <h3>Thank you Joe!</h3>
            </div>
          </div>
        </div>
        <div className="checkout-updates">
          <div className="updates-heading">
            <h3>Order Updates</h3>
          </div>
          <div className="updates-info">
            <p>You will receive order and shipping updates via email</p>
          </div>
        </div>
        <Linebreak />
        <div className="checkout-contact-data">
          <div className="contact-data-heading data-heading">
            <h3>Contact: </h3>
          </div>
          <div className="data-content">
            <ul>
              <li>Joe Biogs</li>
              <li> 74563214559</li>
              <li>joe.biogs@gmail.com</li>
            </ul>
          </div>
        </div>
        <Linebreak />
        <div className="checkout-adress-data">
          <div className="adress-data-heading data-heading">
            <h3>Adress: </h3>
          </div>
          <div className="data-content">
            <ul>
              <li>Joe Biogs</li>
              <li>Flat 9, 48 London Road </li>
              <li>RG30RQ2</li>
              <li>Reading</li>
            </ul>
          </div>
        </div>
        <div className="delivery-button-con">
          <div className="summary-button-con btn">
            <button type="submit">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryCheckout;
