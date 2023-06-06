import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import checkIcon from "../../assets/contact/check-square.svg";
import InnerPageHeading from "../../common component/InnerPageHeading";

const data = [
  {
    title: "Completely Accessible",
    description:
      "We are available for phone calls 24 hours a day, so you will be able to resolve any problem at any time you want. Our team will be there at your doorstep.",
  },
  {
    title: "Qualified Agents",
    description:
      "Our team members are highly skilled, trained, educated, and professional. They're all trained per the most current technology.",
  },
  {
    title: "Staff Augmentation",
    description:
      "Outsourced developers are managed directly by you and collaborate remotely with your internal team. It works best for bridging the knowledge and resource gaps in your development team.",
  },
  {
    title: "Adequate Price",
    description:
      "Our prices are affordable for everyone. We provide flexible discounts so you can use any service you require.",
  },
  {
    title: "Exceptional Offers",
    description:
      "We offer discounts on the most well-known services, meaning you will surely get help without delay.",
  },
];

const WhyChoseUs = () => {
  return (
    <div className="container mx-auto px-10 my-20">
      <div className="flex items-center justify-center">
        <MainSubHeading text={"Why"} gradientText={"Choose Us"} ml={"ml-1"} />
      </div>
      <div className="space-y-20 my-20">
        {data.map((val, index) => (
          <div className={index}>
            <div className="flex items-center gap-2 mb-2">
              <img src={checkIcon} />
              <InnerPageHeading text={val.title} />
            </div>
            <p className="text-[16px] leading-[24px] font-[400]">
              {val.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoseUs;
