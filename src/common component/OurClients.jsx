import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MainSubHeading from "./MainSubHeading";
import BoldParagraph from "./BoldParagraph";
import { clientLogos } from "../constant/Data";

const OurClients = () => {
  return (
    <div className="">
      <div className="max-w-[1200px] xl:max-w-[1440px] w-[100%] mx-auto  px-10  sm:px-20 mt-20 mb-10">
        <div className="flex flex-col items-center">
          <MainSubHeading text={"Our "} gradientText={"Clients"} ml={"ml-2"} />
          <p
            className={`w-[327px] md:w-[495px]    text-center text-[14px] md:text-[18px]  font-[500] `}
          >
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex justify-center md:py-10 md:mt-5">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            loop={true}
            draggable={true}
            autoplay={{ delay: 1000 }}
            breakpoints={{
              1236: {
                slidesPerView: 4,
              },
              600: {
                slidesPerView: 3,
              },
              400: {
                slidesPerView: 3,
              },
              200: {
                slidesPerView: 3,
              },
            }}
          >
            {clientLogos.map((logo) => (
              <SwiperSlide
                key={logo.id}
                style={{ "& .Swiper__slide": { width: "0%" } }}
              >
                <img src={logo.src} alt="" className="h-[100px] w-[120px]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
