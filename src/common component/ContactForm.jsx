import React, { useState } from "react";
import consultant from "../assets/Images/consultant.png";
import attachmentIcon from "../assets/icons/attachmentIcon.svg";

const ContactForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    file: "",
    message: "",
    agreement: false,
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    if (!selectedFile) {
      errors.file = "File is required";
    } else if (selectedFile.size > 10 * 1024 * 1024) {
      errors.file = "File size must be less than 10 MB";
    }
    if (!formData.agreement) {
      errors.agreement = "Kindly agree to the NDA by check in the box";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Perform your submit action here
      console.log("Form data:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="flex md:flex-row flex-col space-y-10 md:space-y-0 gap-10 my-14 items-center justify-center">
      <div className="bg-[#EDF2F7] rounded-sm max-w-[622px] p-[20px]">
        <h1 className="font-[500] text-[25.89px] text-[#171923] mb-3">
          Book a Meeting
        </h1>
        <p className="text-[#434343]">
          Do you want to talk to us directly? Book a meeting with Jakub from
          business development.
        </p>{" "}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row space-y-10 sm:space-y-0 mb-16 mt-10 justify-between">
          <div>
            <img className="w-full sm:w-[250px]" src={consultant} alt="" />
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
            Office No. M-35,36. Mezzanine Floor, Gold Point Shopping Mall,
            Rawalpindi, Pakistan
          </p>
        </div>
      </div>
      <div className="bg-[#EDF2F7] rounded-sm max-w-[622px]">
        <form
          className="px-[10px] md:px-[30px] py-[20px] md:py-[24px]"
          onSubmit={handleSubmit}
        >
          <h5 className="font-[500] text-[25.89px] text-[#171923] mb-3">
            Write a Message
          </h5>
          <div>
            <input
              type="text"
              placeholder="Name"
              className={`my-2 py-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%] border-b ${
                formErrors.name ? "border-red-500" : "border-b-gray-200"
              } placeholder-black outline-none`}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && (
              <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
            )}
          </div>
          <div className="sm:flex gap-5">
            <div>
              <input
                className={`my-2 py-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%] border-b ${
                  formErrors.email ? "border-red-500" : "border-b-gray-200"
                } placeholder-black outline-none`}
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>
            <div>
              <input
                className={`my-2 py-[10px] px-3 text-[14px] md:text-[16px] font-[400] leading-[24px] w-[100%] border-b ${
                  formErrors.phoneNumber
                    ? "border-red-500"
                    : "border-b-gray-200"
                } placeholder-black outline-none`}
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.phoneNumber}
                </p>
              )}
            </div>
          </div>
          <div
            className={`gap-2 cursor-pointer bg-white relative my-2  py-[10px] px-3 ${
              formErrors.message ? "border-red-500" : ""
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onClick={() => {
              document.querySelector('input[type="file"]').click();
            }}
          >
            <div
              className={`flex gap-2 items-center ${
                selectedFile ? "bg-green-100" : "bg-white"
              }`}
            >
              <div className=" py-2 rounded-md ">
                <img src={attachmentIcon} alt="Uploaded" />
              </div>
              <label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept=".pdf,.doc,.docx,.odt"
                  onChange={handleFileChange}
                  name="file"
                />
                {selectedFile ? (
                  <p className="font-[550]">
                    "{selectedFile.name}"
                    <span className="font-[400]"> is selected</span>
                  </p>
                ) : (
                  <p className=" font-[600] text-[16px]">Add Attachment</p>
                )}
              </label>
            </div>
            <p className="text-[#8D8D8D]">
              No Images - only DOC, DOCX, PDF ODT up to 10 MB
            </p>
          </div>
          {formErrors.file && (
            <p className="text-red-500 text-xs mt-1">{formErrors.file}</p>
          )}

          <div className="mt-2 justify-center pt-[10px] text-[14px] md:text-[16px] font-[400] leading-[24px] placeholder-black outline-none">
            <textarea
              className={`w-full placeholder-black min-h-[105px] max-h-[500px] p-2 ${
                formErrors.message ? "border-red-500" : ""
              }`}
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {/* {formErrors.message && (
              <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
            )} */}
          </div>
          <div className="mt-3">
            <div className="flex md:items-center justify-center gap-3">
              <input
                className="h-[20px] w-[20px] md:mt-0"
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleInputChange}
              />
              <p className="text-center text-[14px] md:text-[16px] font-[400]">
                I want an NDA to protect my idea.
              </p>
            </div>
            {formErrors.agreement && (
              <p className="pl-8  text-red-500 text-center text-xs mt-1 mb-4">
                {formErrors.agreement}
              </p>
            )}
            <p className="text-center text-[14px] md:text-[16px] font-[400] leading-[24px] mt-1">
              We will get back to you within 24 hours, guaranteed.
            </p>
            <button
              type="submit"
              className="font-[600] leading-[24px] mt-3 text-white bg-[#002680] w-full py-[5px] md:py-[10px] rounded-sm"
            >
              Send a request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
