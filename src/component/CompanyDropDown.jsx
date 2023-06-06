import React from "react";
import { Link } from "react-router-dom";

const CompanyDropDown = () => {
  return (
    <div className="bg-white  border border-gray-300 shadow-md rounded-md px-3 py-2 min-w-[150px]">
      <ul>
        <Link to={"/about"}>About</Link>
      </ul>
    </div>
  );
};

export default CompanyDropDown;
