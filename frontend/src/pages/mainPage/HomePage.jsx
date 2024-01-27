import NavBar from "../../components/main_page/navBar";
import homePageBg from "../../assets/img/home-page-bg.png";
import ArrowDown from "../../components/main_page/arrowDown";
import { Link } from "react-scroll";
import UseIntersecting from "../../hooks/useIntersecting";
const HomePage = (props) => {
  const { interHomePadding } = UseIntersecting();

  return (
    <>
      <NavBar />
      <section
        className={`home-section ${interHomePadding}`}
        name={props.name}
        id="home"
      >
        <div className="home container grid">
          <div className="home-content-container">
            <div className="home-content grid ">
              <div className="home-slogan-content">
                <div className="home-slogans">
                  <div className="small-slogan">
                    <h3>welcome to my warsaw</h3>
                  </div>
                  <div className="big-slogans">
                    <h1>Polish Flavours</h1>
                    <h1>Streetwise</h1>
                    <h1>Savours</h1>
                  </div>
                </div>
                <div className="home-button btn">
                  <button>order now</button>
                </div>
              </div>
              <div className="home-img">
                <img
                  src={homePageBg}
                  alt="The picture of well presented food "
                />
              </div>
            </div>
            <Link
              activeClass="active"
              to="offer"
              spy={true}
              smooth={true}
              offset={100}
              duration={1300}
            >
              <ArrowDown />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
