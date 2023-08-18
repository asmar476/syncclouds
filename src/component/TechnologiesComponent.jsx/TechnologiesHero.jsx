import React from "react";
import techImage from "../../assets/TechnologiesPage/technologiesHero.svg";
import MainSubHeading from "../../common component/MainSubHeading";
import {
  frontend,
  backend,
  Mobile,
  cloud,
  Ai,
  ecom,
  wordpress,
  cyber,
  languages,
  web,
} from "../../constant/TechData";
import TechnologiesCommonComp from "./TechnologiesCommonComp";
const techCategories = [
  { name: "BackEnd", techArray: backend },
  { name: "FrontEnd", techArray: frontend },
  { name: "Languages", techArray: languages },
  { name: "Mobile", techArray: Mobile },
  { name: "Cyber Security", techArray: cyber },
  { name: "Cloud", techArray: cloud },
  { name: "CMS", techArray: wordpress },
  { name: "E-commerce", techArray: ecom },
  { name: "AI", techArray: Ai },
];

function TechnologiesHero() {
  return (
    <div className="max-w-[1200px] xl:max-w-[1400px] mx-auto flex justify-center flex-col items-center  px-10 mt-10 md:space-y-8 lg:mt-20 md:pt-20">
      <img
        className="hidden sm:block w-[100%]"
        src={techImage}
        alt="Technology"
      />
      <MainSubHeading text={"Techno"} gradientText={"logies"} />
      <p className="sm:text-[20px] text-[14px] text-center text-[#434343] sm:mb-5">
        We Love using the latest tech to our advantage.
      </p>
      <div className="w-full space-y-10 ">
        {techCategories.map(({ name, techArray }) => (
          <TechnologiesCommonComp
            key={name}
            Category={name}
            techArray={techArray}
          />
        ))}
      </div>
    </div>
  );
}

export default TechnologiesHero;
