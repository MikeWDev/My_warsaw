import NavBar from "../components/navBar";
import homePageBg from "../assets/img/home-page-bg.png";
import { arrowDown } from "../assets/img/svgIndex";
const HomePage = () => {
  return (
    <>
      <section className="home-section" id="home">
        <NavBar />
        <div className="home container grid">
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
              <div className="home-button">
                <button>order now</button>
              </div>
            </div>
            <div className="home-img">
              <img src={homePageBg} alt="The picture of well presented food " />
            </div>
            <div className="home-arrow">
              <a className="arrow-svg">{arrowDown}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
