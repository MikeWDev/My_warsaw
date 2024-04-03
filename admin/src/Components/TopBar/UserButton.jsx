import React from "react";
import user from "../../assets/woman.jpg";
import { ArrowCircleDown } from "@phosphor-icons/react";
const UserButton = () => {
  return (
    <div className="user-con">
      <div className="user-info">
        <div className="user-red">
          <span></span>
        </div>
        <div className="user-name">
          <span>Klaudia</span>
        </div>
      </div>
      <div className="dropdown-button">
        <div className="svg">
          <ArrowCircleDown />
        </div>
      </div>
    </div>
  );
};

export default UserButton;
