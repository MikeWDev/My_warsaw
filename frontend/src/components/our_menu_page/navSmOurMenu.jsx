import { Basket, X } from "@phosphor-icons/react";
import { Link as RouterLink } from "react-router-dom";

const NavMenuSmOurMenu = (props) => {
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
            <RouterLink onClick={props.closeFunction} to="/">
              Home
            </RouterLink>
          </div>
          <div className="sm-link">
            <RouterLink onClick={props.closeFunction}>Menu</RouterLink>
          </div>
          <div className="sm-link">
            <RouterLink onClick={props.closeFunction} to="/">
              About
            </RouterLink>
          </div>
          <div className="sm-link">
            <RouterLink onClick={props.closeFunction} to="/">
              Location
            </RouterLink>
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

export default NavMenuSmOurMenu;
