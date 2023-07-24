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
      <div className="text-center mt-28 mb-16">
        <MainSubHeading text={"Frequentaly "} gradientText={"Ask Questions"} />
        <p className="text-body font-[500] text-[18px] leading-[24px] my-5">
          Discover the power of Sync Clouds with our FAQs section!
        </p>
      </div>
      <div className=" my-20 space-y-10 sm:space-y-0 sm:flex justify-center gap-10 px-14 ">
        <FaqSection faqData={firstFourFaqs} />
        <FaqSection faqData={lastFourFaqs} />
      </div>
    </>
  );
}

export default TwoColFAQs;
