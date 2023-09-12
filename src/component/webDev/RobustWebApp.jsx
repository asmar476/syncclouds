import React from "react";
import { robust } from "../../constant/WebDevlopementPageData";
import Carousel from "react-elastic-carousel";
const RobustWebApp = () => {
  return (
    <div className="container mx-auto px-2 sm:px-10 pt-20">
      <div className="flex space-y-4 flex-col justify-center items-center px-3 mb-20">
        <h1 className="text-center  text-[18px] md:text-[25px] font-[700] xl:leading-[65px]">
          Robust <span className="text-[#002680]"> Web App Solutions</span>
          &nbsp; For All Businesses
        </h1>
        <p className="text-center text-body font-[500] text-[16px] leading-[24px] lg:max-w-[800px] mt-5">
          We have extensive experience delivering engaging web solutions for a
          diverse clientele across various industries, from startups to large
          corporations.
        </p>
        <div className="hidden md:block">
          {/* =====================================================web view ======================== */}
          <div className=" flex flex-wrap gap-3 items-center justify-center">
            {robust.map((data, ind) => (
              <div
                key={ind}
                className="bg-white border relative  border-gray-100
          rounded-md shadow-md h-[200px] lg:h-[230px] px-6 py-5 w-[360px] lg:w-[408px] mb-5"
              >
                <div className="flex items-center gap-3 ">
                  <div className=" absolute top-[-20px]  rounded-full  border-4 p-2 shadow-md  bg-white">
                    <img
                      className="w-[50px] lg:w-[68px]"
                      src={data.icon}
                      alt={`image ${ind}`}
                    />
                  </div>
                  <h1 className=" ml-20 lg:ml-28 font-[600] text-[18px] lg:text-[20px] text-primary">
                    {data.title}
                  </h1>
                  {/* <h1 className="font-[600] text-[224px] absolute overflow-hidden z[-1] right-[-30px] bottom-[-10px] text-gray-100">
                0{ind + 1}
              </h1> */}
                </div>
                <p className="text-[14px] lg:text-[16px]  mt-5 lg:mt-10 ">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
          {/* =====================================================mob view ======================== */}

          <div className=" md:hidden ">
            <Carousel
              // ref={carouselRef}
              itemsToShow={1}
              pagination={false}
              showArrows={true}
              // enableAutoPlay
              // autoPlaySpeed={1000}
              // isRTL={false}
            >
              {robust.map((data, ind) => (
                <div
                  key={ind}
                  className="bg-white border relative  border-gray-100
          rounded-md shadow-md p-3 max-w-[408px] mb-5"
                >
                  <div className="flex items-center gap-2 sm:gap-3 ">
                    <div className="  rounded-full  border-4 p-1 shadow-md  bg-white">
                      <img
                        className="w-[35px] sm:w-[70px]"
                        src={data.icon}
                        alt={`image ${ind}`}
                      />
                    </div>
                    <h1 className=" font-[600] text-[10px] sm:text-[18px] text-primary">
                      {data.title}
                    </h1>
                    {/* <h1 className="font-[600] text-[224px] absolute overflow-hidden z[-1] right-[-30px] bottom-[-10px] text-gray-100">
                0{ind + 1}
              </h1> */}
                  </div>
                  <p className="mt-2 sm:text-[16px] text-[11px]">
                    {data.description}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobustWebApp;
