import React from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";
const cardStyle = {
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
};
const renderRatingStars = (rating) => {
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarFilled key={`full-star-${i}`} />);
  }
  if (hasHalfStar) {
    stars.push(<StarOutlined key="half-star" />);
  }
  const remainingStars = maxRating - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(
      <StarFilled key={`empty-star-${i}`} style={{ color: "#ccc" }} />
    );
  }
  return stars;
};
const TestimonialCard = ({
  i,
  summary,
  profileImage,
  name,
  rating,
  designation,
}) => {
  const trimmedSummary =
    summary.length > 200 ? `${summary.substring(0, 200)}....` : summary;

  return (
    <>
      <div key={i} className=" py-3 px-5 w-full">
        <div className="flex items-center justify-between lg:mb-3">
          {/* <h3
            style={{ color: "hsla(226, 53%, 33%, 1)" }}
            className="text-sm lg:text-lg  font-semibold"
          >
            {name}
          </h3> */}
          {/* <img className="w-[62px]" src={profileImage} alt="Profile" /> */}
        </div>
        <p className="max-w-[339px] leading-[20px] italic lg:leading-[24px] text-[12px] lg:text-sm font-[400] lg:pb-1">
          "{trimmedSummary}"
        </p>
        <hr className="border-t border-gray-300 mt-3 lg:mt-7  mb-3 lg:mb-5" />
        <div
          style={{ color: "hsla(226, 53%, 33%, 1)" }}
          className="flex font-[600] items-center justify-between lg:mb-1"
        >
          {/* <p className="text-[14px] lg:text-[16px] pb-1 text-darkBlue">
            {designation}
          // </p> */}
          <h3
            style={{ color: "hsla(226, 53%, 33%, 1)" }}
            className="text-sm lg:text-lg  font-semibold"
          >
            {name}
          </h3>
          <div className=" space-x-1.5   text-darkBlue flex items-center">
            {renderRatingStars(rating)}
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialCard;
