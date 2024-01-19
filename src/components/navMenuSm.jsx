import { Basket, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
const NavMenuSm = (props) => {
  const [visible, setVisible] = useState("hidden");

  useEffect(() => {
    if (props.openState === true) {
      setVisible("");
    } else if (props.openState === false) {
      setVisible("hidden");
    }
  }),
    [props.openState];

  return (
    <>
      <nav className={`nav-sm ${visible} `}>
        <div className="sm-link-con">
          <div className="sm-link">
            <Link
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
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              About
            </Link>
          </div>
          <div className="sm-link">
            <Link
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
          <div className="basket-link">
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
