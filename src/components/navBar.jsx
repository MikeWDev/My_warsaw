import logo from "../assets/img/My_warsaw_logo.png";
import NavMenuSm from "./navMenuSm";
import { Link } from "react-scroll";
import UseIntersecting from "../hooks/useIntersecting";
import useScreenSize from "../hooks/useScreenSize";
import { Basket, List } from "@phosphor-icons/react";
import { useState } from "react";
const NavBar = () => {
  const { interSticky } = UseIntersecting();
  const screenSize = useScreenSize();
  const [openClass, setOpenClass] = useState("hidden");

  function handleOpen() {
    setOpenClass(" ");
  }

  function handleClose() {
    setOpenClass("hidden");
    setNavSmSticky(" ");
  }

  return (
    <>
      <div className={`nav-wraper ${interSticky} `}>
        <NavMenuSm closeFunction={handleClose} openClass={openClass} />
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

export default NavBar;
