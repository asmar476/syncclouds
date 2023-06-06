import React from "react";
import MainSubHeading from "../../common component/MainSubHeading";

const ContactDetailForm = () => {
  return (
    <div className="container mx-auto px-10 my-20">
      <div className="flex flex-col items-center justify-center text-center">
        <MainSubHeading
          text={"Let's talk about your project and make your dream a reality!"}
        />
        <p className="text-[#335775] font-[500] text-[16px] leading-[24px] max-w-[700px] my-5 text-center">
          After receiving the following information, a member of our staff will
          contact you to go through the specifics of your project.
        </p>
      </div>
      <div className="mt-10 mb-32">
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
              {/* <label
                htmlFor="Email"
                className="text-[16px] font-[600] leading-[24px]"
              >
                Services Required
              </label> */}
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
      </div>
    </div>
  );
};

export default ContactDetailForm;
