import React from "react";
import adminLogo from "../../assets/My_warsaw_logo.png";
import UserButton from "./UserButton";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="top-bar">
      <Link to="/">
        <div className="logo-con">
          <div className="image">
            <img src={adminLogo} alt="" />
          </div>
          <div className="heading">
            <span></span>
            <h2>Admin</h2>
          </div>
        </div>
      </Link>
      <UserButton />
    </div>
  );
};

export default TopBar;
