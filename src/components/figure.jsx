import certificate from "../assets/img/certificate.png";
const Figure = () => {
  return (
    <>
      <figure>
        <figcaption>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </figcaption>
        <div className="figure-img">
          <img
            className="figure--img"
            src={certificate}
            alt="The picture of the certificate"
          />
        </div>
      </figure>
    </>
  );
};

export default Figure;
