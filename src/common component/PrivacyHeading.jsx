import React from "react";

function PrivacyHeading({ h, p }) {
  return (
    <>
      <div>
        <h1 className="font-[600] text-[25.89px] text-[#171923]  mb-5">{h}</h1>
        <p className="font-[400] text-[18px] text-body leading-[27px] mb-5">
          {p}
        </p>
      </div>
    </>
  );
}
export default PrivacyHeading;
