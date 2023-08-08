import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./DualMarqueeSlider.css"; // Create this CSS file to style your sliders

const DualMarqueeSlider = ({ slidesLeft, slidesRight }) => {
  const settingsLeft = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
  };

  const settingsRight = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: slidesRight.length - 2, // Start from the second-to-last slide
    rtl: true, // Right-to-left mode
    arrows: false,
  };

  return (
    <div>
      <h1 className="text-center my-10 text-4xl font-bold uppercase">
        Dual Marquee Slider
      </h1>
      <div className="dual-slider-container">
        <h1>FrontEnd</h1>
        <Slider {...settingsLeft}>
          {slidesLeft.map((slide, index) => (
            <div key={index}>
              <div className="inner">
                <img src={slide} alt="" />
              </div>
            </div>
          ))}
        </Slider>
        <h1>Back End</h1>

        <Slider {...settingsRight}>
          {slidesRight.map((slide, index) => (
            <div key={index}>
              <div className="mt-10 inner">
                <img src={slide} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DualMarqueeSlider;
