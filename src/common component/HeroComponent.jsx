import heroIllutration from "../assets/Group-12783.svg";
import ButtonDark from "./ButtonDark";
import ButtonLight from "./ButtonLight";
import MainHeading from "./MainHeading";
const HeroComponent = ({
  title1,
  title2,
  title3,
  description,
  description2,
  buttonText,
  Illustration,
}) => {
  return (
    <div className="container mx-auto  px-10 py-10 md:py-32 md:mt-10">
      <div className="flex flex-col xl:gap-10 items-center justify-between space-y-10 lg:space-y-0 lg:flex-row">
        <div className="space-y-10 text-center  lg:text-left ">
          <MainHeading text1={title1} gradientText={title2} text2={title3} />
          <p className="text-sm md:text-lg text-justify lg:text-left max-w-[750px]">
            {description}
          </p>
          <p className="text-sm md:text-lg text-justify lg:text-left mt-5 max-w-[750px]">
            {description2}
          </p>
          {buttonText !== "" && <ButtonLight text={buttonText} />}
        </div>
        <img
          src={Illustration}
          alt="Hero Illustration"
          className="max-w-[516px] max-h-[550px] w-[100%] h-[100%]"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
