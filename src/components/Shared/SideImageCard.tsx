import React, { FC } from "react";

interface ISideImageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageDimentions: string;
}

const SideImageCard: FC<ISideImageCardProps> = ({
  title,
  description,
  imageUrl,
  imageDimentions,
}: ISideImageCardProps) => {
  return (
    <div
      className={`flex flex-row lg:flex-col shadow rounded-[12px] h-full cursor-pointer image-card-bg overlay-wrapper`}
    >
      <div className="card-overlay rounded-[12px]"></div>
      <div
        className={`${imageDimentions} ml-4 mr-0 lg:ml-4 lg:mr-4 my-4 lg:my-8 w-1/3 lg:w-full overflow-hidden`}
      >
        <img
          src={imageUrl}
          alt="image"
          className="h-full object-cover overflow-hidden image-hover rounded-t-[12px]"
        />
      </div>
      <div className="pl-0 pr-4 lg:pl-4 lg:pr-4 w-2/3 lg:w-full">
        <h3 className="py-2">{title}</h3>
        <div className="text-[14px] lg:text-[16px]">{description}</div>
      </div>
    </div>
  );
};

export default SideImageCard;
