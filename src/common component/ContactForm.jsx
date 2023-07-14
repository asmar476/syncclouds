import React from "react";
import checkIcon from "../assets/reviewStar/Group 12839.svg";
import consultant from "../assets/Images/consultant.png";
import attachmentIcon from "../assets/icons/attachmentIcon.svg";
import { FiCamera } from "react-icons/fi";
import { useState } from "react";
const ContactForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  return (
    <div className="sm:flex gap-10 my-14 items-center justify-center">
      <div className="bg-[#EDF2F7] rounded-sm  sm:w-[622px] p-[20px]">
        <h1 className="font-[500] text-[25.89px] text-[#171923]  mb-3 ">
          Book a Meeting
        </h1>
        <p className="text-[#434343] ">
          Do you want to talk to us directly? Book a meeting with Jakub from
          business development.
        </p>
        <div className="sm:flex mt-10 mb-14 items-center justify-around">
          <div>
            <img width={250} src={consultant} alt="" />
          </div>
          <div className="">
            <h1 className="font-[500] text-[25.89px] text-[#171923]">
              Pitter Vick
            </h1>
            <div className="space-y-2 mt-2 mb-10">
              <p className="text-[#434343]">Consultant</p>
              <p className="text-[#434343]">+12345678910</p>
              <p className="text-[#434343] ">johndoe@example.com</p>
            </div>
            <button className="font-[600] leading-[24px] text-white bg-[#002680] w-full py-[5px] md:py-[10px] rounded-sm">
              Send a request
            </button>
          </div>
        </div>
        <div className="pt-3 border-t-2 border-[#ccc8c8]">
          <h1 className="font-[500] text-[25.89px] text-[#171923] leading-[38.83px]">
            Legal Information
          </h1>
          <p className="text-[#434343]">
            Shop No M-35,36. Mezzanine Floor, Gold Point Shopping Mall,
            Rawalpindi, Pakistan
          </p>
        </div>
      </div>
      <div className="bg-[#EDF2F7] rounded-sm sm:w-[622px]">
        <form className="px-[10px] md:px-[30px] py-[20px] md:py-[40px]">
          <h5 className="font-medium">Write a Message</h5>{" "}
          <div>
            <input
              type="text"
              placeholder="Name"
              className="my-2  py-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%] border-b border-b-gray-200 placeholder-black outline-none"
            />
          </div>
          <div className="flex gap-5">
            <input
              className="my-2  py-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%] border-b border-b-gray-200 placeholder-black outline-none"
              type="email"
              placeholder="Email"
            />

            <input
              className="my-2  py-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%] border-b border-b-gray-200 placeholder-black outline-none"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="gap-2 bg-white relative my-2  py-[10px] px-3">
            <div className="flex gap-2 items-center">
              {" "}
              <div className="cursor-pointer py-2 rounded-md ">
                <img src={attachmentIcon} alt="Uploaded" />
              </div>
              <label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept=".pdf,.doc,.docx,.odt"
                  onChange={handleFileChange}
                />
                {selectedFile ? (
                  <p className="font-[550]">
                    "{selectedFile.name}"{" "}
                    <span className="font-[400]">is selected</span>
                  </p>
                ) : (
                  <p className="font-[600] text-[16px]">Add Attachment</p>
                )}
              </label>
            </div>
            <p className="text-[#8D8D8D] ">
              No Images - only DOC, DOCX, PDF ODT up to 10 MB
            </p>
          </div>
          <div className="mt-2  pt-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%]  placeholder-black outline-none">
            <textarea
              className="w-[100%] placeholder-black  h-[100px] p-2 "
              placeholder="Message"
            ></textarea>
          </div>
          <div className="mt-5">
            <div className="flex  md:items-center justify-center gap-3 ">
              <input className="h-[20px] w-[20px] md:mt-0" type="checkbox" />
              <p className="text-center text-[14px] md:text-[16px] font-[400] leading-[24px]">
                We will get back to you within 24 hours,guaranted
              </p>
            </div>
            <button className="font-[600] leading-[24px] mt-5 text-white bg-[#002680] w-full py-[5px] md:py-[10px] rounded-sm">
              Send a request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
