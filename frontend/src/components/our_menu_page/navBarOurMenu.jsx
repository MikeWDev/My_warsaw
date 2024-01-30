import logo from "../../assets/img/My_warsaw_logo.png";

import useScreenSize from "../../hooks/useScreenSize";
import { Basket, List } from "@phosphor-icons/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import NavMenuSmOurMenu from "./navSmOurMenu";
const NavBarOurMenu = () => {
  const screenSize = useScreenSize();
  const [openClass, setOpenClass] = useState("hidden");

  function handleOpen() {
    setOpenClass(" ");
  }

  function handleClose() {
    setOpenClass("hidden");
  }
  return (
    <>
      <div className={`nav-wraper  `}>
        <NavMenuSmOurMenu closeFunction={handleClose} openClass={openClass} />
        <div className="nav-container">
          <header>
            <div className="nav-logo">
              <RouterLink to="index">
                <img src={logo} alt="Logo of the restaurant" />
              </RouterLink>
            </div>
            <nav className="nav-links">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/">Menu</RouterLink>
              <RouterLink to="/">About</RouterLink>
              <RouterLink to="/">Location</RouterLink>
            </nav>

            {screenSize.width < 650 ? (
              <div onClick={handleOpen} className="list-svg">
                <div className="nav-list">
                  <List size={32} color="#fff" weight="bold" />
                </div>
              </div>
            ) : (
              <div className="basket-svg">
                <div className="nav-basket">
                  <Basket size={32} color="#fff" />;
                </div>
              </div>
            )}
          </header>
        </div>
      </div>
    </>
  );
};

export default NavBarOurMenu;
