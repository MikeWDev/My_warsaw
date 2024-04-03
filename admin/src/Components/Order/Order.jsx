import React from "react";
import { ArrowCircleDown } from "@phosphor-icons/react";
const Order = () => {
  return (
    <div className="order-con">
      <div className="order-info">
        <div className="order-time">
          <p>21:37</p>
        </div>
        <div className="items-count">
          <p>3 item(s)</p>
        </div>
        <div className="payment-status">
          <span></span>
          <p>Pending...</p>
        </div>
      </div>
      <div className="dropdown-icon">
        <div className="svg">
          <ArrowCircleDown />
        </div>
      </div>
    </div>
  );
};

export default Order;
