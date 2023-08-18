import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";
import CompletelyAccessible from "../../assets/Images/CompletelyAccessible.svg";
import QualifiedAgents from "../../assets/Images/QualifiedAgents.svg";
import StaffAugmentation from "../../assets/Images/StaffAugmentation.svg";
import AdequatePrice from "../../assets/Images/AdequatePrice.svg";
import ExceptionalOffers from "../../assets/Images/ExceptionalOffers.svg";
import ContactForm from "../../common component/ContactForm";
import { Tooltip } from "antd";
import arrowUp from "../../assets/icons/arrow-up-circle.svg";
import MainHeading from "../../common component/MainHeading";
const Images = [
  CompletelyAccessible,
  QualifiedAgents,
  StaffAugmentation,
  AdequatePrice,
  ExceptionalOffers,
];
const Images2 = [AdequatePrice, ExceptionalOffers];
const ContactDetailForm = () => {
  return (
    <div className="container mx-auto px-10 ">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-[600] text-[25.89px]">
          Let's talk about your project and make your dream a reality!s
        </h1>

        <p className="text-body font-[400] text-[16px] leading-[24px] max-w-[700px] my-5 text-center">
          After receiving the following information, a member of our staff will
          contact you to go through the specifics of your project.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactDetailForm;
