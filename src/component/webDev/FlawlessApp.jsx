import React, { useState } from "react";

const FlawlessApp = () => {
  const [activeButton, setActiveButton] = useState(0);

  const buttonData = [
    {
      title: "Analysis",
      content: "Understands your idea to achieve your business goals smartly.",
    },
    {
      title: "Planning & Designing",
      content: "Second button content to be displayed.",
    },
    {
      title: "Sitemaps & Wireframing",
      content: "Third button content to be displayed.",
    },
    {
      title: "Optimized Content",
      content: "Fourth button content to be displayed.",
    },
    {
      title: "Bug-free Coding",
      content: "Fifth button content to be displayed.",
    },
    {
      title: "Pre-launch Testing",
      content: "Sixth button content to be displayed.",
    },
    {
      title: "Timely Delivery",
      content: "Seventh button content to be displayed.",
    },
    {
      title: "Support & Maintenance",
      content: "Eighth button content to be displayed.",
    },
  ];

  return (
    <div className="container mx-auto px-2 pt-20">
      <div className="flex space-y-4 flex-col justify-center items-center mb-20">
        <div className="flex flex-wrap">
          {buttonData.map((item, index) => (
            <button
              key={index}
              className={`text-[12px] font-[500] px-5 py-2  rounded-full ${
                activeButton === index
                  ? "bg-primary text-white"
                  : "text-[#171923]"
              } mr-2`}
              onClick={() => setActiveButton(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div>
          <p className="text-left">{buttonData[activeButton].content}</p>
        </div>
      </div>
    </div>
  );
};

export default FlawlessApp;
