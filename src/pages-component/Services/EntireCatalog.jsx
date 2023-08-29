import React, { useEffect, useRef, useState } from "react";
import arrowRight from "../../assets/icons/blue-arrow-right.svg";
import { servicesCatalog } from "../../constant/Data";
import useAnalyticsEventTracker from "../../common component/useAnalyticsEventTracker";
import {
  BsChevronBarDown,
  BsChevronDown,
  BsWindowDesktop,
} from "react-icons/bs";

function EntireCatalog() {
  const [activeTab, setActiveTab] = useState(1);
  const [windowWidth, setWindowwWidth] = useState(false);
  const [services, setServices] = useState(
    servicesCatalog.map((serv) => {
      return { id: serv.id, title: serv.title };
    })
  );
  const [showMore, setShowMore] = useState(false);
  const [moreMenu, setMoreMenu] = useState([]);

  const prevWidth = window.innerWidth;
  const catalogmenu = window.addEventListener("scroll", function () {
    const lessData = servicesCatalog.map((serv) => {
      return { id: serv.id, title: serv.title };
    });
    if (
      prevWidth > window.innerWidth &&
      window.innerWidth <= 500 &&
      window.innerWidth > 400
    ) {
      const resultSer = lessData.splice(0, 4);
      const resultMore = lessData.splice(lessData.length - 1);
      setMoreMenu(resultMore);
      setServices(resultSer);
      setWindowwWidth(true);
    } else if (
      prevWidth > window.innerWidth &&
      window.innerWidth <= 400 &&
      window.innerWidth > 300
    ) {
      const resultSer = lessData.splice(0, 3);
      const resultMore = lessData.splice(lessData.length - 2, lessData.length);
      setServices(resultSer);
      setMoreMenu(resultMore);
      setWindowwWidth(true);
    }
    if (
      prevWidth > window.innerWidth &&
      window.innerWidth <= 600 &&
      window.innerWidth > 500
    ) {
      const resultSer = lessData.splice(0, 5);
      const resultMore = [];
      setServices(resultSer);
      setMoreMenu(resultMore);
      setWindowwWidth(false);
    }
  });
  const moreRef = useRef();

  const closedMoreMenu = (e) => {
    if (moreRef.current && !moreRef.current.contains(e.target)) {
      setShowMore(false);
    }
  };

  document.addEventListener("click", closedMoreMenu);
  const gaEventTracker = useAnalyticsEventTracker("Entire Catalog");
  return (
    <div className=" flex flex-col items-center mt-16 w-full max-w-[1200px] xl:max-w-[1400px] px-10 mx-auto">
      <div className="mb-8 space-y-3">
        <h2 className="font-[600] text-center text-[18px] md:text-[25px]">
          Entire Catalog of Services
        </h2>
        <p className="text-center   lg:w-[923px] text-body">
          Our service offerings include system integration, complete lifecycle
          management of custom products, apps, and services, and strategic IT
          and technology consulting.
        </p>
      </div>
      <div className="w-full text-[11px] sm:text-[14px] md:text-[18px]  pt-3 bg-gray-200  flex flex-wrap justify-between max-w-[900px] px-3 h-[35px] md:h-[50px]">
        {services.map((service, index) => (
          <div
            key={service.id}
            onClick={() => {
              gaEventTracker("Services");
              setActiveTab(service.id);
              setShowMore(false);
            }}
            className={`text-[10px] sm:[] md:text-[16px] cursor-pointer px-[2px]  ${
              activeTab === service.id
                ? "font-semibold transition-duration-3s  border-b-2 border-primary"
                : ""
            }`}
          >
            {service.title}
          </div>
        ))}

        {windowWidth && (
          <div className="relative" ref={moreRef}>
            <div
              onClick={() => {
                gaEventTracker("Show More");
                setShowMore(!showMore);
              }}
              className="text-[10px] flex items-center gap-1"
            >
              <p> More </p>
              <BsChevronDown />
            </div>
            {showMore && moreMenu.length !== 0 && (
              <div className="  min-w-[80px] rounded bg-gray-300 absolute top-[20px] right-0 py-2 px-1">
                {moreMenu.map((more, index) => (
                  <div
                    key={more.id}
                    onClick={() => {
                      gaEventTracker("Show More");
                      setActiveTab(more.id);
                    }}
                    className={`text-[10px] sm:[] md:text-[16px] cursor-pointer px-[2px] py-[3px] ${
                      activeTab === more.id
                        ? "font-semibold transition-duration-3s border-b-2 border-primary p-[3px] "
                        : ""
                    }`}
                  >
                    <p>{more.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="mt-8 md:mt-0  max-w-[900px]">
        {servicesCatalog.map((service, index) => (
          <div
            key={index}
            className={`md:flex-row flex-col flex items-center justify-between text-center md:text-left ${
              activeTab == service.id ? "block" : "hidden"
            }`}
          >
            <div className=" md:w-[50%]">
              <h3 className="text-xl font-bold mb-2 text-primary">
                {service.title}
              </h3>
              <p className="mb-4 text-[16px]">{service.content}</p>
            </div>
            <div>
              <img
                src={service.img}
                alt={service.title}
                className=" mx-auto   "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EntireCatalog;
