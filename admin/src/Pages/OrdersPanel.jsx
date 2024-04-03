import React from "react";
import Order from "../Components/Order/Order";

const OrdersPanel = () => {
  return (
    <div className="orders-panel">
      <div className="orders-con">
        <div className="heading">
          <span></span>
          <h2>Orders</h2>
        </div>
        <div className="orders-list">
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    </div>
  );
};

export default OrdersPanel;
