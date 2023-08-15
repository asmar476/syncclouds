import React, { useState } from "react";
import consultant from "../assets/ceo.jpg";
import attachmentIcon from "../assets/icons/attachmentIcon.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import cross from "../assets/icons/x.svg";
// import RxCrossCircled from "react-icons/rx";
import { TiDelete } from "react-icons/ti";
import { BsExclamationCircle } from "react-icons/bs";
const ContactForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    setError("");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (phoneNumber === "") {
      setError("Phone number is required.");
    } else {
      // Handle form submission or further processing
      setError("");
    }
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await emailjs.send(
          "YOUR_EMAILJS_SERVICE_ID",
          "YOUR_EMAILJS_TEMPLATE_ID",
          formData,
          "YOUR_EMAILJS_USER_ID"
        );

        console.log("Email sent successfully:", response);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    } else {
      console.log("Form validation failed");
    }
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    // if (!phoneNumber.trim()) {
    //   errors.phoneNumber = "Phone Number is required";
    // }
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

  const handleFileChange = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];
    setSelectedFile(file);

    fileInput.value = "";
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
    const fileInput = event.dataTransfer;
    const file = fileInput.files[0];
    setSelectedFile(file);
    fileInput.value = "";
  };

  return (
    <div className="s flex lg:flex-row flex-col-reverse space-y-10 md:space-y-0 mt-14 sm:mb-14 items-center lg:items-start justify-center">
      <div className="bg-[#EDF2F7] h-[530px] hidden lg:block mt-10 lg:mt-0 rounded-sm w-[90%] mx-5 md:max-w-[622px] px-4 pt-5 pb-12 ">
        <h1 className="font-[500] text-[25.89px] text-[#171923] mb-6">
          Book a Meeting
        </h1>
        <p className="text-[12px] sm:text-[16px]  text-[#434343]">
          Do you want to talk to us directly? Book a meeting with us.
        </p>{" "}
        <div className="flex flex-col sm:flex-row mb-4 md:mb-16 md:mt-10   items-center space-x-4 justify-center mx-5 xl:mx-10 ">
          <div className="w-[100%]">
            <img className=" rounded-md  w-[235px]" src={consultant} alt="" />
          </div>
          <div className="w-[50%]">
            <h1 className=" xl:text-[25.89px] mt-8 lg:mt-0 text-[20px]  text-[#171923]">
              Azhar Mehmood
            </h1>
            <div className="font-[500] text-[16px] xl:text-[18px] space-y-2 my-4 text-[#434343]">
              <p className="text-[#434343]">Consultant</p>
              <p className="text-[#434343]">+92 311 5910778</p>
              <p className="text-[#434343] mr-3">azhar.m@syncclouds.com</p>
            </div>
            <button className=" font-[600] text-white bg-[#002680] w-full py-[8px] rounded-sm">
              Book a Meeting
            </button>
          </div>
        </div>
        {/* <div className="hidden sm:block pt-3 border-t-2 border-[#ccc8c8]">
          <h1 className="font-[500] text-[25.89px] text-[#171923] leading-[38.83px]">
            Legal Information
          </h1>
          <p className="text-[#434343]">
            Office No. M-35,36. Mezzanine Floor, Gold Point Shopping Mall,
            Rawalpindi, Pakistan
          </p>
        </div> */}
        {/* <div className="sm:hidden">
          <h1 className="font-[600] text-[14px] text-[#171923]">
            Legal Information
          </h1>
          <p className="text-[12px] text-[#434343]">
            Office No. M-35,36. Mezzanine Floor, Gold Point Shopping Mall,
            Rawalpindi, Pakistan
          </p>
        </div> */}
      </div>
      <div className="bg-[#EDF2F7] min-h-[530px]  text-black px-4 pb-1 mb-10 md:px-0 mx-5 w-[90%] md:max-w-[622px] rounded-sm">
        <form className="px-[10px] md:px-[30px] py-4" onSubmit={handleSubmit}>
          <h5 className="font-[500] text-[25.89px] text-[#171923] mb-1">
            Write a Message
          </h5>
          {/* <div className="h-[68px]">
            <input
              type="text"
              placeholder="Name"
              className={` py-2 px-3 text-[14px] md:text-[16px] font-[400]  w-[100%] border-b ${
                formErrors.name ? "border-red-500" : "border-b-gray-200"
              } placeholder-gray-400 outline-none`}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && (
              <div className="flex space-x-1.5 items-center my-1">
                <BsExclamationCircle className="text-red-500 text-[15px]" />
                <p className="text-red-500 text-xs  mt-1">{formErrors.name}</p>
              </div>
            )}
          </div> */}
          <div className="flex sm:gap-3 flex-col sm:flex-row ">
            <div className="h-[68px] w-[100%] sm:w-[50%]">
              <input
                type="text"
                placeholder="Name"
                className={` py-2 px-3 text-[14px] md:text-[16px] font-[400]  w-[100%] border-b ${
                  formErrors.name ? "border-red-500" : "border-b-gray-200"
                } placeholder-gray-400 outline-none`}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <div className="flex space-x-1.5 items-center my-1">
                  <BsExclamationCircle className="text-red-500 text-[15px]" />
                  <p className="text-red-500 text-xs  mt-1">
                    {formErrors.name}
                  </p>
                </div>
              )}
            </div>{" "}
            <div className=" w-[100%] sm:w-[50%] h-[68px]">
              <input
                className={`py-2 px-3 text-[14px] md:text-[16px] font-[400]  w-[100%] border-b ${
                  formErrors.email ? "border-red-500" : "border-b-gray-200"
                } placeholder-gray-400 outline-none`}
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <div className="flex space-x-1.5 items-center my-1">
                  {" "}
                  <BsExclamationCircle className="text-red-500 text-[15px]" />
                  <p className="text-red-500 text-xs  mt-1">
                    {formErrors.email}
                  </p>
                </div>
              )}
            </div>
            {/* <div className=" w-[100%] sm:w-[50%] h-[68px]">
              <div className="bg-white">
                <PhoneInput
                  international
                  className={`placeholder-gray-400 outline-transparent py-2 px-3 text-[14px] md:text-[16px] font-[400]  w-[100%] border-b ${
                    formErrors.phoneNumber
                      ? "border-red-500"
                      : "border-b-gray-200"
                  } `}
                  placeholder="Phone"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </div>
              {formErrors.phoneNumber && (
                <div className="flex space-x-1.5 items-center my-1">
                  {" "}
                  <BsExclamationCircle className="text-red-500 text-[15px]" />
                  <p className="text-red-500 text-xs  mt-1">
                    {formErrors.phoneNumber}
                  </p>
                </div>
              )}
            </div> */}
            {/* <input
                className={` py-2 px-3 text-[14px] md:text-[16px] font-[400]  w-[100%] border-b ${
                  formErrors.phoneNumber
                    ? "border-red-500"
                    : "border-b-gray-200"
                } placeholder-gray-400 outline-none`}
                type="number"
                placeholder="Phone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              {formErrors.phoneNumber && (
                <div className="flex space-x-1.5 items-center my-1">
                  {" "}
                  <BsExclamationCircle className="text-red-500 text-[15px]" />
                  <p className="text-red-500 text-xs  mt-1">
                    {formErrors.phoneNumber}
                  </p>
                </div>
              )} */}
          </div>
          <div className=" w-[100%]  h-[68px]">
            <div className="bg-white">
              <PhoneInput
                international
                className={`${
                  error ? "border-b border-red-500 " : " "
                }placeholder-gray-400 outline-transparent py-2 px-3 text-[14px]  md:text-[16px] font-[400]  w-[100%]`}
                placeholder="Phone"
                id="phoneNumberInput"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            {/* {formErrors.phoneNumber && (
              <div className="flex space-x-1.5 items-center my-1">
                {" "}
                <BsExclamationCircle className="text-red-500 text-[15px]" />
                <p className="text-red-500 text-xs  mt-1">
                  {formErrors.phoneNumber}
                </p>
              </div>
            )} */}{" "}
            {error && (
              <div className="flex space-x-1.5 items-center my-1">
                <BsExclamationCircle className="text-red-500 text.-[15px]" />
                <p className="text-red-500 text-xs  mt-1">{error}</p>
              </div>
            )}
          </div>

          <div
            className="bg-white px-4 mb-5 flex justify-between py-1"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
            <label
              className={` cursor-pointeritems-center ${
                selectedFile ? "" : "bg-white"
              }`}
            >
              <div className="flex gap-2">
                {" "}
                <img
                  className="cursor-pointer"
                  src={attachmentIcon}
                  alt="Uploaded"
                />
                <input
                  className={`gap-2  cursor-pointer relative py-[10px] px-3 ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                  style={{ display: "none" }}
                  type="file"
                  accept=".pdf,.doc,.docx,.odt"
                  onChange={handleFileChange}
                  name="file"
                />
                {selectedFile ? (
                  <div className="flex items center justify-between">
                    {" "}
                    <p className="font-[550]">
                      "{selectedFile.name}"
                      <span className="font-[400] mr-4"> is selected</span>
                    </p>
                  </div>
                ) : (
                  <p className=" font-[600] cursor-pointer text-[16px]">
                    Add Attachment
                  </p>
                )}
              </div>

              <p className="text-[12px] xl:text-[16px] text-[#8D8D8D]">
                No Images - only DOC, DOCX, PDF ODT up to 10 MB
              </p>
            </label>{" "}
            {selectedFile && (
              <div
                onClick={() => {
                  setSelectedFile(null);
                }}
              >
                <TiDelete className="text-red-600 text-[22px] cursor-pointer" />
              </div>
            )}{" "}
          </div>
          {/* {formErrors.file && (
              <div className="flex space-x-1.5 items-center my-1">
                <BsExclamationCircle className="text-red-500 text-[15px]" />
                <p className="text-red-500 text-xs  mt-1">{formErrors.file}</p>
              </div>
            )} */}

          <div className="justify-center pt-[10px] text-[14px] md:text-[16px] font-[400]  placeholder-gray-400 ">
            <textarea
              className={`w-full placeholder-gray-400   min-h-[85px] max-h-[355px] p-2 ${
                formErrors.message ? "border-red-500" : ""
              }`}
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {/* {formErrors.message && (
              <img height={15}width={15} src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Block-512.png" /><p className="text-red-500 text-xs  mt-1">{formErrors.message}</p>
            )} */}
          </div>
          <div className="mt-3">
            <div className="flex md:items-center justify-center gap-3">
              <input
                className=" h-[20px] w-[20px] md:mt-0"
                type="checkbox"
                name="agreement"
                // checked={formData.agreement}
                onChange={handleInputChange}
              />
              <p className="text-center text-[13px] lg:text-[16px] font-[400]">
                I want an NDA to protect my idea.
              </p>
            </div>
            {/* {formErrors.agreement && (
              <p className="pl-8  text-red-500 text-center text-xs mt-1 mb-4 font-semibold">
                {formErrors.agreement}
              </p>
            )} */}
            <p className="text-center text-[13px] lg:text-[16px] font-[400]  mt-1">
              We will get back to you within 24 hours, guaranteed.
            </p>
            <button
              type="submit"
              className="font-[600]  mt-3 text-white bg-[#002680] w-full py-[5px] md:py-[10px] rounded-sm"
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
