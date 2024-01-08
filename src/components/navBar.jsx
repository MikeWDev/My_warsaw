import { useState, useEffect } from "react";
import logo from "../assets/img/My_warsaw_logo.png";
import { Basket, List, X } from "@phosphor-icons/react";
import useScreenSize from "../hooks/useScreenSize";
import NavMenuSm from "./navMenuSm";
import $ from "jquery";
const NavBar = () => {
  const [navIcon, setNavIcon] = useState("");
  const [isOpen, setIsOpen] = useState("false");
  const screenSize = useScreenSize();

  const listIcon = (
    <List onClick={handleClickOpen} size={32} color="#fff" weight="bold" />
  );
  const basketIcon = <Basket size={32} color="#fff" />;
  const xIcon = (
    <X onClick={handleClickClose} size={32} color="#fff" weight="bold" />
  );

  useEffect(() => {
    if (screenSize.width < 650) {
      setNavIcon(listIcon);
    } else {
      if (screenSize.width > 650) {
        setNavIcon(basketIcon);
      }
    }
  }, [screenSize.width]);

  function handleClickOpen() {
    setNavIcon(xIcon);
    setIsOpen(true);
  }
  function handleClickClose() {
    setNavIcon(listIcon);
    setIsOpen(false);
  }

  return (
    <>
      <div className="nav-wraper">
        <NavMenuSm openState={isOpen} />
        <div className="nav-container">
          <header>
            <div className="nav-logo">
              <img src={logo} alt="Logo of the restaurant" />
            </div>
            <nav className="nav-links">
              <a href="#">Home</a>
              <a href="#">Menu</a>
              <a href="#">About</a>
              <a href="#">Location</a>
            </nav>
            <div className="basket-svg">
              <div className="nav-basket">{navIcon}</div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default NavBar;
