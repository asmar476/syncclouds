import ButtonDark from "./ButtonDark";
import MainHeading from "./MainHeading";
import useAnalyticsEventTracker from "../common component/useAnalyticsEventTracker";
const HeroComponent = ({
  title1,
  title2,
  title3,
  description,
  description2,
  buttonText,
  Illustration,
}) => {
  const gaEventTracker = useAnalyticsEventTracker("Hero");
  return (
    <div className="mx-auto container  px-10 mt-20">
      <div className="flex flex-col xl:gap-10 items-center justify-center space-x-10 space-y-10 lg:space-y-0 lg:flex-row">
        <div className="space-y-10 text-center  md:w-[617px] lg:text-left ">
          <MainHeading text1={title1} gradientText={title2} text2={title3} />
          <p className="text-sm md:text-lg text-justify lg:text-left max-w-[750px]">
            {description}
          </p>
          <p className="text-sm md:text-lg text-justify lg:text-left mt-5 max-w-[750px]">
            {description2}
          </p>
          {buttonText !== "" && (
            <ButtonDark
              onClick={() => {
                gaEventTracker("Dark Button");
              }}
              text={buttonText}
            />
          )}
        </div>
        <img
          src={Illustration}
          alt="Hero Illustration"
          className="hidden md:block max-w-[516px] max-h-[550px] w-[100%] h-[100%]"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
