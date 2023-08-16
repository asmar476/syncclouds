import React from "react";
function ServicesTechsCommon({ CategoryIcon, categoryData, Category }) {
  return (
    <>
      <div
        className="
      hidden lg:block"
      >
        <div className="bg-[#EDF2F7]   space-y-5 mb-3 flex flex-col items-center justify-center x2xl:w-[450px] h-[200px]">
          <img width={100} src={CategoryIcon} alt="" />
          <h1 className="text-primary font-semibold text-[25px]">{Category}</h1>
        </div>
        <div className="bg-[#EDF2F7] p-2 mb-3 flex justify-between items-center 2xl:w-[450px] h-[115px]">
          {categoryData.map((data, ind) => (
            <div
              key={ind}
              className="flex-col flex items-center justify-center"
            >
              <img className="w-[50px] mb-3" src={data.image} alt="" />
              <h1 className=" text-body font-semibold text-[14px] xl:text-[16px]">
                {data.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
      {/* ================================================================================== */}
      <div className="lg:hidden">
        <div className="bg-[#EDF2F7] p-5 space-y-5 mb-3 flex flex-col items-center justify-center max-w-[408px] ">
          <img src={CategoryIcon} alt="" />
          <h1 className="text-primary font-semibold text-[20px]">{Category}</h1>
        </div>
        <div className="bg-[#EDF2F7]  mb-3 flex  items-center justify-center max-w-[408px] py-3 ">
          {categoryData.map((data, ind) => (
            <div
              key={ind}
              className="flex flex-col items-center justify-center"
            >
              <img
                className="w-[25px] sm:w-[40px] mb-2"
                src={data.image}
                alt=""
              />
              <h1 className=" text-body font-semibold mx-3 text-[7px]">
                {data.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicesTechsCommon;
