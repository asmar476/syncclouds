import React from "react";
import { dataContact } from "../../constant/ContactUsPageData";
import MainSubHeading from "../../common component/MainSubHeading";
import Carousel from "react-elastic-carousel";
function WhyChoseUs() {
  return (
    <div className="max-w-[1440px] mx-auto md:mb-10">
      <div className="text-center mt-28 mb-10">
        <MainSubHeading text={"Why "} gradientText={"Choose Us"} />
      </div>
      <div className="hidden md:block">
        <div className=" flex flex-wrap gap-3 items-center justify-center">
          {dataContact.map((data, ind) => (
            <div
              key={ind}
              className="bg-white border relative  border-gray-100
          rounded-md shadow-md h-[200px] lg:h-[230px] px-6 py-5 w-[360px] lg:w-[408px] mb-5"
            >
              <div className="flex items-center gap-3 ">
                <div className=" absolute top-[-20px]  rounded-full  border-4 p-2 shadow-md  bg-white">
                  <img
                    className="w-[50px] lg:w-[68px]"
                    src={data.icon}
                    alt={`image ${ind}`}
                  />
                </div>
                <h1 className=" ml-20 lg:ml-28 font-[600] text-[18px] lg:text-[20px] text-primary">
                  {data.title}
                </h1>
                {/* <h1 className="font-[600] text-[224px] absolute overflow-hidden z[-1] right-[-30px] bottom-[-10px] text-gray-100">
                0{ind + 1}
              </h1> */}
              </div>
              <p className="text-[14px] lg:text-[16px]  mt-5 lg:mt-10 ">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" md:hidden ">
        <Carousel
          // ref={carouselRef}
          itemsToShow={1}
          pagination={false}
          showArrows={true}
          // enableAutoPlay
          // autoPlaySpeed={1000}
          // isRTL={false}
        >
          {dataContact.map((data, ind) => (
            <div
              key={ind}
              className="bg-white border relative  border-gray-100
          rounded-md shadow-md p-3 max-w-[408px] mb-5"
            >
              <div className="flex items-center gap-2 sm:gap-3 ">
                <div className="  rounded-full  border-4 p-1 shadow-md  bg-white">
                  <img
                    className="w-[35px] sm:w-[70px]"
                    src={data.icon}
                    alt={`image ${ind}`}
                  />
                </div>
                <h1 className=" font-[600] text-[10px] sm:text-[18px] text-primary">
                  {data.title}
                </h1>
                {/* <h1 className="font-[600] text-[224px] absolute overflow-hidden z[-1] right-[-30px] bottom-[-10px] text-gray-100">
                0{ind + 1}
              </h1> */}
              </div>
              <p className="mt-2 sm:text-[16px] text-[11px]">
                {data.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default WhyChoseUs;

// import React from "react";
// import MainSubHeading from "../../common component/MainSubHeading";
// import checkIcon from "../../assets/contact/check-square.svg";
// import InnerPageHeading from "../../common component/InnerPageHeading";

// const data = [
//   {
//     title: "Completely Accessible",
//     description:
//       "We are available for phone calls 24 hours a day, so you will be able to resolve any problem at any time you want. Our team will be there at your doorstep.",
//   },
//   {
//     title: "Qualified Agents",
//     description:
//       "Our team members are highly skilled, trained, educated, and professional. They're all trained per the most current technology.",
//   },
//   {
//     title: "Staff Augmentation",
//     description:
//       "Outsourced developers are managed directly by you and collaborate remotely with your internal team. It works best for bridging the knowledge and resource gaps in your development team.",
//   },
//   {
//     title: "Adequate Price",
//     description:
//       "Our prices are affordable for everyone. We provide flexible discounts so you can use any service you require.",
//   },
//   {
//     title: "Exceptional Offers",
//     description:
//       "We offer discounts on the most well-known services, meaning you will surely get help without delay.",
//   },
// ];

// const WhyChoseUs = () => {
//   return (
//     <div className="container mx-auto px-10 my-20">
//       <div className="flex items-center justify-center">
//         <MainSubHeading text={"Why"} gradientText={"Choose Us"} ml={"ml-1"} />
//       </div>
//       <div className="space-y-20 my-20">
//         {data.map((val, index) => (
//           <div className={index}>
//             <div className="flex items-center gap-2 mb-2">
//               <img src={checkIcon} />
//               <InnerPageHeading text={val.title} />
//             </div>
//             <p className="text-[16px] leading-[24px] font-[400]">
//               {val.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyChoseUs;
