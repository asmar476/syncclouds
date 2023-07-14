import { offerData } from "../../constant/Data";
import MainSubHeading from "../../common component/MainSubHeading";
import BoldParagraph from "../../common component/BoldParagraph";
import React, { useState } from "react";
import linesHero from "../../assets/Images/lines-hero 1.svg";
import linesHero2 from "../../assets/Images/Bespoke IT Services By SyncClouds.svg";
import ilustrartion from "../../assets/Images/Frame.svg";
import arrowDown from "../../assets/icons/black-arrow-down.svg";
import arrowUp from "../../assets/icons/black_arrow-up.svg";
import InnerPageHeading from "../../common component/InnerPageHeading";
import { Link } from "react-router-dom";
import s from "../../assets/Images/S.svg";
import Carousel from "react-elastic-carousel";
const OfferCard = () => {
  const carouselRef = React.useRef();
  const [hover, setHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState("");
  const upFunc = () => {
    carouselRef.current.slidePrev();
  };
  const downFunc = () => {
    carouselRef.current.slideNext();
  };
  return (
    <div className="relative bg-[#f3f4f9] pl-20 ">
      <div className="pt-20 container mx-auto">
        {/* <img src={s} alt="" />{" "} */}
        <div className="flex items-center justify-around">
          <div className="flex w-[622px] flex-col">
            {/* <Headin2 data={'What We Offer'}/> */}
            <MainSubHeading
              className=" text-left"
              my={"my-5"}
              ml={"ml-2"}
              text={"Bespoke IT Services By"}
              gradientText={" SyncClouds"}
            />
            <BoldParagraph
              text={
                " Make a statement and drive revenue with our trusted IT services to deliver ultimate profitability."
              }
            />
            <img src={linesHero} alt="" />
          </div>
          {/* ============================================= ~ vertical swiper cards ~ ============================================== */}
          <Carousel
            ref={carouselRef}
            verticalMode
            pagination={false}
            showArrows={false}
            itemsToShow={2}
          >
            {offerData.map((card, index) => (
              <div
                key={card.id}
                onMouseEnter={() => {
                  setHover(true), setCurrentIndex(index);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setCurrentIndex("");
                }}
              >
                <div className="relative  mb-5 flex flex-col  p-5 w-[600px] bg-white  rounded shadow-lg hover:bg-blueDark hover:text-white lg:max-h-[300px] xl:max-h-[330px] ">
                  <div className="  w-[50px] rounded-full ">
                    <img
                      src={
                        hover && currentIndex === index
                          ? card.iconWhite
                          : card.icon
                      }
                    />
                  </div>
                  <div className="pt-10">
                    <InnerPageHeading text={`${card.title}`} />
                    <p className="text-[14px] md:text-[16px]  leading-[20px] md:leading-[30px] mb-10">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          <div className="grid gap-10 h-[56.5vh] xl:gap-5">
            <div className="cursor-pointer absolute right-[15%] top-[7%]">
              <img onClick={() => upFunc()} src={arrowUp} alt="" />
            </div>

            <div className="cursor-pointer absolute right-[15%] top-[48%]">
              <img onClick={downFunc} src={arrowDown} alt="" />
            </div>
          </div>
        </div>
        {/* ===========================================================  ~ ~ =========================================================== */}
        <div className="flex">
          <div className="w-[581px]">
            <MainSubHeading
              className=" text-left"
              my={"my-5"}
              ml={"ml-2"}
              text={"Transform digital experience with"}
              gradientText={" SyncClouds"}
            />
            <h4 className="text-primary leading-[38px] mt-4 mb-7 text-[25.89px] font-[600]">
              Boost Your business Expansion!
            </h4>
            <p>
              Sync Clouds is committed to providing everyone with complete
              custom software development services. No matter what, there is
              always a chance to flourish, stand out, acquire, and rise..
            </p>
            <h6 className="my-5 font-[600] ">
              Future Building Using Software, Innovation, And Technology
            </h6>
            <p>
              Today's world is dominated by technology, so businesses and people
              can survive. We have a global clientele because of our unmatched
              solutions and innovative methods.
            </p>
            <Link to={"/contact"}>
              <button
                className=" border border-primary rounded-sm py-2 px-4 mt-10 hover:bg-primary hover:text-white hover:text-bold
            text-primary"
              >
                Get In Touch
              </button>
            </Link>
          </div>
          <div>
            <img src={ilustrartion} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
