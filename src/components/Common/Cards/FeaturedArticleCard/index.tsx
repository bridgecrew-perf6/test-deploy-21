import React, { useState } from "react";
import UnderLineHeading from "../../Headings/UnderLineHeading";
import Badge from "../Badge";
import FeaturedImage from "./images/featured-article.png";
import CTABlue from "./images/cta.svg";
import CTAYellow from "./images/cta-yellow.svg";
import * as styles from "./styles.module.css";
import StarRating from "../../StarRating";
import CommentCount from "../../CommentCount";

const FeaturedArticleCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <UnderLineHeading title="Featured article" className="pt-10" />
      <section className="py-4">
        <div className="rounded-[12px] flex flex-col md:flex-row justify-between h-full md:h-[384px] shadow-xl bg-white">
          <div className="w-full md:w-[68%] md:h-full rounded-l-[12px] h-[200px]">
            <img
              src={FeaturedImage}
              alt="featured"
              className="overflow-hidden h-full w-full object-cover rounded-tl-[12px] rounded-tr-[12px] rounded-bl-none rounded-br-none md:rounded-tl-[12px] md:rounded-tr-none md:rounded-bl-[12px] md:rounded-br-none"
            />
          </div>
          <div className="relative w-full md:w-[32%]">
            <div className="p-8 overflow-hidden">
              <Badge title="Expert advice" />
              <h2 className="py-2">
                How to cope with money during bereavement or illness
              </h2>
              <p>
                If someone close to you dies, the last thing on your mind will
                be sorting out their finances. Here’s an expert guide from
                Experian, to tell you exactly what you need to know.
              </p>
            </div>
            <div
              className="absolute bottom-0 right-0 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="hidden md:block relative text-center">
                <img
                  src={isHovered ? CTAYellow : CTABlue}
                  alt="read more"
                  className="rounded-br-[12px]"
                />
                <div className={`${styles.centered} text-white font-bold`}>
                  Read more
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-2 flex items-center space-x-4">
          <StarRating />
          <CommentCount />
        </div>
      </section>
    </>
  );
};

export default FeaturedArticleCard;
