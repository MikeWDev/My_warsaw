import { Basket, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

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
            <a>Home</a>
          </div>
          <div className="sm-link">
            <a href="">Menu</a>
          </div>
          <div className="sm-link">
            <a href="">About</a>
          </div>
          <div className="sm-link">
            <a href="">Location</a>
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
