import React from "react";
import clsxm from "../../../../lib/clsxm";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import Badge from "../Badge";
import ReactMarkdown from "react-markdown";
import UnstyledLink from "../../../Links/UnstyledLink";
import StarRating from "../../StarRating";
import CommentCount from "../../CommentCount";
import Bookmark from "../Bookmark";

const VideoArticleCard = ({ title, description, image, targetUrl }) => {
  return (
    <div>
      <a href={targetUrl} target="_blank">
        <div
          className={clsxm(
            "cursor-pointer",
            "rounded-[12px] shadow-md bg-white",
            "h-[280px] lg:h-[522px] mb-10 lg:mb-0",
            "image-card-bg",
            "text-gray-main",
            "overflow-hidden"
          )}
        >
          <div className="relative block">
            <div className="absolute h-full w-full flex items-center group">
              <div className="bg-white group-hover:bg-blue-teal rounded-full mx-auto border h-[75px] w-[75px] flex items-center justify-center">
                <FaPlay className="text-blue-teal h-[41px] w-full transition duration-500 ease-in-out transform cursor-pointer group-hover:scale-[110%] group-hover:text-white image-hover" />
              </div>
            </div>

            {image && image.high && (
              <div className="overflow-hidden rounded-t-[12px]">
                <img
                  src={image.high.url}
                  alt="image"
                  className="w-full rounded-t-[12px] h-[104px] lg:h-[290px] object-cover"
                />
              </div>
            )}
          </div>
          <div className="p-4 h-full overflow-hidden overlay-wrapper">
            <div className="card-overlay rounded-b-[12px]"></div>
            <div className="flex items-center justify-between">
              <Badge title="Expert advice" />
              <Bookmark />
            </div>
            <h3 className="py-2 text-[14px] lg:text-[16px]">{title}</h3>
            <div className="text-[14px] lg:text-[16px]">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
          </div>
        </div>
      </a>
      <div className="flex items-center space-x-2 pt-2 pl-4">
        <StarRating />
        <CommentCount count={22} />
      </div>
    </div>
  );
};

export default VideoArticleCard;
