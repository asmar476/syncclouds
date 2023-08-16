import styled, { keyframes, css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Scrollbar,
  Navigation,
  EffectCoverflow,
} from "swiper";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/autoplay";

import MainSubHeading from "../../common component/MainSubHeading";
import TestimonialCard from "./TestimonialsCards/TestimonialCard";
import bgLines from "../../assets/Images/abstracts.png";
import bglines2 from "../../assets/Images/abstracts.svg";
import { TestimonialData } from "../../constant/Data";

import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <>
      <div className="relative  ">
        <img
          className="absolute w-full h-[100%] right-0 top-0 z-[-1]"
          src={bgLines}
          alt=""
        />
        <div className=" items-center max-w-[1200px] xl:max-w-[1440px] w-[100%] mx-auto  px-10  sm:px-20  z-[10] h-[100%]">
          <div className=" h-[100%]">
            <div className=" flex flex-col gap-2 items-center   justify-center mt-10 py-10 h-[100%]">
              <div className=" p-3  flex flex-col items-center text-center">
                <MainSubHeading text={"Testi"} gradientText={"monials"} />
                <p className=" mt-3 max-w-[1000px] text-[14px] lg:text-[18px] text-body ">
                  <span className="font-semibold">
                    Client Stories of Success
                  </span>
                  <br />
                  From startups to enterprise giants, our software solutions
                  have revolutionized businesses worldwide. Discover why our
                  clients rave about the transformative power of our software in
                  driving their growth.
                </p>
              </div>

              <div className="w-full max-w-[1000px]  xl:max-w-[1200px] flex items-center justify-center mt-10 mb-10">
                {" "}
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  // slidesPerView={3}
                  loop={true}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  breakpoints={{
                    1280: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    300: {
                      slidesPerView: 1,
                    },
                  }}
                  draggable={true}
                  autoplay={{ delay: 1000 }}
                  modules={[
                    Navigation,
                    EffectCoverflow,
                    Pagination,
                    Scrollbar,
                    Autoplay,
                  ]}
                  // className="mySwiper"
                >
                  {TestimonialData.map((data, i) => (
                    <SwiperSlide
                      key={i}
                      className="border border-gray-100 rounded-md shadow-md bg-white w-full  xl:max-w-[450px]"
                      style={{
                        "& .Swiper__slide": { width: "calc(0%)" },
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <TestimonialCard
                        i={i}
                        rating={data.rating}
                        designation={data.designation}
                        name={data.name}
                        summary={data.summary}
                        profileImage={data.profileImage}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================================== mob view ============================================== */}
    </>
  );
};

export default Testimonials;
