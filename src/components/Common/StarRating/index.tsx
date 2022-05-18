import React from "react";
import ReactStars from "react-rating-stars-component";
import { StaticImage } from "gatsby-plugin-image";

const StarRating = () => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <ReactStars
        value={3}
        edit={false}
        char={
          <StaticImage
            src="./images/empty-star.png"
            alt="Search icon"
            placeholder="none"
            className="pointer-events-none w-4 h-4"
          />
        }
        emptyIcon={
          <StaticImage
            src="./images/empty-star.png"
            alt="Search icon"
            placeholder="none"
            className="pointer-events-none w-4 h-4"
          />
        }
        filledIcon={
          <StaticImage
            src="./images/full-star.png"
            alt="Search icon"
            placeholder="none"
            className="pointer-events-none w-4 h-4"
          />
        }
        activeColor="#ffd700"
        classNames={`flex space-x-[2px]`}
      />
      <span>4</span>
    </div>
  );
};

export default StarRating;
