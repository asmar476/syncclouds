import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import qMark from "../../assets/Images/questionMark.svg";
import FaqSection from "../../common component/FaqSection";
import { faqData } from "../../constant/FAQS";
function HomeFaq() {
  return (
    <>
      <div className="hidden md:block max-w-[1200px] xl:max-w-[1440px] w-[100%] mx-auto  px-10  sm:px-20 py-10">
        <div className="relative lg:flex-row flex flex-col items-center lg:items-start justify-center gap-5 lg:justify-between ">
          <div className=" text-[#434343] mb-10 text-center lg:text-left w-[540px]">
            <MainSubHeading
              text={"Frequently Asked "}
              gradientText={"Questions"}
            />
            <p className="leaing-[27px] text-[18px] my-5 font-[600] text-[#434343]">
              Discover the power of Sync Clouds with our FAQs section!
            </p>
            <p>
              Discover the power of Sync Clouds with our FAQs section!
              <br /> Explore commonly asked questions, gain valuable insights,
              and visit our Services & Solutions to revolutionize your data
              synchronization experience. Don't wait, and connect with us for
              more information!
            </p>
            <img
              className="absolute md:w-[140px] lg:w-[200px] top-28 md:left-[40%] lg:left-[11%]"
              src={qMark}
              alt="questionMark"
            />
          </div>
          <div className="lg:max-w-[50%]">
            <FaqSection faqData={faqData} />
          </div>{" "}
        </div>
      </div>
      {/* ========================================= mob view ======================================== */}
      <div className="relative md:hidden flex flex-col items-center justify-center px-5 md:px-20 ">
        <div className=" text-[#434343] text-center text-[24px] sm:text-[28px] w-[327px]">
          <MainSubHeading
            text={"Frequently Asked "}
            gradientText={"Questions"}
          />
          <p className="leaing-[27px] text-[14px] sm:text-[18px] my-6 font-[600] text-body">
            Discover the power of Sync Clouds with our FAQs section!
          </p>
          <p className="text-[12px] leading-[18px] mb-16">
            Discover the power of Sync Clouds with our FAQs section! <br />
            Explore commonly asked questions, gain valuable insights, and visit
            our Services & Solutions to revolutionize your data synchronization
            experience. Don't wait, and connect with us for more information!
          </p>
          <center>
            <img
              className="absolute top-10 left-[30%] sm:left-[35%]"
              src={qMark}
              alt="queationMark"
            />
          </center>
        </div>
        <FaqSection faqData={faqData} />
      </div>
    </>
  );
}

export default HomeFaq;
