import React, { useState } from "react";
import { PopupModal } from "react-calendly";

const Calendalycomp = (props) => {
  console.log("props--------",props)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="pulse bg-[#00315A] text-white px-3 py-2 rounded-[0.18rem]"
        onClick={() => setIsOpen(true)}
      >
        Book My Call
      </button>
      <PopupModal
        url="https://calendly.com/mariabibi/synccloud-project-discussion?month=2023-08"
        pageSettings={props.pageSettings}
        utm={props.utm}
        prefill={props.prefill}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
      />
    </div>
  );
};

export default Calendalycomp;
