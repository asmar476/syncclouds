import React, { useState, useRef } from "react";
import { offerData } from "../../constant/Data";
import MainSubHeading from "../../common component/MainSubHeading";
import InnerPageHeading from "../../common component/InnerPageHeading";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import line from "../../assets/Images/line.svg";
import transform from "../../assets/Images/Transform Digital Experience with SyncClouds-01.svg";
import linesHero from "../../assets/Images/lines-hero 1.svg";
import curlArrow from "../../assets/Images/Frame.svg";
import arrowDown from "../../assets/icons/black-arrow-down.svg";
import arrowUp from "../../assets/icons/black_arrow-up.svg";
import s from "../../assets/Images/S.svg";
const OfferCard = () => {
  const carouselRef = useRef();
  const [hover, setHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexArrowChange, setCurrentIndexArrowChange] = useState(0);
  const length = offerData.length - 1;
  console.log("len", length);
  const upFunc = () => {
    carouselRef.current.slidePrev();
    console.log("current", carouselRef.current);
  };
  const downFunc = () => {
    carouselRef.current.slideNext();
    console.log("current", carouselRef.current);
  };

  return (
    <div
      style={{
        background: " linear-gradient(to top,#EFF1F7, #FFFFFF)",
      }}
      className="relative pb-20"
    >
      {/* <div
        style={{
          background:
            "radial-gradient(circle, rgba(234,237,245,1) 0%, rgba(255,255,255,1) 100%)",
        }}
        className="w-[50%] absolute"
      /> */}
      <img className="absolute  h-[120vh] right-0 w-[160]" src={s} alt="" />{" "}
      <div className="container mx-auto">
        <div className=" flex justify-between pl-28">
          <div className=" w-[622px]">
            <h1 className="text-[41.89px] font-[700]">
              Bespoke IT Services{" "}
              <span className="text-primary">SyncClouds</span>
            </h1>
            <p className="  mt-5 text-body">
              Make a statement and drive revenue with our trusted IT services to
              deliver ultimate profitability."
            </p>
            <img
              className="absolute top-[5%] left-[10%] w-[35%]"
              src={linesHero}
              alt=""
            />
          </div>
          {/* ============================================= ~ vertical swiper cards ~ ============================================== */}
          <Carousel
            ref={carouselRef}
            verticalMode
            itemsToShow={2}
            showArrows={false}
            pagination={false}

            // enableAutoPlay
            // autoPlaySpeed={1000}
            // isRTL={false}
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
                <div className="  mb-5 flex flex-col  p-5 w-[600px] bg-white z-[100] rounded shadow-lg hover:bg-blueDark hover:text-white  ">
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
        </div>{" "}
        <div className="cursor-pointer absolute  right-[15%] top-0">
          <img
            onClick={() => {
              upFunc();
            }}
            src={arrowUp}
            alt=""
          />
        </div>
        <div
          className={`absolute  right-[15%] top-[45%] ${
            currentIndex !== length
              ? "cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <img onClick={downFunc} src={arrowDown} alt="" />
        </div>
        {/* ===========================================================  ~ ~ =========================================================== */}
        <div className=" pl-40   flex">
          <div className="w-[581px]">
            <MainSubHeading
              className=" text-left"
              my={"my-5"}
              ml={"ml-2"}
              text={"Transform digital experience with"}
              gradientText={" SyncClouds"}
            />
            <div className=" flex">
              <div>
                <img
                  className="absolute bottom-[6.5%] left-[14.7%]"
                  src={line}
                  alt="line"
                />
              </div>
              <div className="">
                {" "}
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
                  Today's world is dominated by technology, so businesses and
                  people can survive. We have a global clientele because of our
                  unmatched solutions and innovative methods.
                </p>
                <Link to={"/contact"}>
                  <button className=" border border-primary rounded-sm py-2 px-4 mt-10 hover:bg-primary hover:text-white hover:text-bold text-primary">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex">
            <img
              className="absolute bottom-[38%]"
              src={curlArrow}
              alt="curl arrow"
            />
            <img
              className="ml-52"
              width={500}
              src={transform}
              alt="tranform image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
// import { offerData } from "../../constant/Data";
// import MainSubHeading from "../../common component/MainSubHeading";
// import BoldParagraph from "../../common component/BoldParagraph";
// import React, { useState } from "react";
// import linesHero from "../../assets/Images/lines-hero 1.svg";
// import line from "../../assets/Images/line.svg";
// import linesHero2 from "../../assets/Images/Bespoke IT Services By SyncClouds.svg";
// import curlArrow from "../../assets/Images/Frame.svg";
// import arrowDown from "../../assets/icons/black-arrow-down.svg";
// import arrowUp from "../../assets/icons/black_arrow-up.svg";
// import InnerPageHeading from "../../common component/InnerPageHeading";
// import { Link } from "react-router-dom";
// import s from "../../assets/Images/S.svg";
// import transform from "../../assets/Images/Transform Digital Experience with SyncClouds-01.svg";
// import Carousel from "react-elastic-carousel";
// const OfferCard = () => {
//   const carouselRef = React.useRef();
//   const [hover, setHover] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState("");
//   const upFunc = () => {
//     const currentItemIndex = carouselRef.current.getCurrentItem();
//     if (currentItemIndex > 0) {
//       carouselRef.current.slidePrev();
//     }
//   };

//   const downFunc = () => {
//     const currentItemIndex = carouselRef.current.getCurrentItem();
//     if (currentItemIndex < offerData.length - 1) {
//       carouselRef.current.slideNext();
//     }
//   };
//   return (
//     <div className="relative bg-[#f3f4f9] pl-20 ">
//       <div className="pt-20 container mx-auto">
//         {/* <img src={s} alt="" />{" "} */}
//         <div className="flex items-center justify-around">
//           <div className="flex w-[622px] flex-col">
//             {/* <Headin2 data={'What We Offer'}/> */}
//             <MainSubHeading
//               className=" text-left"
//               my={"my-5"}
//               ml={"ml-2"}
//               text={"Bespoke IT Services By"}
//               gradientText={" SyncClouds"}
//             />
//             <BoldParagraph
//               text={
//                 " Make a statement and drive revenue with our trusted IT services to deliver ultimate profitability."
//               }
//             />
//             <img src={linesHero} alt="" />
//           </div>
//           {/* ============================================= ~ vertical swiper cards ~ ============================================== */}
//           <Carousel
//             ref={carouselRef}
//             verticalMode
//             pagination={false}
//             showArrows={false}
//             itemsToShow={2}
//           >
//             {offerData.map((card, index) => (
//               <div
//                 key={card.id}
//                 onMouseEnter={() => {
//                   setHover(true), setCurrentIndex(index);
//                 }}
//                 onMouseLeave={() => {
//                   setHover(false);
//                   setCurrentIndex("");
//                 }}
//               >
//                 <div className="relative  mb-5 flex flex-col  p-5 w-[600px] bg-white  rounded shadow-lg hover:bg-blueDark hover:text-white lg:max-h-[300px] xl:max-h-[330px] ">
//                   <div className="  w-[50px] rounded-full ">
//                     <img
//                       src={
//                         hover && currentIndex === index
//                           ? card.iconWhite
//                           : card.icon
//                       }
//                     />
//                   </div>
//                   <div className="pt-10">
//                     <InnerPageHeading text={`${card.title}`} />
//                     <p className="text-[14px] md:text-[16px]  leading-[20px] md:leading-[30px] mb-10">
//                       {card.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Carousel>
//           <div className="grid gap-10 h-[56.5vh] xl:gap-5">
//             <div
//               className={`cursor-pointer  right-[15%] top-[7%] ${
//                 currentIndex === 0 ? "cursor-not-allowed" : ""
//               }`}
//             >
//               <img onClick={upFunc} src={arrowUp} alt="" />
//             </div>
//             <div
//               className={`cursor-pointer  right-[15%] top-[48%] ${
//                 currentIndex === offerData.length - 1
//                   ? "cursor-not-allowed"
//                   : ""
//               }`}
//             >
//               <img onClick={downFunc} src={arrowDown} alt="" />
//             </div>
//           </div>
//         </div>
//         {/* ===========================================================  ~ ~ =========================================================== */}
//         <div className="flex">
//           <div className="w-[581px]">
//             <MainSubHeading
//               className=" text-left"
//               my={"my-5"}
//               ml={"ml-2"}
//               text={"Transform digital experience with"}
//               gradientText={" SyncClouds"}
//             />

//             <div className="relative flex">
//               <div>
//                 <img
//                   className="  top-5 h-[360px]"
//                   src={line}
//                   alt="line"
//                 />
//               </div>
//               <div className="ml-20">
//                 {" "}
//                 <h4 className="text-primary leading-[38px] mt-4 mb-7 text-[25.89px] font-[600]">
//                   Boost Your business Expansion!
//                 </h4>
//                 <p>
//                   Sync Clouds is committed to providing everyone with complete
//                   custom software development services. No matter what, there is
//                   always a chance to flourish, stand out, acquire, and rise..
//                 </p>
//                 <h6 className="my-5 font-[600] ">
//                   Future Building Using Software, Innovation, And Technology
//                 </h6>
//                 <p>
//                   Today's world is dominated by technology, so businesses and
//                   people can survive. We have a global clientele because of our
//                   unmatched solutions and innovative methods.
//                 </p>
//                 <Link to={"/contact"}>
//                   <button className=" border border-primary rounded-sm py-2 px-4 mt-10 hover:bg-primary hover:text-white hover:text-bold text-primary">
//                     Get In Touch
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="flex">
//             <img src={curlArrow} alt="curl arrow" />
//             <img width={500} src={transform} alt="tranform image" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OfferCard;
