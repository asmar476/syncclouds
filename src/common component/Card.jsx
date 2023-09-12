import React from "react";
import blogImg from "../assets/BLogs/blogscoverImage.svg";
import { Link } from "react-router-dom";
const Card = ({ title, pText, author, date }) => {
  return (
    <div
      className="bg-white m-5
        shadow-lg rounded h-[316px] w-[360px]"
    >
      <img src={blogImg} alt="blog image" />
      <div className="mt-5 text-body px-4  ">
        <p>{title}</p>
        <p>{pText}</p>
        <div className="my-2 flex justify-between items-center">
          <Link className="text-primary" to="/">
            {author}
          </Link>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
