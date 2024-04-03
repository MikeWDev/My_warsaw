import React from "react";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { Link, NavLink } from "react-router-dom";
const ActionButton = () => {
  return (
    <div className="action-button">
      <NavLink
        to="orders"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <ArrowCircleRight />
        <h3>Orders</h3>
      </NavLink>
    </div>
  );
};

export default ActionButton;
