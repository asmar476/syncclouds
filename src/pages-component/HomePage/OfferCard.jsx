import { offerData } from "../../constant/Data";
import MainSubHeading from "../../common component/MainSubHeading";
import BoldParagraph from "../../common component/BoldParagraph";
import { useState } from "react";
import InnerPageHeading from "../../common component/InnerPageHeading";
const OfferCard = () => {
  const [hover, setHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState("");

  return (
    <div className="container mx-auto px-10 py-10 space-y-10 xl:space-y-20">
      <div className="flex flex-col items-center justify-center text-center">
        {/* <Headin2 data={'What We Offer'}/> */}
        <MainSubHeading
          my={"my-5"}
          ml={"ml-2"}
          text={"Bespoke IT"}
          gradientText={"Services By SyncClouds"}
        />
        <BoldParagraph
          text={
            " Make a statement and drive revenue with our trusted IT services to deliver ultimate profitability."
          }
        />
      </div>

      <div className="grid gap-10 xl:gap-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
        {offerData.map((card, index) => (
          <div
            key={card.id}
            onMouseEnter={() => {
              setHover(true), setCurrentIndex(index);
            }}
            onMouseLeave={() => {
              setHover(false);
              setCurrentIndex("");
            }}
          >
            <div className="relative flex flex-col  p-5   rounded shadow-lg hover:bg-blueDark hover:text-white lg:max-h-[300px] xl:max-h-[330px] ">
              <div className="flex items-center justify-center  h-[50px] w-[50px] rounded-full ">
                <img
                  src={
                    hover && currentIndex === index ? card.iconWhite : card.icon
                  }
                />
              </div>
              <div className="pt-5">
                <InnerPageHeading text={`${card.title}`} />
                <p className="text-[14px] md:text-[16px]  leading-[20px] md:leading-[30px] mb-10">
                  {" "}
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCard;
