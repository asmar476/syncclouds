import React, { useState } from "react";

const ExpandCard = ({ data, index }) => {
  return (
    <div className="border bg-white text-body border-gray-100 min-h-[180px] flex flex-col gap-2  justify-center shadow-md px-[15px] py-[20px] rounded">
      <div className="flex flex-col gap-2">
        <p className="font-[600] text-[16px] leading-[24px]">{data.title}</p>
      </div>
      <p className=" font-[400] text-[16px] leading-[24px] ">
        {data.description}
      </p>
    </div>
  );
};

export default ExpandCard;
// import React, { useState } from "react";
// const ExpandCard = ({ data, index }) => {
//   const [showOverlay, setShowOverlay] = useState(false);
//   const [showIndex, setShowIndex] = useState("");
//   return (
//     <div
//       onMouseEnter={() => {
//         setShowOverlay(true);
//         setShowIndex(index);
//       }}
//       onMouseLeave={() => {
//         setShowOverlay(false);
//         setShowIndex("");
//       }}
//       className={`${
//         showOverlay && index === showIndex ? "bg-blueDark" : "bg-white"
//       } border border-gray-100 min-h-[180px] flex flex-col gap-2  justify-center shadow-md px-[15px] py-[20px] rounded`}
//     >
//       <div className="flex flex-col gap-2">
//         <img src={data.icon} className="h-[52.4px] w-[52.62px]" />
//         <p
//           className={`${
//             showOverlay && index === showIndex
//               ? "text-white font-[600] text-[16px] leading-[24px]"
//               : "text-black font-[600] text-[16px] leading-[24px]"
//           }`}
//         >
//           {data.title}
//         </p>
//       </div>
//       <p
//         className={`${
//           showOverlay && index === showIndex ? "text-white" : "text-[#001647]"
//         } font-[400] text-[16px] leading-[24px] `}
//       >
//         {data.description}
//       </p>
//     </div>
//   );
// };

// export default ExpandCard;
