import styled, { keyframes, css } from "styled-components";
import React from "react";
import MainSubHeading from "./MainSubHeading";
import BoldParagraph from "./BoldParagraph";
// import { FE, BE, CS, other } from "../constant/TechData";
import { frontend, backend, cyber, Other } from "../constant/TechData";
import bg from "../assets/Images/bgTools&tech.png";
import DualMarqueeSlider from "./DualMarqueeSlider";
function ToolsAndTechnologies() {
  return (
    <div id="technologies" className="relative pb-10 my-16">
      {/* ============================================================================ */}
      <img className="w-full h-[100%] z-[-1] absolute" src={bg} alt="" />
      <div className="max-w-[1440px] w-[100%] mx-auto  px-5  sm:px-10  ">
        <div className="flex flex-col items-center mt-10 pt-20 pb-5">
          <MainSubHeading text={"Techno"} gradientText={"logies"} ml={"ml-2"} />
          <p className="pt-1.5">
            {"We Love using latest tech to our advantage."}
          </p>
        </div>
        {/* ============================================================================================ */}
        <div className="  ">
          <h1 className="mb-1 md:mb-4 font-semibold text-[20px] lg:text-[26px] text-body">
            Front End
          </h1>
          <Wrapper>
            <Marquee className="w-[100%]  ">
              <MarqueeGroup className="">
                {frontend.map((logo, index) => (
                  <div
                    key={index}
                    className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[160px] space-x-2 bg-white s rounded-lg justify-center px-3 py-1 drop-shadow-lg "
                  >
                    <img
                      className="w-[50px] md:w-[65px]"
                      src={logo.image}
                      alt=""
                    />
                    <p className="font-[600] text-body text-[14px] md:text-[18px]">
                      {logo.title}
                    </p>
                  </div>
                ))}
              </MarqueeGroup>
              <MarqueeGroup>
                {frontend.map((logo, index) => (
                  <div
                    key={index}
                    className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[160px] space-x-2 bg-white s rounded-lg justify-center px-3 py-1 drop-shadow-lg "
                  >
                    <img
                      className="w-[50px] md:w-[65px]"
                      src={logo.image}
                      alt=""
                    />
                    <p className="font-[600] text-body text-[14px] md:text-[18px]">
                      {logo.title}
                    </p>
                  </div>
                ))}
              </MarqueeGroup>
            </Marquee>
          </Wrapper>
        </div>

        {/* ========================================================================== */}
        <div className="">
          <h1 className="mt-6 md:mt-16 mb-1 md:mb-4 font-semibold text-[20px] lg:text-[26px] text-body">
            Back End
          </h1>{" "}
          <Wrapper>
            <Marquee className="w-[100%]  ">
              <MarqueeGroup2 className="">
                {backend.map((logo, index) => (
                  <div
                    key={index}
                    className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[160px] space-x-2 bg-white s rounded-lg justify-center px-3 py-1 drop-shadow-lg "
                  >
                    <img
                      className="w-[50px] md:w-[65px]"
                      src={logo.image}
                      alt=""
                    />

                    <p className="font-[600] text-body text-[14px] md:text-[18px]">
                      {logo.title}
                    </p>
                  </div>
                ))}
              </MarqueeGroup2>
              <MarqueeGroup2>
                {backend.map((logo, index) => (
                  <div
                    key={index}
                    className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[160px] space-x-2 bg-white s rounded-lg justify-center px-3 py-1 drop-shadow-lg "
                  >
                    <img
                      className="w-[50px] md:w-[65px]"
                      src={logo.image}
                      alt=""
                    />
                    <p className="font-[600] text-body text-[14px] md:text-[18px]">
                      {logo.title}
                    </p>
                  </div>
                ))}
              </MarqueeGroup2>
            </Marquee>
          </Wrapper>
        </div>

        {/* ========================================================================== */}
        <div className="">
          <h1 className="mt-6 md:mt-16 mb-1 md:mb-4 font-semibold text-[20px] lg:text-[26px] text-body">
            Cyber Security
          </h1>
          <Wrapper>
            <Marquee className="w-[100%]  ">
              <MarqueeGroup className="">
                {cyber.map((logo, index) => (
                  <div
                    key={index}
                    className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[160px] space-x-2 bg-white s rounded-lg justify-center px-3 py-1 drop-shadow-lg "
                  >
                    <img
                      className="w-[50px] md:w-[65px]"
                      src={logo.image}
                      alt=""
                    />

                    <p className="font-[600] text-body text-[14px] md:text-[18px]">
                      {logo.title}
                    </p>
                  </div>
                ))}
              </MarqueeGroup>
              <MarqueeGroup>
                {cyber.map((logo, index) => (
                  <div
                    key={index}
                    className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[160px] space-x-2 bg-white s rounded-lg justify-center px-3 py-1 drop-shadow-lg "
                  >
                    <img
                      className="w-[50px] md:w-[65px]"
                      src={logo.image}
                      alt=""
                    />
                    <p className="font-[600] text-body text-[14px] md:text-[18px]">
                      {logo.title}
                    </p>
                  </div>
                ))}
              </MarqueeGroup>
            </Marquee>
          </Wrapper>
        </div>

        {/* ========================================================================== */}
        <div className="">
          <h1 className="mt-6 md:mt-16 mb-1 md:mb-4 font-semibold text-[20px] lg:text-[26px] text-body">
            Other
          </h1>{" "}
          <Wrapper>
            <Marquee className="w-[100%]  ">
              <MarqueeGroup2 className="">
                {Other.map((logo, index) => (
                  <div
                    key={index}
                    className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[165px] space-x-3  bg-white rounded-lg justify-center py-1 drop-shadow-lg "
                  >
                    <img
                      className="w-[50px] md:w-[65px]"
                      src={logo.image}
                      alt=""
                    />

                    <p className="font-[600] text-body text-[14px] md:text-[18px]">
                      {logo.title}
                    </p>
                  </div>
                ))}
              </MarqueeGroup2>
              <MarqueeGroup2>
                {Other.map((logo, index) => (
                  <div
                    key={index}
                    className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[165px] space-x-3  bg-white rounded-lg justify-center py-1 drop-shadow-lg "
                  >
                    <img
                      className="w-[50px] md:w-[65px]"
                      src={logo.image}
                      alt=""
                    />
                    <p className="font-[600] text-body text-[14px] md:text-[18px]">
                      {logo.title}
                    </p>
                  </div>
                ))}
              </MarqueeGroup2>
            </Marquee>
          </Wrapper>
        </div>
        {/* ========================================================================== */}
        {/* <img className="absolute w-[1440px]" src={bg} alt="" />{" "} */}
      </div>
    </div>
  );
}

export default ToolsAndTechnologies;

const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;
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
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  animation: ${scrollX} 20s linear infinite;
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
  width: 10rem;
`;
{
  /* <div className="marquee-slider  overflow-hidden">
        <style>
          {`
        .marquee-content {
          display: flex;
          animation: marquee ${frontend.length * 100}s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-${(100 / frontend.length) * 100}%);
          }
        }
      `}
        </style>
        <div className="marquee-content flex">
          <div className=" flex items-center justify-center gap-4">
            {frontend.map((logo, index) => (
              <div
                key={index}
                className="items-center bg-white border rounded-md flex-center px-3 py-1 drop-shadow-lg flex logo"
              >
                <img className="" src={logo.image} alt="" />
                <p p className="font-[700] text-[24px]">
                  {logo.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */
}
