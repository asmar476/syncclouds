import React from "react";
import PrimaryButton from "./PrimaryButton";

const GetSynced = () => {
  return (
    <div className="bg-grayLight px-[88px] py-[40px] flex items-center justify-center flex-col">
      <div className="flex flex-col items-center text-center gap-[5px] md:gap-[15px] max-w-[600px]">
        <h2 className="text-[20px] md:text-[25.89px] font-[600] leading-[38.83px]">
          Get Synced Up With SyncClouds
        </h2>
        <p className="text-[14px] md:text-[16px] font-[400] leading-[24px] ">
          We assist you in leading the new world by providing a comprehensive
          range of effective tech services. Step on it fast!
        </p>
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-5">
          <input
            type="text"
            placeholder="Enter your email address"
            className="py-[6px] sm:py-[8px] px-[10px] sm:px-[20px] w-[280px] rounded-3xl border border-gray-100 outline-none"
          />
          <div className="w-[150px] sm:w-full">
            {" "}
            <PrimaryButton text={"Subscribe"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSynced;
