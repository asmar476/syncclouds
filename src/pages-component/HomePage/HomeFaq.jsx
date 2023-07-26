import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import qMark from "../../assets/Images/questionMark.svg";
import FaqSection from "../../common component/FaqSection";
import { faqData } from "../../constant/FAQS";
function HomeFaq() {
  return (
    <div className="container mx-auto px-10 py-5 sm:py-10 lg:py-20">
      <div className="relative sm:flex  justify-center gap-20 ">
        <div className=" text-[#434343] sm:w-[540px]">
          <MainSubHeading
            text={"Frequently Asked "}
            gradientText={"Questions"}
          />
          <p className="leaing-[27px] text-[18px] my-5 font-[600] text-[#434343]">
            Discover the power of Sync Clouds with our FAQs section!
          </p>
          <p>
            Discover the power of Sync Clouds with our FAQs section! Explore
            commonly asked questions, gain valuable insights, and visit our
            Services & Solutions to revolutionize your data synchronization
            experience. Don't wait, and connect with us for more information!
          </p>
          <img className="absolute top-32 left-[15%]" src={qMark} alt="queationMark" />
        </div>
        <div className="w-[50%]">
          <FaqSection faqData={faqData} />
        </div>{" "}
      </div>
    </div>
  );
}

export default HomeFaq;
