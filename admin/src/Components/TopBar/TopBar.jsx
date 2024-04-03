import React from "react";
import adminLogo from "../../assets/My_warsaw_logo.png";
import UserButton from "./UserButton";
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo-con">
        <div className="image">
          <img src={adminLogo} alt="" />
        </div>
        <div className="heading">
          <span></span>
          <h2>Admin</h2>
        </div>
      </div>
      <UserButton />
    </div>
  );
};

export default TopBar;
