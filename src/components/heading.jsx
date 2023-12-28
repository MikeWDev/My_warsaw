const FooterHeading = (props) => {
  return (
    <>
      <div className="about-info-heading">
        <div className="about-heading">
          <h3>{props.text}</h3>
        </div>
        <div className="about-heading-box"></div>
      </div>
    </>
  );
};

export default FooterHeading;
