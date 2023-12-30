import logo from "../assets/img/My_warsaw_logo.png";
import { basket } from "../assets/img/svgIndex";
const NavBar = () => {
  return (
    <>
      <div className="nav-wraper">
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
              <div className="nav-basket">{basket}</div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default NavBar;
