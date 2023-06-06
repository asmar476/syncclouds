import HeroComponent from "../../common component/HeroComponent";
import logo2 from "../../assets/dummy logos/logo2.png";
import logo5 from "../../assets/dummy logos/logo5.png";
import logo6 from "../../assets/dummy logos/logo6.png";
import logo7 from "../../assets/dummy logos/logo7.png";
import logo8 from "../../assets/dummy logos/logo8.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ButtonLight from "../../common component/ButtonLight";
import ButtonDark from "../../common component/ButtonDark";
import homeIllustration1 from "../../assets/home illustration/cloud.svg";
import homeIllustration2 from "../../assets/home illustration/Illustration SVG.svg";
import homeIllustration3 from "../../assets/home illustration/Home icon.svg";
import clooud from "../../assets/overlay image/Vector.svg";
import MainHeading from "../../common component/MainHeading";

const Hero = () => {
  return (
    <div className="container mx-auto px-10 py-0 sm:py-20 md:py-32 ">
      <div className="hidden  lg:flex flex-col lg:flex-row items-center justify-between gap-10 ">
        <div className="flex flex-col items-end justify-end h-[400px] w-[200px]">
          <img src={homeIllustration1} className="h-[70%] w-[100%]" />
        </div>
        <div className=" max-w-[500px] xl:max-w-[700px] text-center ">
          <MainHeading
            text1={"Unlock Your Business's Potential with the Best"}
            gradientText={"Software Company Innovation"}
            text2={"at Your Fingertips"}
          />
        </div>
        <div className="flex flex-col items-end h-[400px] w-[200px]">
          <img src={homeIllustration2} className="h-[70%] w-[100%]" />
        </div>
      </div>

      <div className="relative  lg:hidden h-[40vh] sm:h-[50vh]">
        <div className="">
          <img
            src={clooud}
            className="absolute top-0 left-[50%] translate-x-[-50%] h-[100%]"
          />
        </div>
        <div className=" w-[100%] h-[100%] flex items-center  sm:items-end justify-center text-center">
          <h1 className="main-Heading  font-[700] text-lg sm:text-2xl md:text-3xl xl:text-[41.89px] max-w-[400px] md:max-w-[500px]   sm:mb-32 md:mb-[50px] hero-heading">
            <span className="leading-[1rem] sm:leading-[2rem] md:leading-[3.5rem]">
              {" "}
              Unlock Your Business's Potential with the Best
            </span>
            <span className="gradient-text leading-[1rem] sm:leading-[2rem] md:leading-[3.5rem]">
              {" "}
              Software Company Innovation
            </span>{" "}
            <span className="leading-[1rem] sm:leading-[2rem] md:leading-[3.5rem]">
              at Your Fingertips
            </span>
          </h1>
        </div>
      </div>

      <div className="lg:hidden sm:mt-[-50px] md:mt-[-25px] lg:mb-20 hero-text">
        <p className=" text-[14px] sm:text-[16px] xl:text-[18px] leading-[24px] text-justify sm:text-center sm:leading-[30px]">
          Experience unmatched excellence in digital solutions with the best
          software company and transform your business with cutting-edge
          technology. We help global brands to design, develop, and market
          businesses digitally-provided with 24/7 professional support.
        </p>
      </div>
      <div className="hidden lg:block mb-20">
        <p className="text-center text-[16px] xl:text-[18px] leading-[30px]">
          Experience unmatched excellence in digital solutions with the best
          software company and transform your business with cutting-edge
          technology. We help global brands to design, develop, and market
          businesses digitally-provided with 24/7 professional support.
        </p>
      </div>

      <div className="flex items-center justify-center gap-5 my-10">
        <ButtonDark text={"Book My Call"} />
        <ButtonLight text={"Our Services"} />
      </div>

      <div className="hidden lg:flex items-center justify-end mr-56">
        <img src={homeIllustration3} />
      </div>
    </div>
  );
};

export default Hero;
