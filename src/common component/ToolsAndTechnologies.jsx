import styled, { keyframes, css } from "styled-components";
import React from "react";
import MainSubHeading from "./MainSubHeading";
import BoldParagraph from "./BoldParagraph";
import { FE, BE, CS, other } from "../constant/TechData";
import bg from "../assets/Images/bgTools&tech.png";

function ToolsAndTechnologies() {
  return (
    <div className="relative">
      <img className="w-full h-[100%] z-[-1] absolute" src={bg} alt="" />
      <div className="max-w-[1200px] xl:max-w-[1440px] w-[100%] mx-auto  px-10  sm:px-20  ">
        <div className="flex flex-col items-center py-5">
          <MainSubHeading text={"Techno"} gradientText={"logies"} ml={"ml-2"} />
          <BoldParagraph
            className="max-w-[250px]"
            text={"We Love using latest tec to our advantage."}
          />
        </div>
        {/* ============================================================================================ */}
        <div className=" ">
          <h1 className=" font-semibold  text-[16px]:lg:text-[20.89px]">
            Front End
          </h1>
          <Wrapper className="">
            <Marquee className="w-[100%]  h-[50px]">
              <MarqueeGroup className="h-[50px]">
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
        </div>
        {/* ========================================================================== */}
        <div className="">
          <h1 className=" font-semibold text-[16px] lg:text-[20.89px]">
            Back End
          </h1>{" "}
          <Wrapper>
            <Marquee className="w-[100%]  ">
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
        </div>
        {/* ========================================================================== */}
        <div className="">
          <h1 className=" font-semibold text-[16px] lg:text-[20.89px]">
            Cyber Security
          </h1>{" "}
          <Wrapper>
            <Marquee className="w-[100%]  ">
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
        </div>
        {/* ========================================================================== */}
        <div className="">
          <h1 className=" font-semibold text-[16px] lg:text-[20.89px]">
            Other
          </h1>{" "}
          <Wrapper>
            <Marquee className="w-[100%]  ">
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
  height: 120px;
  max-width: 1200px;
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
  width: 150%;
  height: 100px;
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

// @media screen and (min-width: 425px) {
//   max-width: 425px;
//   height: 60px;
// }

// @media screen and (min-width: 768px) {
//   max-width: 768px;
//   height: 105px;
// }

// @media screen and (min-width: 1024px) {
//   max-width: 1024px;
//   height: 105px;
// }

// @media screen and (min-width: 1280px) {
//   max-width: 800px;
//   height: 105px;
// }

// @media screen and (min-width: 1440px) {
//   max-width: 1200px;
//   height: 60px;
// }
