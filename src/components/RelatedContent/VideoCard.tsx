import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface IVideoCard {
  title: string;
  thumbnails: any;
  handleClick?: () => {};
}
const VideoCard = ({ title, thumbnails, handleClick }: IVideoCard) => {
  return (
    <div className="py-2" onClick={handleClick}>
      <div className="ml-2 shadow rounded-[12px] flex space-x-2 items-center ease group hover:bg-blue-teal hover:text-white">
        <img
          src={thumbnails.high.url}
          alt={title}
          className="w-[80px] h-[86px] object-cover rounded-l-[12px]"
        />

        <div className="font-bold text-[16px] lg:text-[18px] text-gray-main ease group-hover:text-white">
          {title}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
