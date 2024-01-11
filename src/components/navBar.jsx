import { useState, useEffect } from "react";
import logo from "../assets/img/My_warsaw_logo.png";
import { Basket, List, X } from "@phosphor-icons/react";
import useScreenSize from "../hooks/useScreenSize";
import NavMenuSm from "./navMenuSm";
import $ from "jquery";
import UseIntersecting from "../hooks/useIntersecting";

const NavBar = () => {
  const intersectingState = UseIntersecting();
  const [navIcon, setNavIcon] = useState("");
  const [isOpen, setIsOpen] = useState("false");
  const [sticky, setSticky] = useState("");
  const homeEl = document.getElementById("home");

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

  console.log(intersectingState + "inters");
  console.log(isOpen + "isopen");
  useEffect(() => {
    const homeEl = document.getElementById("home");

    if (
      (isOpen === true && intersectingState === false) ||
      (isOpen === true && intersectingState === true)
    ) {
      setSticky("sticky sticky-slide uwu");
      homeEl.classList.add("home-padding");
    } else if (isOpen === false) {
      if (intersectingState === true) {
        setSticky(" haga");
        homeEl.classList.remove("home-padding");
      } else if (intersectingState === false && isOpen === false) {
        setSticky("sticky");
        homeEl.classList.add("home-padding");
        setTimeout(() => {
          setSticky("sticky sticky-slide");
        }, 10);
      }
    }
  }, [intersectingState, isOpen]);

  function handleClickOpen() {
    setNavIcon(xIcon);
    setIsOpen(true);
    // homeEl.classList.add("home-padding");
  }
  function handleClickClose() {
    setNavIcon(listIcon);
    setIsOpen(false);
    // homeEl.classList.add("home-padding");
  }

  return (
    <>
      <div className={`nav-wraper ${sticky}`}>
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
