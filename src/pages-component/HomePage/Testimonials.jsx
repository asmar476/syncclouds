import styled, { keyframes, css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import TestimonialCard from "./TestimonialsCards/TestimonialCard";
import bgLines from "../../assets/Images/abstracts.png";
import bglines2 from "../../assets/Images/abstracts.svg";
import { TestimonialData } from "../../constant/Data";
const Testimonials = () => {
  return (
    <>
      <div className="relative w-full hidden sm:block  mx-auto pr-5 z-0">
        <div>
          <img
            className="absolute  right-0 top-0 z-[-1]"
            src={bgLines}
            alt=""
          />
          <div className=" ">
            <div className=" flex lg:flex-row  gap-2 items-center lg:items-start flex-col justify-center lg:justify-around">
              <div className="w-[350px] text-center lg:text-left">
                <MainSubHeading text={"Testi"} gradientText={"monials"} />
                <p className=" mt-3 text-[18px] text-body max-w-[408px] lg:w-[408px]">
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
              <div className="space-y-10 lg:space-y-0 grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-10">
                {TestimonialData.map((data, i) => (
                  <div key={i}>
                    <TestimonialCard
                      i={i}
                      rating={data.rating}
                      designation={data.designation}
                      name={data.name}
                      summary={data.summary}
                      profileImage={data.profileImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================================== mob view ============================================== */}
      <div className="  flex relative flex-col items-center justify-center mx-5 sm:hidden pt-7">
        <img className="absolute top-0 z-[-1] w-full " src={bglines2} alt="" />
        <MainSubHeading text={"Testi"} gradientText={"monials"} />
        <p className=" mt-5 text-[18px] text-body text-center w-[408px]">
          <span className="font-semibold">Client Stories of Success</span>
          <br />
          From startups to enterprise giants, our software solutions have
          revolutionized businesses worldwide. Discover why our clients rave
          about the transformative power of our software in driving their
          growth.
        </p>
      </div>
      <div className="sm:hidden my-10  bg-white mx-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          draggable={true}
          autoplay={{ delay: 1000 }}
        >
          {TestimonialData.map((data, i) => (
            <SwiperSlide
              key={i}
              className="border border-gray-100 rounded-md shadow-md"
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
    </>
  );
};

export default Testimonials;
