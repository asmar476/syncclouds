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
  return (
    <>
      <div key={i}  className="bg-white py-3 px-5">
        <div className="flex items-center justify-between mb-3">
          <h3
            style={{ color: "hsla(226, 53%, 33%, 1)" }}
            className="text-sm lg:text-lg  font-semibold"
          >
            {name}
          </h3>{" "}
          <img className="w-[62px]" src={profileImage} alt="Profile" />
        </div>
        <p className="max-w-[339px] leading-[24px] text-sm font-[400] pb-1">
          {summary}
        </p>
        <hr className="border-t border-gray-300 mt-3 md:mt-7  mb-3 md:mb-5" />
        <div
          style={{ color: "hsla(226, 53%, 33%, 1)" }}
          className="flex font-[600] items-center justify-between mb-1"
        >
          <p className="text-sm md:text-[16px] pb-1 text-darkBlue">
            {designation}
          </p>{" "}
          <div className=" space-x-1.5   text-darkBlue flex items-center">
            {renderRatingStars(rating)}
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialCard;
