import React from "react";
import { PopupModal } from "react-calendly";
const calendlyLink = import.meta.env.VITE_REACT_APP_CALENDLY_LINK;
const Calendalycomp = (props) => {
  return (
    <div>
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
