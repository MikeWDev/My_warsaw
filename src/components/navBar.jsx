import { useState, useEffect } from "react";
import logo from "../assets/img/My_warsaw_logo.png";
import { Basket, List, X } from "@phosphor-icons/react";
import useScreenSize from "../hooks/useScreenSize";
import NavMenuSm from "./navMenuSm";
import { Link } from "react-scroll";

import UseIntersecting from "../hooks/useIntersecting";

const NavBar = () => {
  const intersectingState = UseIntersecting();
  const [navIcon, setNavIcon] = useState("");
  const [isOpen, setIsOpen] = useState("false");
  const [sticky, setSticky] = useState("");

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

        setSticky("sticky sticky-slide");
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

  const scrollSetting = {};

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
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-500}
                duration={1300}
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="#"
                spy={true}
                smooth={true}
                offset={50}
                duration={1300}
              >
                Menu
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={1300}
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={1300}
              >
                Location
              </Link>
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
