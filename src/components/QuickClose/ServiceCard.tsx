import { StaticImage } from "gatsby-plugin-image";
import React, { FC, ReactNode } from "react";
import SideLinks from "../SideLinks";

interface IServiceCard {
  title: string;
  description: string;
  image: ReactNode;
  bg: string;
}

const ServiceCard: FC<IServiceCard> = ({ title, description, image, bg }) => {
  return (
    <div className="flex items-center py-2 bg-white rounded-[10px] my-[14px] w-full cursor-pointer">
      <div className="w-[20%]">
        <SideLinks width="w-[37px]" height="h-[37px]" image={image} bg={bg} />
      </div>
      <div className="w-[90%]">
        <div className="font-bold text-[16px]">{title}</div>
        <div className="text-[14px]">{description}</div>
      </div>
      <div className="w-[10%] flex justify-end">
        <StaticImage
          src="../../images/left-chevron-icon.svg"
          alt="menu"
          placeholder="none"
          height={16}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
