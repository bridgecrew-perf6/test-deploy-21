import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";

const menuOptions = [
  "Join our community",
  "Have your voice heard",
  "Volunteer",
  "Campaign for change",
  "Fundraise for The Mix",
];

const GetInvolvedMenu: FC = () => {
  return (
    <div className="p-4 flex space-x-4 justify-between">
      {menuOptions.map((option, index) => (
        <div className="h-[142px] rounded-[12px]  shadow-lg" key={index}>
          <StaticImage
            src="../../images/getInvolved.png"
            alt="Get involved"
            placeholder="none"
            className="pointer-events-none object-cover"
          />
          <div className="flex justify-between items-center">
            <div className="pl-2 pt-1 text-[16px] w-full text-blue-teal">
              {option}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetInvolvedMenu;
