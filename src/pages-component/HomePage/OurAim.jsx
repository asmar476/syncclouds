import React from "react";
import web from "../../assets/SC Icons SVG/Web & Mobile Development.svg";
import ios from "../../assets/SC Icons SVG/IOS App.svg";
import android from "../../assets/SC Icons SVG/Android App.svg";
import designer from "../../assets/SC Icons SVG/Designer.svg";
import developer from "../../assets/SC Icons SVG/Developer.svg";
import Testimonials from "./Testimonials";
import bg from "../../assets/Images/ourAimBg.svg";
const OurAim = () => {
  return (
    <div className="  bg-[#F8FCFF]">
      <div className="relative">
        <div className="flex justify-end mr-28">
          {" "}
          <img className=" " width={1100} src={bg} />
        </div>
        <div className=" absolute top-0 ml-20 container mx-auto py-[16px] sm:py-[30px] sm:px-0">
          <div className="flex items-center justify-center ">
            <h2 className="text-center text-[20px] md:text-[25.89px] font-[0700] leading-[38.83px max-w-[550px] ">
              Our Aim: From Desruptive Creativity to <br />{" "}
              <span className="text-primary">Tangible Solution</span>{" "}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-[60px] mt-10 sm:mt-20">
            <div className="ml-22 flex flex-col border-l border-primary items-center gap-1 md:gap-2">
              <div>
                <img src={web} alt="web" width={62} />
              </div>
              <p className="flex gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[38.83px] text-primary">
                <span>200</span>
                <span className="">+</span>
              </p>
              <p className="text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
                SyncClouds Family
              </p>
            </div>

            <div className="ml-22 flex flex-col border-l border-primary items-center gap-1 md:gap-2">
              <div>
                <img src={developer} alt="dev" width={62} />
              </div>
              <p className="flex gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[38.83px] text-primary">
                <span>200</span>
                <span className="">+</span>
              </p>
              <p className="text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
                Developers
              </p>
            </div>

            <div className="ml-22 flex flex-col border-l border-primary items-center  md:gap-2">
              <div>
                <img src={designer} alt="web" width={62} />
              </div>
              <p className="flex gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[38.83px] text-primary">
                <span>200</span>
                <span className="">+</span>
              </p>
              <p className="text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
                Designers
              </p>
            </div>
            <div className="ml-22 flex flex-col border-l border-primary items-center  md:gap-2">
              <div>
                <img src={android} width={62} />
              </div>
              <p className="flex gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[38.83px] text-primary">
                <span>200</span>
                <span className="">+</span>
              </p>
              <p className="text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
                Android Apps
              </p>
            </div>
            <div className="ml-22 flex flex-col border-l border-primary items-center  md:gap-2">
              <div>
                <img src={web} alt="web" width={62} />
              </div>
              <p className="flex gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[38.83px] text-primary">
                <span>200</span>
                <span className="">+</span>
              </p>{" "}
              <p className="text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
                Web Apps
              </p>
            </div>

            <div className="ml-22 flex flex-col border-l border-primary items-center  md:gap-2">
              <div>
                <img src={ios} alt="ios" width={62} />
              </div>
              <p className="flex gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[38.83px] text-primary">
                <span>200</span>
                <span className="">+</span>
              </p>
              <p className="text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
                IOS Apps
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <Testimonials />
      </div>
    </div>
  );
};

export default OurAim;
