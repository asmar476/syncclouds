import React from "react";
import PrimaryButton from "./PrimaryButton";

const GetSynced = () => {
  return (
    <div className="bg-primary  py-16 px-5 flex items-center justify-center flex-col">
      <div className="flex flex-col items-center text-center space-y-6  md:gap-[15px] max-w-[600px]">
        <h2 className=" text-white text-[25.89px] font-[600] leading-[38.83px]">
          Get Synced Up With Sync Clouds
        </h2>
        <p className=" text-white text-[16px] font-[400] leading-[24px] ">
          We assist you in leading the new world by providing a comprehensive
          range of effective tech services. Step on it fast!
        </p>
        <div className="flex  gap-3 sm:gap-5">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter your email address"
              className="getIntouch-email text-[13px] sm:text-[16px] h-[40px] sm:h-[44px] px-2 sm:px-5    sm:w-[459px] rounded-sm border border-gray-100 outline-none"
            />
          </div>
          <div className="">
            <button className="text-primary font-[600] text-[13px] sm:text-[16px] h-[40px] sm:h-[44px] bg-white rounded-sm px-2 sm:px-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSynced;
