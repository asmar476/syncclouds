import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { TeamMemberData } from "../../../constant/TeamMemberData";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function OurTeamNew() {
  return (
    <div className="mt-16 w-[100%] mx-auto max-w-[1440px]">
      <h1 className="mb-16 text-center font-bold text-[25.89px]">
        Give Your Dreams a Digital Reality with our
        <br />
        <span className="text-[#002680]"> Passionate Team</span>
      </h1>
      <div className="hidden md:flex flex-col justify-center items-center">
        <div className="gap-10 grid md:grid-cols-2 2xl:grid-cols-3">
          {TeamMemberData.map((data, index) => (
            <div className="perspective-1000 h-[400px] w-[350px] lg:w-[450px]">
              <div className="card">
                <div
                  key={index}
                  className="card-front bg-white shadow-lg border flex flex-col justify-center items-center border-gray-100 rounded-lg p-6 flipBack"
                >
                  <div>
                    <img
                      // width={180}
                      className="rounded-full w-[180px] h-[180px] "
                      src={data.img}
                      alt={data.name}
                    />
                  </div>
                  <h1 className="text-primary font-semibold mt-10 mb-1 text-[25px]">
                    {data.name}
                  </h1>
                  <p className="text-body font-semibold text-[15px] mb-5">
                    {data.position}
                  </p>
                </div>
                <div className="card-back bg-white shadow-lg border flex flex-col justify-center items-center border-gray-100 rounded-lg p-6 flipBack2">
                  <div className="flex w-full items-center justify-between">
                    <div className="h-[100px] w-[100px]">
                      {" "}
                      <img
                        width={75}
                        height={30}
                        className="rounded-full "
                        src={data.img}
                        alt={data.name}
                      />
                    </div>
                    <div>
                      <h1 className="text-center text-primary font-semibold my-1 text-[14px]">
                        {data.name}
                      </h1>
                      <p className="text-center text-body font-semibold text-[14px] mb-5">
                        {data.position}
                      </p>
                    </div>
                  </div>{" "}
                  <div className=" text-body my-1 space-y-5">
                    <p>
                      <span className="text-[24px] font-semibold">
                        Skill Set:
                      </span>{" "}
                      {data?.skillSet?.map((item, i) => (
                        <li className=" text-[18px]" key={i}>
                          {item}
                        </li>
                      ))}
                    </p>
                  </div>
                  <div className="w-full flex items-center mt-2 justify-end">
                    <Link to={data.linkeinUrl} target="_">
                      <BsLinkedin className="text-primary text-right w-full  text-[27px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* +++++++++++++++++++++++++++ mobile view +++++++++++++++++++++++++++++++++++++ */}
      <div className="md:hidden  ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          // spaceBetween={50}
          slidesPerView={1}
          loop={true}
          draggable={true}
          autoplay={{ delay: 2000 }}
        >
          {TeamMemberData.map((data, index) => (
            <SwiperSlide>
              <div className="perspective-1000 h-[400px] w-[350px] lg:w-[450px]">
                <div className="card">
                  <div
                    key={index}
                    className="card-front bg-white shadow-lg border flex flex-col justify-center items-center border-gray-100 rounded-lg p-6 flipBack"
                  >
                    <div>
                      <img
                        className="rounded-full w-[180px] h-[180px] "
                        src={data.img}
                        alt={data.name}
                      />
                    </div>
                    <h1 className="text-primary font-semibold mt-10 mb-1 text-[25px]">
                      {data.name}
                    </h1>
                    <p className="text-body font-semibold text-[15px] mb-5">
                      {data.position}
                    </p>
                  </div>
                  <div className="card-back bg-white shadow-lg border flex flex-col justify-center items-center border-gray-100 rounded-lg p-6 flipBack2">
                    <div className="flex w-full items-center justify-between">
                      <div className="h-[100px] w-[100px]">
                        {" "}
                        <img
                          width={75}
                          height={30}
                          className="rounded-full "
                          src={data.img}
                          alt={data.name}
                        />
                      </div>
                      <div>
                        <h1 className="text-center text-primary font-semibold my-1 text-[14px]">
                          {data.name}
                        </h1>
                        <p className="text-center text-body font-semibold text-[14px] mb-5">
                          {data.position}
                        </p>
                      </div>
                    </div>{" "}
                    <div className=" text-body my-1 space-y-5">
                      <p>
                        <span className="text-[24px] font-semibold">
                          Skill Set:
                        </span>{" "}
                        {data?.skillSet?.map((item, i) => (
                          <li className=" text-[18px]" key={i}>
                            {item}
                          </li>
                        ))}
                      </p>
                    </div>
                    <div className="w-full flex items-center mt-2 justify-end">
                      <Link to={data.linkeinUrl} target="_">
                        <BsLinkedin className="text-primary text-right w-full  text-[27px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OurTeamNew;
{
  /* <div className="flex justify-between items-center w-[100%] px-10">
      <button className="border border-primary py-2 px-4 hover:bg-primary hover:text-white hover:text-bold rounded-full text-[12px] font-semibold text-primary">
        View Full Profile
      </button>
      <Link to={data.linkeinUrl} target="_">
        <BsLinkedin className="text-primary text-[27px]" />
      </Link>
    </div> */
}
