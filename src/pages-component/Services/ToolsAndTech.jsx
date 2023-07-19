import React from "react";
import BoldParagraph from "../../common component/BoldParagraph";
import languages from "../../assets/Services/servicesTandT/languages.svg";
import db from "../../assets/Services/servicesTandT/db.svg";
import cloud from "../../assets/Services/servicesTandT/cloud.svg";
import web from "../../assets/Services/servicesTandT/web.svg";
import mobile from "../../assets/Services/servicesTandT/mobile.svg";
import framwork from "../../assets/Services/servicesTandT/framework.svg";
const Images = [languages, framwork, mobile, web, db, cloud];
function ToolsAndTech() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h2
          className={`text-[#171923] font-[700] text-[20px] md:text-[25.89px] leading-[62.83px]`}
        >
          Tools & Technologies Our
          <span className="gradient-text"> Software Developers Use</span>
        </h2>
        <div className="text-center text-body">
          {" "}
          <BoldParagraph
            text={
              "With extensive knowledge in every field required for dependable software development, Sync Clouds has developed into a competitor on a global scale in the field of software engineering."
            }
          />
          <div className="p-5 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {Images.map((img, ind) => (
              <div key={ind}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsAndTech;
