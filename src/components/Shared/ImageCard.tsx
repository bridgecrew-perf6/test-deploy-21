import React, { FC } from "react";
import { VscBookmark } from "@react-icons/all-files/vsc/VscBookmark";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import Badge from "../Common/Cards/Badge";

interface IImageCardProps {
  small?: boolean;
  title: string;
  description?: any;
  imageUrl: string;
  imageDimentions: string;
  tipLeft?: {
    icon: string;
    text: string;
  };
  tipRight?: boolean;
  playBtn?: boolean;
  stats?: boolean;
  noBg?: boolean;
  stars?: string;
  comments?: string;
}

const ImageCard: FC<IImageCardProps> = ({
  small = false,
  title,
  description,
  imageUrl,
  imageDimentions,
  tipLeft,
  tipRight = false,
  playBtn = false,
  stats = false,
  noBg = false,
  stars = "21",
  comments = "16",
}: IImageCardProps) => {
  console.log("ICON IS: ", tipLeft);
  return (
    <>
      <div
        className={` shadow rounded-[12px] h-full cursor-pointer ${
          noBg ? "" : small ? "image-card-bg-small" : "image-card-bg"
        }`}
      >
        <div className={`${imageDimentions} relative block`}>
          {playBtn && (
            <div className="absolute h-full w-full flex items-center">
              <img
                src="play_btn.png"
                className={`mx-auto  ${small ? "h-[50px]" : "h-[75px]"}`}
              />
            </div>
          )}

          <div className="overflow-hidden rounded-t-[12px]">
            <img
              src={imageUrl}
              alt="image"
              className="w-full h-full object-cover overflow-hidden rounded-t-[12px] hover-image"
            />
          </div>
        </div>
        <div className="px-4 overflow-hidden overlay-wrapper">
          <div className="card-overlay rounded-b-[12px]"></div>
          <div className="flex justify-between items-center pt-2">
            {tipLeft && tipLeft.text ? <Badge title={tipLeft.text} /> : null}

            <div className="bg-red-main flex items-center p-1 rounded-[5px] cursor-pointer hover:bg-yellow-main z-20">
              <VscBookmark className=" text-white" />
            </div>
          </div>

          <h3 className="py-2 text-[14px] lg:text-[16px]">{title}</h3>
          <div className="text-[14px] lg:text-[16px] overflow-hidden h-28">
            {description}
          </div>
        </div>
      </div>
      {stats && !small && (
        <div
          className={`flex items-center space-x-4 ml-0 lg:ml-4 mt-2 cursor-pointer`}
        >
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <img
                src="star_filled.png"
                alt="star"
                className="w-4 h-4 cursor-pointer"
              />
              <img
                src="star_filled.png"
                alt="star"
                className="w-4 h-4 cursor-pointer"
              />
              <img
                src="star_filled.png"
                alt="star"
                className="w-4 h-4 cursor-pointer"
              />
              <img
                src="star_filled.png"
                alt="star"
                className="w-4 h-4 cursor-pointer"
              />
              <img
                src="star_unfilled.png"
                alt="star"
                className="w-4 h-4 cursor-pointer"
              />
            </div>
            <div className="text-[14px]">{stars}</div>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src="give_advice.png"
              alt="advice"
              className="w-[17px] cursor-pointer"
            />
            <div className="text-[14px]">{comments}</div>
          </div>
        </div>
      )}

      {stats && small && (
        <div className={`flex items-center space-x-4 ml-0 lg:ml-4 mt-2`}>
          <div className="flex items-center space-x-1 h-4">
            <div className="flex space-x-1">
              <img src="star_filled.png" alt="star" className="w-4 h-4" />
              <img src="star_filled.png" alt="star" className="w-4 h-4" />
              <img src="star_filled.png" alt="star" className="w-4 h-4" />
              <img src="star_filled.png" alt="star" className="w-4 h-4" />
              <img src="star_unfilled.png" alt="star" className="w-4 h-4" />
            </div>
            <div className="text-[14px]">{stars}</div>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src="give_advice.png"
              alt="advice"
              className="w-[17px] cursor-pointer"
            />
            <div className="text-[14px]">{comments}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCard;
