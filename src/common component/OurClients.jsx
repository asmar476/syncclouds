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
    <div className="container mx-auto px-10">
      <div className="flex flex-col items-center">
        <MainSubHeading text={"Our "} gradientText={"Clients"} ml={"ml-2"} />
        <BoldParagraph
          text={"We have been working with some Fortune 500+ clients"}
        />
      </div>
      <div className="flex justify-between md:py-10 md:mt-5">
        <Swiper
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
              slidesPerView: 3,
            },
            200: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          draggable={true}
          autoplay={{ delay: 1000 }}
        >
          {clientLogos.map((logo) => (
            <SwiperSlide
              key={logo.id}
              style={{ "& .Swiper__slide": { width: "calc(0%)" } }}
            >
              <img
                src={logo.src}
                alt=""
                className="h-[100px] md:h-[150px] w-[100px] md:w-[150px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurClients;
