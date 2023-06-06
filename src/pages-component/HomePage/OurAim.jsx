import React from "react";
import family from "../../assets/white icons/Sync Clouds Family 1.svg";
import ios from "../../assets/white icons/IOS App 1.svg";
import android from "../../assets/white icons/Android App 1.svg";
import web from "../../assets/white icons/Web App 1.svg";
import overlayImg from "../../assets/overlay image/Group 12837.svg";

const OurAim = () => {
  return (
    <div className="relative bg-gradient-to-r from-purpleLight to-gradientBlueLight z-[0]">
      <div className="container mx-auto py-[20px] sm:py-[40px] sm:px-0 px-10">
        <div className="flex items-center justify-center ">
          {" "}
          <h2 className="text-center text-[20px] md:text-[25.89px] font-[600] leading-[38.83px] text-white max-w-[550px] ">
            {" "}
            Our Aim: From Desruptive Creativity to Tangible Solution
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-[60px] mt-10 sm:mt-20">
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <div>
              <img src={family} />
            </div>
            <p className="text-[14px] md:text-[16px] font-[600] text-white leading-[24px]">
              SyncClouds Family
            </p>
            <p className="flex gap-3 text-[20px] md:text-[25.89px font-[600] leading-[38.83px] text-white">
              <span>200</span>
              <span className="">+</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-2">
            <div>
              <img src={family} />
            </div>
            <p className="text-[14px] md:text-[16px] font-[600] text-white leading-[24px]">
              Developers
            </p>
            <p className="flex gap-3 text-[20px] md:text-[25.89px font-[600] leading-[38.83px] text-white">
              <span>200</span>
              <span className="">+</span>
            </p>
          </div>

          <div className="flex flex-col items-center  md:gap-2">
            <div>
              <img src={family} />
            </div>
            <p className="text-[14px] md:text-[16px] font-[600] text-white leading-[24px]">
              Designers
            </p>
            <p className="flex gap-3 text-[20px] md:text-[25.89px font-[600] leading-[38.83px] text-white">
              <span>200</span>
              <span className="">+</span>
            </p>
          </div>

          <div className="flex flex-col items-center  md:gap-2">
            <div>
              <img src={android} />
            </div>
            <p className="text-[14px] md:text-[16px] font-[600] text-white leading-[24px]">
              Android Apps
            </p>
            <p className="flex gap-3 text-[20px] md:text-[25.89px font-[600] leading-[38.83px] text-white">
              <span>200</span>
              <span className="">+</span>
            </p>
          </div>

          <div className="flex flex-col items-center  md:gap-2">
            <div>
              <img src={web} />
            </div>
            <p className="text-[14px] md:text-[16px] font-[600] text-white leading-[24px]">
              Web Apps
            </p>
            <p className="flex gap-3 text-[20px] md:text-[25.89px font-[600] leading-[38.83px] text-white">
              <span>200</span>
              <span className="">+</span>
            </p>
          </div>

          <div className="flex flex-col items-center  md:gap-2">
            <div>
              <img src={ios} />
            </div>
            <p className="text-[14px] md:text-[16px] font-[600] text-white leading-[24px]">
              IOS Apps
            </p>
            <p className="flex gap-3 text-[20px] md:text-[25.89px font-[600] leading-[38.83px] text-white">
              <span>200</span>
              <span className="">+</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center absolute right-[17.5%] top-[25%]  h-[400px] w-[400px] rounded-full  overflow-hidden z-[-1]">
        <img src={overlayImg} />
      </div>
    </div>
  );
};

export default OurAim;
