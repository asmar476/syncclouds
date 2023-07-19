import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import InnerPageHeading from "../../common component/InnerPageHeading";
import ButtonLight from "../../common component/ButtonLight";
import image1 from "../../assets/Services/WhyChooseSC/image1.svg";
import image2 from "../../assets/Services/WhyChooseSC/image2.svg";
import image3 from "../../assets/Services/WhyChooseSC/image3.svg";
import image4 from "../../assets/Services/WhyChooseSC/image4.svg";
const WhySyncClouds = () => {
  return (
    <div className="my-20">
      <div className="flex items-cente justify-center my-10">
        <MainSubHeading text={"Why Choose "} gradientText={"SyncClouds"} />
      </div>
      <div className="grid grid-cols-4 container mx-auto px-10  my-5">
        <div className="flex flex-col space-y-5 items-center justify-center">
          <img src={image1} alt="images" />
          <InnerPageHeading text={"100+ Industry Experts"} />
        </div>
        <div className="flex flex-col space-y-5 items-center justify-center">
          <img src={image2} alt="images" />
          <InnerPageHeading text={"Supportive Staff Augmentation"} />
        </div>
        <div className="flex flex-col space-y-5 items-center justify-center">
          <img src={image3} alt="images" />
          <InnerPageHeading text={"5X Cost-Effective Solutions"} />
        </div>
        <div className="flex flex-col space-y-5 items-center justify-center">
          <img src={image4} alt="images" />
          <InnerPageHeading text={"Best Offers & Discounts"} />
        </div>
      </div>
      <div className="bg-grayLight flex flex-col items-center justify-center my-10 space-y-3 py-5">
        <p className="text-[16px] font-[400] leading-[24px]">CONTACT US</p>
        <h4 className="text-[25.89px] font-[500] leading-[38.83px] max-w-[1000px] text-center">
          Get The Perfect Combination of Passionate Engineers, Top-Notch Skills,
          And Brilliant Project Ideas
        </h4>
        <ButtonLight text={"Contact Us"} />
      </div>
    </div>
  );
};

export default WhySyncClouds;
