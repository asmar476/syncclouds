import React from "react";
import { PopupModal } from "react-calendly";
const calendlyLink = import.meta.env.VITE_REACT_APP_CALENDLY_LINK;
const Calendalycomp = (props) => {
  return (
    <div>

      <button
        className={`${
          props.white
            ? "bg-white text-primary pulseWhite"
            : "pulse bg-[#00315A] text-white"
        }    px-3 py-2 rounded-[0.18rem]`}
        onClick={() => setIsOpen(true)}
      >
        {props.btnText || "Book My Call"}
      </button>

      <PopupModal
        url={calendlyLink}
        pageSettings={props.pageSettings}
        utm={props.utm}
        prefill={props.prefill}
        onModalClose={props.close}
        open={props.isOpen}
        rootElement={document.getElementById("root")}
      />
    </div>
  );
};

export default Calendalycomp;
