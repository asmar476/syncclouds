import React from "react";
import { faqData } from "../../constant/FAQS";
import FaqSection from "../../common component/FaqSection";
import MainSubHeading from "../../common component/MainSubHeading";
function TwoColFAQs() {
  // Divide the faqData array into two separate arrays
  const firstFourFaqs = faqData.slice(0, 4);
  const lastFourFaqs = faqData.slice(4);
  return (
    <>
      <div>
        <div className="px-10 text-center  mb-7 ">
          <MainSubHeading text={"FAQS"} gradientText={""} />
          {/* <p className="text-body font-[500] lsm:text-[12px] sm:text-[18px] leading-[24px] mt-5">
          Discover the power of SyncClouds with our FAQs section!
        </p> */}
        </div>
        <div className=" mb-20 space-y-5 lg:space-y-0 lg:flex justify-center gap-10 px-10">
          <FaqSection faqData={firstFourFaqs} />
          <FaqSection faqData={lastFourFaqs} />
        </div>
      </div>
    </>
  );
}

export default TwoColFAQs;
