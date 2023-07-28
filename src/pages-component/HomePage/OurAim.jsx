import React from "react";
import Testimonials from "./Testimonials";
import bg from "../../assets/Images/ourAimBg.svg";
import bgCircle from "../../assets/Images/halfCircle.svg";
import ourAimData from "../../constant/OurAimData";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const OurAim = () => {
  const itemsPerRowMedium = 3;
  const itemsPerRowSmall = 2;
  const totalSections = ourAimData.length;
  const totalRowsMedium = Math.ceil(totalSections / itemsPerRowMedium);
  const totalRowsSmall = Math.ceil(totalSections / itemsPerRowSmall);

  return (
    <div className="relative bg-[#F0F8FF] z-[-2] ">
      <img className="absolute right-5 z-[-1]" src={bg} />
      <img width={372} className="absolute top-36 left-0" src={bgCircle} />

      <div className="container mx-auto py-[16px] sm:py-[30px] sm:px-0">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-[20px] md:text-[41.89px] font-[0700] leading-[62.83px max-w-[787px] mt-16">
            Our Aim: From Disruptive Creativity to{" "}
            <span className="text-primary">Tangible Solution</span>{" "}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mt-10 sm:mt-20">
          {ourAimData.map((section, index) => (
            <div
              key={index}
              className="flex flex-col border-l border-primary items-center justify-center gap-1 md:gap-6 pb-5"
            >
              <div>
                <img src={section.icon} alt="icon" width={62} />
              </div>
              <p className="flex gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[62.83px] text-primary">
                <CountUp
                  start={section.count}
                  end={section.end}
                  redraw={true}
                  duration={5}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span>+</span>
              </p>
              <p className="text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10z-[100]">
        <Testimonials />
      </div>
    </div>
  );
};
export default OurAim;
// import React from "react";
// import Testimonials from "./Testimonials";
// import bg from "../../assets/Images/ourAimBg.svg";
// import bgCircle from "../../assets/Images/halfCircle.svg";
// import ourAimData from "../../constant/OurAimData";
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";
// const OurAim = () => {
//   const itemsPerRow = 3;
//   const totalSections = ourAimData.length;
//   const totalRows = Math.ceil(totalSections / itemsPerRow);

//   return (
//     <div className="relative bg-[#F0F8FF] z-[-2] ">
//       <img className="absolute right-5 z-[-1]" src={bg} />
//       <img width={372} className="absolute top-36 left-0" src={bgCircle} />

//       <div className="container mx-auto py-[16px] sm:py-[30px] sm:px-0">
//         <div className="flex flex-col items-center justify-center">
//           <h2 className="text-center text-[20px] md:text-[41.89px] font-[0700] leading-[62.83px max-w-[787px] mt-16">
//             Our Aim: From Disruptive Creativity to{" "}
//             <span className="text-primary">Tangible Solution</span>{" "}
//           </h2>
//         </div>
//         {[...Array(totalRows)].map((_, rowIndex) => (
//           <div
//             className="flex items-center justify-between  text-center mt-10 sm:mt-20"
//             key={rowIndex}
//           >
//             {ourAimData
//               .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
//               .map((section, index) => (
//                 <div className="flex gap-64" key={index}>
//                   <div className="flex flex-col border-l border-primary pl-28 items-center gap-1 md:gap-6 pb-5">
//                     <div>
//                       <img src={section.icon} alt="icon" width={62} />
//                     </div>
//                     <p className="flex gap-3 text-[20px] md:text-[41.89px] font-[700] leading-[62.83px] text-primary">
//                       <CountUp
//                         start={section.count}
//                         end={section.end}
//                         redraw={true}
//                         duration={5}
//                       >
//                         {({ countUpRef, start }) => (
//                           <VisibilitySensor onChange={start} delayedCall>
//                             <span ref={countUpRef} />
//                           </VisibilitySensor>
//                         )}
//                       </CountUp>
//                       <span>+</span>
//                     </p>
//                     <p className="w-[157px] text-[14px] md:text-[16px] font-[600] text-[#434343] leading-[24px]">
//                       {section.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//       {/* <img className="absolute right-0 top-[52%] z-[0]" src={bgLines} alt="" /> */}
//       <div className="mt-10z-[100]">
//         <Testimonials />
//       </div>
//     </div>
//   );
// };
// export default OurAim;
