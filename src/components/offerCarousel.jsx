import MenuCard from "../components/MenuCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
const OfferCarousel = () => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowCircleRight
        size={32}
        color="#fff"
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#ec2426",
          height: "48px",
          width: "48px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowCircleLeft
        size={32}
        color="#fff"
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#ec2426",
          height: "48px",
          width: "48px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 495,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <Slider {...settings}>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
        </Slider>
      </div>
    </>
  );
};

export default OfferCarousel;
