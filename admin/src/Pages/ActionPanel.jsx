import React from "react";
import OrdersPanel from "./OrdersPanel";
import { Outlet } from "react-router-dom";

const ActionPanel = () => {
  return (
    <div className="action-panel">
      <Outlet />
    </div>
  );
};

export default ActionPanel;
