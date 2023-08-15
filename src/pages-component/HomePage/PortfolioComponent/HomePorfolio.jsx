import React from "react";
import QuranApp from "../../../assets/Portfolio/QuranApp.svg";
import QuranApp1 from "../../../assets/Portfolio/QuranApp1.svg";
import QuranApp2 from "../../../assets/Portfolio/QuranApp2.svg";
import portfolioimg from "../../../assets/Portfolio/portfolioImg.svg";
import ReactElasticCarousel from "react-elastic-carousel";
import { Carousel } from "antd";
const QuranAppProject = [QuranApp, QuranApp1, QuranApp2];
const project1 = [portfolioimg, portfolioimg, portfolioimg];
const project2 = [portfolioimg, portfolioimg, portfolioimg];
const project3 = [portfolioimg, portfolioimg, portfolioimg];
const project4 = [portfolioimg, portfolioimg, portfolioimg];
function HomePorfolio() {
  return (
    <div className="flex flex-col justify-center  items-center ">
      <div className=" grid lg:grid-cols-2">
        <div className="w-[327px] sm:w-[500px] bg-white pb-3 m-2">
          <Carousel>
            {QuranAppProject.map((img, ind) => (
              <div key={ind}>
                <img src={img} alt="img" />
              </div>
            ))}
          </Carousel>
          <div className="px-1.5">
            <h1 className="font-[500] text-[18px]">Mobile Application</h1>
            <p className="text-body">
              Great design can speak to your users in thousands of ways that you
              can't. Get magnetic UX/U
            </p>
          </div>
        </div>
        <div className="w-[327px] sm:w-[500px] bg-white pb-3 m-2">
          <Carousel>
            {project1.map((img, ind) => (
              <div key={ind}>
                <img src={img} alt="img" />
              </div>
            ))}
          </Carousel>
          <div className="px-1.5">
            <h1 className="font-[500] text-[18px]">Web & App Development</h1>
            <p className="text-body">
              Great design can speak to your users in thousands of ways that you
              can't. Get magnetic UX/U
            </p>
          </div>
        </div>{" "}
        <div className="w-[327px] sm:w-[500px] bg-white pb-3 m-2">
          <Carousel>
            {project1.map((img, ind) => (
              <div key={ind}>
                <img src={img} alt="img" />
              </div>
            ))}
          </Carousel>
          <div className="px-1.5">
            <h1 className="font-[500] text-[18px]">UI/UX Designing</h1>
            <p className="text-body">
              Great design can speak to your users in thousands of ways that you
              can't. Get magnetic UX/U
            </p>
          </div>
        </div>{" "}
        <div className="w-[327px] sm:w-[500px] bg-white pb-3 m-2">
          <Carousel>
            {project1.map((img, ind) => (
              <div key={ind}>
                <img src={img} alt="img" />
              </div>
            ))}
          </Carousel>
          <div className="px-1.5">
            <h1 className="font-[500] text-[18px]">IOS App Development</h1>
            <p className="text-body">
              Great design can speak to your users in thousands of ways that you
              can't. Get magnetic UX/U
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePorfolio;
