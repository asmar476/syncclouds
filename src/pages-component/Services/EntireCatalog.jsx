import React, { useState } from "react";
import img from "../../assets/Services/catalogServices.svg";
import arrowRight from "../../assets/icons/blue-arrow-right.svg";
const cardsData = [
  {
    title: "Services",
    content:
      "Sync Cloudss is equipped with the tools, technology, and domain knowledge necessary to produce various professional software development services. We assist our clients in creating and capturing value and enhancing company outcomes by eliminating the operational inefficiencies that impede growth.",
    img: img,
  },
  {
    title: "Technologies",
    content:
      "We create adaptable, scalable software development solutions for our clients to help them become more creative and practical, which speeds up the description process.",
    img: img,
  },
  {
    title: "Solutions",
    content:
      "We are a software development services company offering a comprehensive range of engineering services to Fortune 1000 firms and international organizations, whether a consumer-focused app or a revolutionary enterprise-class solution.",
    img: img,
  },
  {
    title: "Platforms",
    content:
      "Are you prepared to prevent dangers, quicken transformation, and ignite revenue growth? Put, go digital. We utilize the most recent tools, technologies, and platforms to accelerate our transformation initiatives and enhance your business outcomes.",
    img: img,
  },
  {
    title: "Team Expansion",
    content:
      "Our culture values finding software developers with the appropriate knowledge and intense levels of commitment quickly. Team extension is an improved, contemporary iteration of the committed team strategy.",
    img: img,
  },
];
function EntireCatalog() {
  const [isHovered, setIsHovered] = useState(false);
  const [cardIndex, setCardIndex] = useState("");
  const [selectedCard, setSelectedCard] = useState(cardsData[0]);
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <div>
      <div className="mt-10 container mx-auto flex flex-col items center justify-center space-y-6">
        {/* <div className='w-full container mx-auto my-10 flex flex-col items-center justify-center'> */}
        <div className="mb-8 space-y-3">
          {" "}
          <h2 className="font-[600] text-center text-[14px] md:text-[25px]">
            Entire Catalog of Services
          </h2>
          <p className="text-center text-body">
            Our service offerings include system integration, complete lifecycle
            management of custom products, <br /> apps, and services, and
            strategic IT and technology consulting.
          </p>
        </div>
        <div className=" flex items-center justify-center">
          <div>
            <ul className="bg-[#EDF2F7] rounded px-16 w-[350px] py-12 space-y-4">
              {cardsData.map((card, index) => (
                <li
                  className={`cursor-pointer font-[600] text-[22px] flex ${
                    selectedCard === card ? "selected text-primary" : ""
                  }`}
                  key={index}
                  onClick={() => handleCardClick(card)}
                >
                  {card.title}
                  {selectedCard === card && <img src={arrowRight} alt="" />}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center  justify-between shadow">
            <div className="w-[527px] pl-16">
              {selectedCard && (
                <div>
                  <h2 className="text-primary  font-[600] mb-5 text-[25.89px]">
                    {selectedCard.title}
                  </h2>
                  <p className="text-body text-[18px]">
                    {selectedCard.content}
                  </p>
                </div>
              )}
            </div>

            {selectedCard && (
              <img
                width={310}
                src={selectedCard.img}
                alt={selectedCard.title}
              />
            )}
          </div>
        </div>

        {/* <div className='flex items-center justify-center'>
          {cardsData.map((card, index) => (
          <div key={index} className='h-[300px] w-full md:w-1/2 xl:w-1/3 p-4'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='text-lg font-semibold mb-4'>{card.title}</h3>
              <p className='text-gray-700'>{card.content}</p>
            </div>
          </div>
        ))}
        </div> */}

        {/* <div className="flex flex-col items-center justify-center">
          {" "}
          <div className="card  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className={`w-[350px] mx-1 p-5 rounded shadow-lg hover:text-white card-container ${
                  isHovered && cardIndex === index
                    ? "hover:bg-[#2261A2]"
                    : "bg-white"
                }`}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setCardIndex(index);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setCardIndex("");
                }}
              >
                <div className=" group inline-block">
                  {/* <img
                  src={
                    isHovered && cardIndex === index
                      ? card.whiteIcon
                      : card.icon
                  }
                  alt={card.title}
                  width='40px'
                /> */}
        {/* </div>
                <h3 className="font-semibold  md:text-[18px] mb-2">
                  {card.title}
                </h3>
                <p className="text-[14px]">{card.content}</p>
              </div>
            ))}
          </div> 
        </div> */}
      </div>
    </div>
  );
}

export default EntireCatalog;
