import styled, { keyframes, css } from "styled-components";
import React from "react";
import MainSubHeading from "./MainSubHeading";
import BoldParagraph from "./BoldParagraph";
import { FE, BE, CS, other } from "../constant/TechData";
import bg from "../assets/Images/bgTools&tech.png";
import map from "../assets/Images/map.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

function ToolsAndTechnologies() {
  return (
    <div className="container relative mb-10 mx-auto pl-14 pr-10">
      {/* <img className="h-[92%] absolute" src={bg} alt="" />{" "}
      <img className="w-[1440px] absolute" src={map} alt="" /> */}
      <div className="">
        <div className="flex flex-col items-center">
          <MainSubHeading text={"Techno"} gradientText={"logies"} ml={"ml-2"} />
          <BoldParagraph text={"We Love using latest tec to our advantage."} />
        </div>
        {/* ============================================================================================ */}
        <div className="">
          <h1 className=" font-semibold text-[20.89px]">Front End</h1>
          <Wrapper>
            <Marquee>
              <MarqueeGroup>
                {FE.map((el, index) => (
                  <ImageGroup key={index}>
                    <img src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
              <MarqueeGroup>
                {FE.map((el, index) => (
                  <ImageGroup key={index}>
                    <img src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>
          </Wrapper>
          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            // slidesPerGroup={1}
            breakpoints={{
              1236: {
                slidesPerView: 4,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              400: {
                slidesPerView: 2,
              },
              200: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            draggable={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
          >
            {FE.map((logo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-[100px] md:h-[150px] w-[150px] md:w-[250px]"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
        {/* ========================================================================== */}
        <div className="">
          <h1 className=" font-semibold text-[20.89px]">Back End</h1>{" "}
          <Wrapper>
            <Marquee>
              <MarqueeGroup2>
                {BE.map((el, index) => (
                  <ImageGroup key={index}>
                    <img width={500} src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
              <MarqueeGroup2>
                {BE.map((el, index) => (
                  <ImageGroup key={index}>
                    <img width={500} src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
            </Marquee>
          </Wrapper>{" "}
          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            breakpoints={{
              1236: {
                slidesPerView: 4,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              400: {
                slidesPerView: 2,
              },
              200: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            draggable={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
          >
            {BE.map((logo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-[100px] md:h-[150px] w-[150px] md:w-[250px]"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
        {/* ========================================================================== */}
        <div className="">
          <h1 className=" font-semibold text-[20.89px]">Cyber Security</h1>{" "}
          <Wrapper>
            <Marquee>
              <MarqueeGroup>
                {CS.map((el, index) => (
                  <ImageGroup key={index}>
                    <img width={500} src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
              <MarqueeGroup>
                {CS.map((el, index) => (
                  <ImageGroup key={index}>
                    <img src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>
          </Wrapper>{" "}
          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            breakpoints={{
              1236: {
                slidesPerView: 4,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              400: {
                slidesPerView: 2,
              },
              200: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            draggable={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
          >
            {CS.map((logo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-[100px] md:h-[150px] w-[150px] md:w-[250px]"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
        {/* ========================================================================== */}
        <div className="">
          <h1 className=" font-semibold text-[20.89px]">Other</h1>{" "}
          <Wrapper>
            <Marquee>
              <MarqueeGroup2>
                {other.map((el, index) => (
                  <ImageGroup key={index}>
                    <img src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
              <MarqueeGroup2>
                {BE.map((el, index) => (
                  <ImageGroup key={index}>
                    <img src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
            </Marquee>
          </Wrapper>{" "}
          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            breakpoints={{
              1236: {
                slidesPerView: 4,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              400: {
                slidesPerView: 2,
              },
              200: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            draggable={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
          >
            {other.map((logo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-[100px] md:h-[150px] w-[150px] md:w-[250px]"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
        {/* ========================================================================== */}
        {/* <img className="absolute w-[1440px]" src={bg} alt="" />{" "} */}
      </div>
    </div>
  );
}

export default ToolsAndTechnologies;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Marquee = styled.div`
  display: flex;
  width: 1200px;
  height: 125px;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;
const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
const common = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 180%;
  animation: ${scrollX} 30s linear infinite;
`;
const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;
const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 70rem;
`;
