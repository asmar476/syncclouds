import React, { useState } from "react";
// import MainSubHeading from "../../common component/MainSubHeading";
import { projectProcedureData } from "../../constant/ProjectProcedure";
import InnerPageHeading from "../../common component/InnerPageHeading";
import { BsDot } from "react-icons/bs";
import tri1 from "../../assets/About illustration/triangle1.svg";
import tri2 from "../../assets/About illustration/triangle2.svg";

const ProjectProcedure = () => {
  return (
    <div className="relative mx-auto px-5 my-20">
      <div className="hidden 2xl:block">
        <img
          width={150}
          className="absolute z-[-1] top-[-60px] right-0"
          src={tri1}
          alt="triangle1"
        />
        <img
          width={270}
          className="absolute z-[-1] top-[-40px] right-0"
          src={tri2}
          alt="triangle2"
        />
      </div>
      <div className="flex flex-col  items-center justify-center">
        <div className="text-center flex">
          <h1 className="font-[700] text-[20px] md:text-[41.89px] leading-[62.83px]">
            SyncClouds{" "}
            <span className="text-primary">Blueprint for Software</span> Success
          </h1>
        </div>

        <p className="text-body text-center font-[500] text-[18px] leading-[24px] w-[783] mt-5">
          Our 3-step process ensures that every task is completed efficiently,
          accurately, and with attention to detail.
        </p>
      </div>
      <div className="bg-white flex  items-center justify-center flex-wrap mt-28 gap-5 md:gap-16 lg:gap-32">
        {projectProcedureData.map((data, index) => (
          <div
            key={index}
            className={`max-w-[408px] border border-gray rounded-tr-[40px]  pb-5 px-5 space-y-3 rounded ${
              index === 1 ? "2xl:-translate-y-14" : ""
            }`}
          >
            <div className="flex justify-between">
              <h1
                style={{ fontFamily: "Anton" }}
                className="text-[96px] font-extrabold text-[#e5e9f2]"
              >
                0{data.id}
              </h1>
              <img width={96} src={data.img} />
            </div>
            <h1 className="font-[600] text-[25.89px]">{data.title}</h1>
            <p>{data.description}</p>
            <ul>
              {data.listData.map((li, index) => (
                <div id={index} className="flex justify-start text-left">
                  <BsDot className="text-lg" /> <li>{li.li}</li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectProcedure;

// import React, { useState } from "react";
// import MainSubHeading from "../../common component/MainSubHeading";
// import { projectProcedureData } from "../../constant/ProjectProcedure";
// import InnerPageHeading from "../../common component/InnerPageHeading";
// import { BsDot } from "react-icons/bs";

// const ProjectProcedure = () => {
//   const [showOverlay, setShowOverlay] = useState(false);
//   const [showIndex, setShowIndex] = useState("");
//   return (
//     <div className="container mx-auto px-10 my-20">
//       <div className="flex flex-col items-center justify-center">
//         <div className="text-center flex">
//           <MainSubHeading
//             text={"SyncClouds  "}
//             gradientText={"Blueprint for Software"}
//           />
//           <MainSubHeading text={"Success"} />
//         </div>

//         <p className="text-[#335775] font-[500] text-[16px] leading-[24px] max-w-[1000px] mt-5">
//           Our 3-step process ensures that every task is completed efficiently,
//           accurately, and with attention to detail.
//         </p>
//       </div>
//       <div className="grid grid-cols-3 my-32 gap-10 ">
//         {projectProcedureData.map((data, index) => (
//           <div
//             onMouseEnter={() => {
//               setShowOverlay(true);
//               setShowIndex(index);
//             }}
//             onMouseLeave={() => {
//               setShowOverlay(false);
//               setShowIndex("");
//             }}
//             key={index}
//             className={`relative z-0 ${
//               showOverlay && index === showIndex ? "bg-blueDark" : "bg-white"
//             } p-3 text-center space-y-3 procedure-cards rounded`}
//           >
//             <InnerPageHeading
//               text={data.title}
//               textColor={`${
//                 showOverlay && index === showIndex ? "text-white" : ""
//               }`}
//             />
//             <p
//               className={`${
//                 showOverlay && index === showIndex ? "text-white" : ""
//               } `}
//             >
//               {data.description}
//             </p>
//             <ul
//               className={`${
//                 showOverlay && index === showIndex ? "text-white" : ""
//               } `}
//             >
//               {data.listData.map((li, index) => (
//                 <div id={index} className="flex justify-start text-left">
//                   <BsDot className="text-lg" /> <li>{li.li}</li>
//                 </div>
//               ))}
//             </ul>
//             <img
//               src={data.img}
//               className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectProcedure;
