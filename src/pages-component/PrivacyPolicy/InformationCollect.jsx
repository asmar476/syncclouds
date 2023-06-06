import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import PrivacyInformationCordian from "./PrivcyComponant/PrivacyInformationCordian";

const InformationCollect = () => {
  return (
    <div className="container mx-auto px-10 py-20">
      <div className="flex flex-col items-center justify-center text-center">
        <MainSubHeading text={"Information "} gradientText={"We Collect"} />
        <p className="text-[#335775] font-[500] text-[16px] leading-[24px] max-w-[1000px] my-5 text-center">
          We may collect certain information from you when you use our services.
          This information may include the following:
        </p>
      </div>
      <div className="space-y-5 mt-10">
        <p className="text-[16px] font-[400] leading-[24px]">
          <span className="font-[600]">Personal Information: </span> When you
          sign up for an account or contact us through one of our services, we
          may gather your name, email address, and other contact details.
        </p>
        <p className="text-[16px] font-[400] leading-[24px]">
          <span className="font-[600]">Usage Information:</span> We may keep
          track of the pages you view, the features you use, and the activities
          you do when using our services.
        </p>
        <p className="text-[16px] font-[400] leading-[24px]">
          <span className="font-[600]">Device Information:</span> We may compile
          data about the type of device, operating system, and browser that you
          use to access our services.
        </p>
      </div>
      <div>
        <PrivacyInformationCordian />
      </div>
    </div>
  );
};

export default InformationCollect;
