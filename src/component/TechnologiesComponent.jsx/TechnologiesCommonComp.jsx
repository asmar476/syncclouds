import React from "react";

function TechnologiesCommonComp({ Category, techArray }) {
  return (
    <>
      <div className="hidden sm:block">
        <div className="border-b border-gray-300 pb-5 px-5 items-center space-x-12  flex">
          <div className="w-[175px]">
            <h1 className=" font-semibold text-[14px] md:text-[20px] text-body">
              {Category}
            </h1>
          </div>
          <div className="flex items-center  space-y-2  flex-wrap mr-1">
            {techArray.map((logo, index) => (
              <div
                key={index}
                className="  flex items-center  space-x-2 bg-white s rounded-lg justify-between px-5 py-1  "
              >
                <img className="w-[40px]" src={logo.image} alt="" />
                <p className=" font-[600] text-body text-[14px] ">
                  {logo.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================== `Mobile View` ===================================== */}
      <div className="sm:hidden">
        <div className="border-b border-gray-300 space-y-3 pb-3 items-center ">
          <div className="w-[175px] ">
            <h1 className=" font-semibold text-[18px] md:text-[20px] text-body">
              {Category}
            </h1>
          </div>
          <div className="flex flex-wrap gap-4">
            {" "}
            {techArray.map((logo, index) => (
              <div key={index}>
                <img
                  title={logo.title}
                  className="w-[30px] sm:w-[40px]"
                  src={logo.image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default TechnologiesCommonComp;
