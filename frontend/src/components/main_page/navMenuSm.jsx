import { Basket, X } from "@phosphor-icons/react";
import { Link } from "react-scroll";

const NavMenuSm = (props) => {
  return (
    <>
      <nav className={`nav-sm ${props.openClass}`}>
        <div className="nav-basket nav-close-icon">
          <X
            onClick={props.closeFunction}
            size={32}
            color="#fff"
            weight="bold"
          />
        </div>

        <div className="sm-link-con">
          <div className="sm-link">
            <Link
              onClick={props.closeFunction}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Home
            </Link>
          </div>
          <div className="sm-link">
            <Link
              onClick={props.closeFunction}
              activeClass="active"
              to="#"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Menu
            </Link>
          </div>
          <div className="sm-link">
            <Link
              onClick={props.closeFunction}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1000}
            >
              About
            </Link>
          </div>
          <div className="sm-link">
            <Link
              onClick={props.closeFunction}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              Location
            </Link>
          </div>
          <div onClick={props.closeFunction} className="basket-link">
            <div className="nav-basket">
              <Basket size={32} color="#fff" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMenuSm;
