import React from "react";
import img from "../../assets/BLogs/stepByStep.svg";
const BlogsHero = () => {
  return (
    <div className="max-w-[1200px] xl:max-w-[1400px]  mx-auto px-10 mt-16">
      <div className="  flex flex-col justify-center items-center">
        <h1 className="text-primary font-[700] text-[20px] md:text-[35px] lg:text-[41px] ">
          {"The SyncClouds Blog"}
        </h1>
        <p className="text-center text-body font-[500] text-[16px] leading-[24px] lg:max-w-[800px] mt-5">
          {`In a software-defined world, the Simform Blog is your place to navigate through the renaissance in
technology. Our publication aims to provide you the full scoop on the groundbreaking research,
thought-leadership, and perspective on tech innovation in the world of software development, with a
deep context to help tech leaders make intelligent decisions.`}
        </p>
        <div className="flex mt-5 ">
          <img src={img} alt="main " />{" "}
          <h1>Step-by-Step Guide on How to Build an Auction Website  </h1>
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
