import React from "react";
import sideImg from "../../assets/WebDev/WebDevTransformationalServices.svg";
const WebDevTranformServices = () => {
  return (
    <div className="container mx-auto px-2 sm:px-10 pt-20">
      <div className="flex space-y-4 lg:space-y-0 lg:flex-row flex-col justify-center lg:justify-between px-3 mb-20">
        <div>
          <img className="" src={sideImg} />
        </div>
        <div className="w-[100%] lg:w-[40%] space-y-5">
          <h1 className="text-body max-w-[473px] text-[20px] md:text-[25.89px] font-[700] md:leading-[38px]">
            SyncClouds Transformational
            <span className="text-[#002680]">
              {" "}
              Web App Development Services
            </span>
            &nbsp;
          </h1>
          <p className="md:text-[18px] max-w-[473px] font-[400] md:leading-[27px] text-body">
            Skyrocket your sales by providing 24/7 access to your business with
            our best-in-class services for everyone.
          </p>
          <p className="font-[600]">
            Leverage the perk of creativity to a profit-generating website for
            ultimate conversions with all-hands-on-deck collaboration at Sync
            Clouds. We create distinctive and secure custom web apps that
            fulfill our valuable customers' expectations regarding scalability
            and interoperability across all devices.
          </p>
          <h4 className="text-body max-w-[473px] font-[700] md:leading-[24px]">
            Offering Next-Level&nbsp;
            <span className="text-[#002680]">
              Web App Services For Various Platforms
            </span>
            &nbsp;
          </h4>
          <p className="text-body text-sm">
            Along with our expert team of web developers, Sync Cloud is
            providing versatile web development services to help you to fill the
            gap between end-user and advanced marketing approaches. Choose your
            Inclusive Platform that fits your business model, and let us do the
            rest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevTranformServices;
