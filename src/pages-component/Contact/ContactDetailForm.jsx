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
const Images = [CompletelyAccessible, QualifiedAgents, StaffAugmentation];
const Images2 = [AdequatePrice, ExceptionalOffers];
const ContactDetailForm = () => {
  return (
    <div className="container mx-auto px-10 ">
      <div className="flex items-center justify-center right-[5%] top-[70%] fixed z-[100] bg-gray-300  h-[50px]  w-[50px]  rounded-full">
        <Tooltip title="Scroll to Top">
          <img
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="cursor-pointer  fixed z-[100]"
            src={arrowUp}
            alt="arrow up"
            width={40}
          />
        </Tooltip>
      </div>{" "}
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
    <div className="text-center mt-28 mb-16">
      <MainSubHeading text={"Why "} gradientText={"Choose Us"} />
    </div>
      <div className="flex  flex-col lg:flex-row items-center justify-center">
        {Images.map((img, ind) => (
          <div key={ind}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      <div className="flex  flex-col lg:flex-row items-center justify-center">
        {Images2.map((img, ind) => (
          <div key={ind}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
{
  /* ================================================================== */
}
{
  /* <div className="mt-10 mb-32">
        <form className="flex gap-20">
          <div className="w-[50%] space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-[16px] font-[600] leading-[24px]"
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Your Name"
                className="border border-black px-2 py-1 outline-none text-[16px] leading-[24px] font-[400]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="Phone"
                className="text-[16px] font-[600] leading-[24px]"
              >
                Phone
              </label>
              <input
                type="text"
                id="Phone"
                name="Phone"
                placeholder="+92"
                className="border border-black px-2 py-1 outline-none text-[16px] leading-[24px] font-[400]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="Email"
                className="text-[16px] font-[600] leading-[24px]"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="xyz@example.com"
                className="border border-black px-2 py-1 outline-none text-[16px] leading-[24px] font-[400]"
              />
            </div>

            <div className="flex flex-col">
            <label
                htmlFor="Email"
                className="text-[16px] font-[600] leading-[24px]"
              >
                Services Required
              </label> 
              <select className="border border-black px-2 py-1 outline-none text-[16px] leading-[24px] font-[400]">
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI/UX Designing</option>
                <option>Cyber Security</option>
                <option>Digital Marketing</option>
              </select>
            </div>
          </div>
          <div className="space-y-5 w-[50%]">
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-[16px] font-[600] leading-[24px]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                rows={"5"}
                placeholder="Type Here..."
                className="border border-black px-2 py-1 outline-none text-[16px] leading-[24px] font-[400]"
              />
            </div>
            <button className="border border-black px-4 py-2">
              Send Your Message
            </button>
          </div>
        </form>
      </div> */
}
{
  /* ======================================================================== */
}

export default ContactDetailForm;
