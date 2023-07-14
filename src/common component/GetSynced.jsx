import React from "react";
import PrimaryButton from "./PrimaryButton";

const GetSynced = () => {
  return (
    <div className="bg-primary px-[88px] py-16 flex items-center justify-center flex-col">
      <div className="flex flex-col items-center text-center space-y-6  md:gap-[15px] max-w-[600px]">
        <h2 className="text-[20px] text-white md:text-[25.89px] font-[600] leading-[38.83px]">
          Get Synced Up With SyncClouds
        </h2>
        <p className="text-[14px] text-white md:text-[16px] font-[400] leading-[24px] ">
          We assist you in leading the new world by providing a comprehensive
          range of effective tech services. Step on it fast!
        </p>
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-5">
          <input
            type="text"
            placeholder="Enter your email address"
            className="h-[44px] px-5 w-[459px] rounded-sm border border-gray-100 outline-none"
          />
          <div className="">
            <button className="text-[#3c3f47] font-[600] h-[44px] bg-white rounded-sm px-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSynced;