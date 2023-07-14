import React, { useState } from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import TeamMemberData from "../../constant/TeamMemberData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const OurTeam = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlayIndex, setShowOverlayIndex] = useState("");
  return (
    <div className="container mx-auto px-10 my-20">
      <h1 className="text-[50px] text-center font-[800] leading-[65px]">
        Give Your Dreams a Digital Reality with our
        <br />
        <span className="text-[#002680]"> Passionate Team</span>
      </h1>
      <div className="my-10">
        {" "}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={50}
          breakpoints={{
            1236: {
              slidesPerView: 4,
            },
            1024: {
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
          autoplay={{ delay: 2000 }}
        >
          {TeamMemberData.map((data, index) => (
            <SwiperSlide id={index}>
              <div
                className="relative z-0 w-[300px]  h-[300px] bg-purpleLight flex  justify-center rounded overflow-hidden"
                onMouseEnter={() => {
                  setShowOverlay(true);
                  setShowOverlayIndex(index);
                }}
                onMouseLeave={() => {
                  setShowOverlay(false);
                  setShowOverlayIndex("");
                }}
              >
                <img
                  src={data.img}
                  className={`${
                    showOverlay && showOverlayIndex === index
                      ? "scale-125 transition-all ease-in duration-200"
                      : "scale-100 transition-all ease-in  duration-200"
                  } `}
                />
                {showOverlay && showOverlayIndex === index && (
                  <div className="absolute px-5 top-0 left-0 bottom-0 right-0 flex flex-col justify-end z-[1] bg-gradient-to-b from-transparent to-white">
                    <h4 className="text-[16px] font-[600] leading-[24px]">
                      {data.name}
                    </h4>
                    <p className="text-[13px] font-[500] leading-[14px]">
                      {data.position}
                    </p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
