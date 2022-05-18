import React, { FC } from "react";
import CrisisMessenger from "../../../static/icons/crisis-messenger.png";
import CommunitySupport from "../../../static/icons/community-support.png";
import Helpline from "../../../static/icons/helpline.png";
import Counselling from "../../../static/icons/counselling.png";
import LocalServices from "../../../static/icons/local-services.png";

export const yourCommunityMenuOptions = [
  {
    icon: CrisisMessenger,
    title: "24-hour crisis support",
    description: "Free messenger services open 24/7",
    bg: "bg-red-main",
  },
  {
    icon: CommunitySupport,
    title: "Talk to other young people",
    description: "Discussion boards & Group chat",
    bg: "bg-red-main",
  },
  {
    icon: Helpline,
    title: "Helpline",
    description: "Webchat, email and freephone open every day from 3pm - 12am",
    bg: "bg-yellow-400",
  },
  {
    icon: Counselling,
    title: "Counselling",
    description: "Book your confidential session with one of our team today",
    bg: "bg-blue-teal",
  },
  {
    icon: LocalServices,
    title: "Support in your local area",
    description: "Local advice finder",
    bg: "bg-blue-teal",
  },
];

const YourCommunityMenu: FC = () => {
  return (
    <div className="px-2 pt-4 pb-8">
      <div className="grid grid-cols-5 divide-x divide-blue-teal">
        {yourCommunityMenuOptions.map(
          ({ icon, description, title, bg }, index) => (
            <div className="px-4">
              <div
                className={`w-8 h-8 p-[6px] flex items-center justify-center rounded-[6px] py-2 ${bg}`}
              >
                <img
                  src={icon}
                  alt={title}
                  className="object-scale-down max-h-[19px] max-w-[19px]"
                />
              </div>
              <div className="font-bold py-2">{title}</div>
              <div className="text-[14px]">{description}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default YourCommunityMenu;
