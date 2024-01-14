import { menuChoices } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
const MenuChoiceSm = () => {
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
          height: "32px",
          width: "32px",
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
          height: "32px",
          width: "32px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 525,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="menu-selection-con--sm">
      <Slider {...settings}>
        {menuChoices.map((data) => {
          return <button key={data.key}>{data.name}</button>;
        })}
      </Slider>
    </div>
  );
};

export default MenuChoiceSm;
