import React from "react";
import Testimonials from "./Testimonials";
import bg from "../../assets/Images/ourAimBg.svg";
import bgCircle from "../../assets/Images/halfCircle.svg";
import ourAimData from "../../constant/OurAimData";
import CountUp from "react-countup";
const OurAim = () => {
  const itemsPerRow = 3;
  const totalSections = ourAimData.length;
  const totalRows = Math.ceil(totalSections / itemsPerRow);

  return (
    <div className="bg-[#F8FCFF]">
      <div className="relative">
        <div className="flex justify-end mr-28">
          <img className="" width={1300} src={bg} />
          <img width={310} className="absolute top-20 left-0" src={bgCircle} />
        </div>
        <div className="absolute top-0 ml-20 container mx-auto py-[16px] sm:py-[30px] sm:px-0">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-[20px] md:text-[25.89px] font-[0700] leading-[38.83px max-w-[550px] ">
              Our Aim: From Disruptive Creativity to <br />{" "}
              <span className="text-primary">Tangible Solution</span>{" "}
            </h2>
          </div>
          {[...Array(totalRows)].map((_, rowIndex) => (
            <div
              className="flex items-center justify-around text-center gap-[60px] mt-10 sm:mt-20"
              key={rowIndex}
            >
              {ourAimData
                .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                .map((section, index) => (
                  <div className="flex gap-64" key={index}>
                    <div className="flex flex-col border-l border-primary pl-28 items-center gap-1 md:gap-6 pb-5">
                      <div>
                        <img src={section.icon} alt="icon" width={62} />
                      </div>
                      <p className="flex gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[38.83px] text-primary">
                        <CountUp
                          start={section.count}
                          end={section.end}
                          redraw={true}
                          duration={5}
                        >
                          {({ countUpRef, start }) => <span ref={countUpRef} />}
                        </CountUp>
                        <span>+</span>
                      </p>
                      <p className="text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
                        {section.text}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      {/* <img className="absolute right-0 top-[52%] z-[0]" src={bgLines} alt="" /> */}
      <div className="z-[100]">
        <Testimonials />
      </div>
    </div>
  );
};
export default OurAim;

// import Testimonials from "./Testimonials";
// import bg from "../../assets/Images/ourAimBg.svg";
// import bgCircle from "../../assets/Images/halfCircle.svg";
// import bgLines from "../../assets/Images/abstracts.png";
// import ourAimData from "../../constant/OurAimData";
// import CountUp from "react-countup";
// const OurAim = () => {
//   const three1 = ourAimData.slice(0, 3);
//   const three2 = ourAimData.slice(3);
//   return (
//     <div className="bg-[#F8FCFF]">
//       <div className="relative">
//         <div className="flex justify-end mr-28">
//           <img className="" width={1300} src={bg} />
//           <img width={310} className="absolute top-20 left-0" src={bgCircle} />
//         </div>
//         <div className="absolute top-0 ml-20 container mx-auto py-[16px] sm:py-[30px] sm:px-0">
//           <div className="flex flex-col items-center justify-center ">
//             <h2 className="text-center text-[20px] md:text-[25.89px] font-[0700] leading-[38.83px max-w-[550px] ">
//               Our Aim: From Disruptive Creativity to <br />{" "}
//               <span className="text-primary">Tangible Solution</span>{" "}
//             </h2>
//           </div>
//           <div className="flex items-center justify-around text-center gap-[60px] mt-10 sm:mt-20">
//             {three1.map((section, index) => (
//               <div className="flex gap-64" key={index}>
//                 <div className="flex flex-col border-l border-primary pl-24 items-center gap-1 md:gap-6 pb-5">
//                   <div>
//                     <img src={section.icon} alt="icon" width={62} />
//                   </div>
//                   <p className="flex gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[38.83px] text-primary">
//                     <span>{section.count}</span>
//                     <span>+</span>
//                   </p>
//                   <p className="text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
//                     {section.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center justify-around text-center gap-[60px] mt-10 sm:mt-20">
//             {three2.map((section, index) => (
//               <div className="flex gap-6" key={index}>
//                 <div className="flex flex-col  border-l border-primary pl-24  items-center gap-1 md:gap-6 pb-5">
//                   <div>
//                     <img
//                       className=" "
//                       src={section.icon}
//                       alt="icon"
//                       width={62}
//                     />
//                   </div>
//                   <p className="flex gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[38.83px] text-primary">
//                     <span>{section.count}</span>
//                     <span>+</span>
//                   </p>
//                   <p className="text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
//                     &nbsp;&nbsp;{section.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* <img className="absolute right-0 top-[52%] z-[0]" src={bgLines} alt="" /> */}
//       <div className="z-[100]">
//         <Testimonials />
//       </div>
//     </div>
//   );
// };

// export default OurAim;
