import React from "react";
import book from "../../assets/BLogs/building-battle-tested-software-architecture.png.png.svg";
const OurBookBlog = () => {
  const handleDownload = () => {
    const fileUrl = "../../../public/Website-SC-Final.docx";
    window.open(fileUrl, "_blank");
  };
  return (
    <div className="flex md:flex-row  flex-col items-center justify-center space-x-14">
      <img src={book} alt="book" />
      <div className="space-y-5 lg:space-y-9">
        <h1 className="max-w-[850px] text-[24px] md:text-[30.89px] lg:text-[41.89px] font-[700] lg:leading-[62px]  ">
          Building Battle-tested Software Architecture: Lessons from Top Tech
          Companies
        </h1>
        <p className="max-w-[850px] text-lg  md:text-[25.89px] font-[500] text-body lg:leading-[38px]">
          A collection of lessons from top tech companies for evolving software
          architecture at scale.
        </p>
        {/* <a href="../../../public/Website-SC-Final.docx" download>
          <button className="text-white rounded text-lg font-[600] bg-primary px-4 py-2.5">
            Download Image
          </button>
        </a> */}
        <button
          onClick={handleDownload}
          className="text-white rounded text-lg font-[600] bg-primary px-4 py-2.5"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default OurBookBlog;
