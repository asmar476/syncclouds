import React from "react";
import styled, { keyframes, css } from "styled-components";
export function DualMarqueeSlider({ category, dataArray }) {
  return (
    <div className="">
      <h1 className="mt-6 md:mt-16 mb-1 md:mb-4 font-semibold text-[20px] lg:text-[26px] text-body">
        {category}
      </h1>{" "}
      <Wrapper>
        <Marquee className="w-[100%]  ">
          <MarqueeGroup className="">
            {dataArray.map((logo, index) => (
              <div
                key={index}
                className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[200px] space-x-2 bg-white s rounded-lg justify-center px-6 py-1 drop-shadow-lg "
              >
                <img className="w-[50px] md:w-[65px]" src={logo.image} alt="" />

                <p className="font-[600] text-body text-[14px] md:text-[18px]">
                  {logo.title}
                </p>
              </div>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {dataArray.map((logo, index) => (
              <div
                key={index}
                className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[200px] space-x-2 bg-white s rounded-lg justify-center px-6 py-1 drop-shadow-lg "
              >
                <img className="w-[50px] md:w-[65px]" src={logo.image} alt="" />
                <p className="font-[600] text-body text-[14px] md:text-[18px]">
                  {logo.title}
                </p>
              </div>
            ))}
          </MarqueeGroup>{" "}
        </Marquee>
      </Wrapper>
    </div>
  );
}

export function LeftToRightMarquee({ category, dataArray }) {
  return (
    <div className="">
      <h1 className="mt-6 md:mt-16 mb-1 md:mb-4 font-semibold text-[20px] lg:text-[26px] text-body">
        {category}
      </h1>
      <Wrapper>
        <Marquee className="w-[100%]  ">
          <MarqueeGroup2 className="">
            {dataArray.map((logo, index) => (
              <div
                key={index}
                className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[200px] space-x-2 bg-white s rounded-lg justify-center px-6 py-1 drop-shadow-lg "
              >
                <img className="w-[50px] md:w-[65px]" src={logo.image} alt="" />

                <p className="font-[600] text-body text-[14px] md:text-[18px]">
                  {logo.title}
                </p>
              </div>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {dataArray.map((logo, index) => (
              <div
                key={index}
                className="h-[100%] overflow-hidden whitespace-no-wrap mr-10 flex items-center w-[200px] space-x-2 bg-white  rounded-lg justify-center px-6 py-1 drop-shadow-lg "
              >
                <img className="w-[50px] md:w-[65px]" src={logo.image} alt="" />
                <p className="font-[600] text-body text-[14px] md:text-[18px]">
                  {logo.title}
                </p>
              </div>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </div>
  );
}
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
