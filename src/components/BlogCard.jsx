import React from "react";
import { Link } from "react-router-dom";
import ArrowupIcon from "../icons/ArrowupIcon";

export default function BlogCard({ blog }) {
  const { image, date, title, link } = blog;
  return (
    <div className="flex items-center exp-card gap-3 my-8 rounded-lg px-4 py-4">
      <img
        src={image}
        alt=""
        className="w-[100px] md:w-[200px] h-[75px] hover:border-2 hover:border-teal2 hover:rounded-lg"
      />
      <div>
        <p>{date}</p>
        <Link to={link} className="hover:!text-lav2" target="_blank" rel="noopener noreferrer">
          {title}
          <span>
            <ArrowupIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}
