import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimezoneSelect from "react-timezone-select";
// import 'react-timezone-select/dist/react-TimezoneSelect.css'
import "react-time-picker/dist/TimePicker.css";
import TimePicker from "react-time-picker";
import bg_img from "../assets/map.png";
import logo1 from "../assets/SyncCloudsLogo/logoH-0.svg";
import clock from "../assets/icons/clock.svg";
import video from "../assets/icons/video.svg";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
function BookMyCall() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("12:00");
  const [timezone, setTimezone] = useState("");
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };
  const handleTimeChange = (selectedTime) => {
    setTime(selectedTime);
  };
  const handleTimezoneChange = (selectedTimezone) => {
    setTimezone(selectedTimezone.value);
  };
  return (
    <>
      <Header />
      <div className="container h-[1120px] overflow-y-hidden pb-3 md:w-[1100px] md:h-screen mb-0 mx-auto bg-[#F3F4FF] flex flex-col pt-8 items-center">
        {/* <Link
          className="float-right font-medium text-primary hover:underline"
          to="/"
        >
          Back
        </Link> */}

        <h1 className="font-bold text-center  text-[14px] sm:text-[20px] md:text-[41px]">
          Book a <span className="text-[#002680]">Free Session </span> At
          AnyTime
        </h1>
        <div className="relative">
          <img
            src={bg_img}
            alt=" Your Image"
            className="opacity-10 w-full md:h-[555px]"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center ">
            <p className=" text-center mb-5 text-[8px] px-3 sm:text-[11px] md:text-[16px] ">
              Take the first step towards true&nbsp;
              <span className="text-[#002680] font-semibold">growth </span> by
              booking
              <span className="text-[#002680] font-semibold"> 30 minutes </span>
              free Session now.
            </p>
            {/* ============================================== 1st part =============================================== */}
            <div className="text-[13px] border  border-[#AFAFAF]-400  bg-white rounded mt-2 px-2 shadow-lg my-1 mx-20">
              {" "}
              <div className="overflow-y-hidden pb-2 mb-2 md:flex">
                <div className="md:border-r border-[#AFAFAF]-400  w-[365px]">
                  <div className="w-full border-b border-[#AFAFAF]-400 px-8 mb-3 py-10">
                    <center>
                      <img src={logo1} alt="your img" />{" "}
                    </center>
                  </div>
                  <div className="px-5 text-[12px]">
                    <h1 className="pl-5  mb-4 font-semibold text-[20px]">
                      Discovery Call
                    </h1>
                    <div className="pl-5 flex ">
                      <img src={clock} alt="" />
                      <p className=" w-[285px] ml-4">30 min</p>
                    </div>
                    <div className="pl-5 flex">
                      <img src={video} alt="" />
                      <p className="w-[285px] ml-4   ">
                        Web conferencing details provided
                        <p> upon confirmation</p>
                      </p>
                    </div>
                    <h2 className="pl-6  pr-3 font-semibold  mt-4">
                      Step 1:{" "}
                      <span className="font-normal">
                        Inquire about the client's business or industry to
                        gather insights. Ask open-ended questions that encourage
                        detailed responses.
                      </span>
                    </h2>
                    <br />{" "}
                    <h2 className="pl-6  pr-3 font-semibold  ">
                      Step 2:{" "}
                      <span className="font-normal">
                        Collaborate with the team to identify project needs and
                        brainstorm potential strategies.
                      </span>
                    </h2>
                    <br />
                    <h2 className="pl-6  pr-3 font-semibold  ">
                      Step 3:{" "}
                      <span className="font-normal">
                        Evaluate potential strategies with the team and select
                        the most effective approach for achieving the project's
                        objectives.
                      </span>
                    </h2>
                    <br />
                  </div>
                </div>
                {/* ================================================= time ================================================== */}
                <div className="w-[365px]  px-8">
                  <h3 className="font-semibold mt-10 mb-5 text-[16] ">
                    Select a Date & Time
                  </h3>
                  <Calendar
                    // style={{ border:'none' }}
                    className="py-2"
                    value={date}
                    onChange={handleDateChange}
                  />

                  <h3 className="mt-5 font-semibold mb-2 text-[16]">
                    {" "}
                    Time Zone
                  </h3>
                  <TimezoneSelect
                    className="mb-5"
                    value={timezone}
                    onChange={handleTimezoneChange}
                  />
                  {/* <TimePicker value={time} onChange={handleTimeChange} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookMyCall;
