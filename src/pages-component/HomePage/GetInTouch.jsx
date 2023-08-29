import heroIllustration from "../../assets/home illustration/getInTouchIllustration.svg";
import getInTouchIllustration from "../../assets/Group-2784.svg";
import MainSubHeading from "../../common component/MainSubHeading";
import InnerPageHeading from "../../common component/InnerPageHeading";
import circuleIllustration from "../../assets/overlay image/Group 2.svg";
import useAnalyticsEventTracker from "../../common component/useAnalyticsEventTracker";
const GetInTouch = () => {
  const gaEventTracker = useAnalyticsEventTracker("Get In Touch");
  return (
    <div className="relative container mx-auto px-[50px] pt-10 lg:py-20 bg-grayLight my-10 lg:my-20">
      <img
        src={circuleIllustration}
        className="absolute top-0 left-0 hidden lg:block"
      />{" "}
      <img
        src={circuleIllustration}
        className="absolute bottom-0 right-0 hidden lg:block"
      />{" "}
      <div className="text-center">
        <MainSubHeading
          text={"Transform digital"}
          ml={"ml-2"}
          gradientText={"experience with SyncClouds"}
        />
      </div>
      <div className="py-10 lg:py-20 flex flex-col-reverse gap-5 lg:gap-20 items-center lg:items-start  justify-between lg:flex-row mt-10 lg:mt-20  lg:h-[424px]">
        <div className="space-y-10 text-center  lg:text-left max-w-[600px]">
          <InnerPageHeading
            text={"Transform digital experience with SyncClouds"}
          />

          <p className="text-[16px] font-[400]  lg:text-left ">
            We are a digital transformation and software development company
            that provides cutting-edge engineering solutions, helping 100
            companies and enterprise clients untangle complex issues that always
            emerge during their digital evolution journey. Since2020 we have
            been a visionary and as foundations for future growth.
          </p>
          <button
            onClick={() => {
              gaEventTracker("Get in Touch");
            }}
            className="px-[20px] py-[10px] rounded-3xl border text-[14px] border-black hover:border-gradientBlueLight hover:bg-gradientBlueLight hover:text-white"
          >
            Get in touch
          </button>
        </div>
        {/* <img
          src={heroIllustration}
          alt="Hero Illustration"
          className="w-[364px] h-[271px] lg:w-[600px] lg:h-[400px]"
        /> */}
        <img
          src={getInTouchIllustration}
          alt="Hero Illustration"
          className="w-[364px] h-[271px]"
        />
      </div>
      <div className="lg:pl-32  flex flex-col gap-5 lg:gap-32 items-center justify-between lg:flex-row lg:max-h-[271px]  lg:my-20 pb-10">
        <img
          src={getInTouchIllustration}
          alt="Hero Illustration"
          className="w-[364px] h-[271px]"
        />
        <div className="space-y-5 lg:space-y-10 text-center  lg:text-left ">
          <InnerPageHeading text={"Digital Experience that Differentiates"} />

          <p className="text-[16px] font-[400]  lg:text-left">
            From IT strategy consulting and comprehensive technology roadmaps to
            the end-to-enddevelopment of scalable solutions, Intellectsoft
            delivers full-cycle software developmentservices that adapt
            seamlessly to your project requirements and business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
