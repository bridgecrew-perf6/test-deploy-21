import React from "react";
import SpeechBubble from "../../../../static/give_advice.png";
import Star from "../../../../static/star-yellow.png";
import UnderlineLink from "../../Links/UnderlineLink";

const DiscussionCard = ({
  imageUrl,
  title,
  bgImageClass,
  comments,
  starredBy,
  url,
}) => {
  return (
    <div className="flex flex-col items-center py-2 ">
      <div className="rounded-full w-[56px] h-[56px] shadow flex items-center z-20 bg-white overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover rounded-full image-hover"
        />
      </div>
      <div
        className={`cursor-pointer shadow-xl rounded-[12px] h-[135px] w-full -mt-4 ${bgImageClass}`}
      >
        <div className="p-5 h-full shadow rounded-[12px] truncate overflow-hidden overlay-wrapper">
          <div className="card-overlay rounded-[12px]"></div>
          <div className="h-5/6 truncate">
            <h4 className="font-bold text-blue-teal">{title}</h4>
          </div>

          <div className="w-full flex h-1/6">
            <img src={Star} alt="star" className=" h-full border-0" />
            <div className="text-[14px] pl-2">Starred by {starredBy}</div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-1 pt-2 cursor-pointer group ease hover:font-bold">
        <img src={SpeechBubble} alt="Star" className="h-[13px]" />
        <div className="text-[14px]">{comments} comments</div>
      </div>
    </div>
  );
};

export default DiscussionCard;
