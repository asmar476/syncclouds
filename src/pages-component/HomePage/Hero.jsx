import HeroComponent from "../../common component/HeroComponent";
import logo2 from "../../assets/dummy logos/logo2.png";
import logo5 from "../../assets/dummy logos/logo5.png";
import logo6 from "../../assets/dummy logos/logo6.png";
import logo7 from "../../assets/dummy logos/logo7.png";
import logo8 from "../../assets/dummy logos/logo8.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import { Link, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ButtonLight from "../../common component/ButtonLight";
import ButtonDark from "../../common component/ButtonDark";
import clouds from "../../assets/Images/Main.svg";
import homeIllustration1 from "../../assets/home illustration/cloud.svg";
import homeIllustration2 from "../../assets/home illustration/Illustration SVG.svg";
import homeIllustration3 from "../../assets/home illustration/Home icon.svg";
import clooud from "../../assets/overlay image/Vector.svg";
import MainHeading from "../../common component/MainHeading";
import arrowRight from "../../assets/icons/arrow-right.svg";
import bluearrowRight from "../../assets/icons/blue-arrow-right.svg";
import blurPlus from "../../assets/home illustration/Ellipse 196.svg";
import arrowUp from "../../assets/icons/arrow-up-circle.svg";

const Hero = () => {
  return (
    <div
      style={{
        background:
          " linear-gradient(180deg, rgba(0, 38, 128, 0) 0%, rgba(0, 38, 128, 0.05) 100%)",
      }}
      className="px-10 py-8 mb-10"
    >
      <div className="hidden lg:flex flex-col lg:flex-row items-center justify-around">
        <div className="w-[622px] space-y-10 ">
          <h1 className="text-[50px] font-[800] leading-[65px]">
            Unlock your Business's Potential
            <span className="text-[#002680]">
              with the best Software Company
            </span>
          </h1>
          <div
            style={{
              background:
                "linear-gradient(270deg, rgba(255, 202, 122, 0.21) 0%, rgba(194, 226, 254, 0.2) 46.94%, rgba(115, 141, 185, 0.22) 96.13%)",
            }}
            className=" flex w-[440px] px-5 py-2 gap-2.5"
          >
            <p className="text-[#434343] text-[25.89px] font-[600] ">
              Innovation at your fingertips
            </p>
            <img src={arrowRight} />
          </div>
          <div className="hidden lg:block mb-20">
            <p className="text-[16px] xl:text-[18px] leading-[30px]">
              Experience unmatched excellence in digital solutions with the best
              software company and transform your business with cutting-edge
              technology.
            </p>
          </div>
          <div className="flex gap-5 my-10">
            <Link to={"/contact"}>
              <button
                className="bg-[#00315A] text-white text-[18px]
                font-[550
            px-3 py-2 rounded-[0.18rem]"
              >
                Book my call
              </button>
            </Link>
            <div className="flex gap-3  px-3 py-2 rounded-sm border border-[#002680]">
              <Link to={"/contact"}>
                <button
                  className=" text-[18px]
            font-[550] text-[#002680]"
                >
                  Our Services
                </button>
              </Link>
              <img className=" cursor-pointer" src={bluearrowRight} />
            </div>
          </div>
        </div>
        <div>
          <img src={clouds} alt="" />
          <div className=" right-[5%] top-[70%] fixed z-[100] bg-gray-300  h-[60px]  w-[60px]  rounded-full">
            <img
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer right-[5.4%] top-[70.65%] fixed z-[100]"
              src={arrowUp}
              alt="arrow up"
              width={45}
            />
          </div>
        </div>{" "}
        {/* <img
          className="absolute right-0 top-[100px] opacity-100"
          src={blurPlus}
          alt=""
        /> */}
      </div>
      <div className="lg:hidden">
        <p className=" text-[14px] sm:text-[16px] xl:text-[18px] leading-[24px] text-justify sm:text-center sm:leading-[30px]">
          Experience unmatched excellence in digital solutions with the best
          software company and transform your business with cutting-edge
          technology. We help global brands to design, develop, and market
          businesses digitally-provided with 24/7 professional support.
        </p>{" "}
        <div className="flex justify-end">
          <img
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-[30px] cursor-pointer left-[41%] top-[25%] fixed z-[100]"
            src={arrowUp}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
