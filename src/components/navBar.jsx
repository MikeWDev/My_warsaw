import logo from "../assets/img/My_warsaw_logo.png";
import NavMenuSm from "./navMenuSm";
import { Link } from "react-scroll";
import UseNavIcon from "../hooks/useNavIcon";
import UseIntersecting from "../hooks/useIntersecting";

const NavBar = () => {
  const { navIcon } = UseNavIcon();
  const { interSticky } = UseIntersecting();

  return (
    <>
      <div className={`nav-wraper ${interSticky}`}>
        <NavMenuSm />
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
