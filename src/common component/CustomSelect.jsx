import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const CustomSelect = () => {
  const [dropdown, setDropDown] = useState("");
  return (
    <div>
      <button className="flex items-center justify-between  py-1 px-3 w-[150px] rounded border border-gray-200">
        Select All <BiChevronDown className="text-xl" />
      </button>
      <div>options</div>
    </div>
  );
};

export default CustomSelect;
