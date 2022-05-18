import React, { FC } from "react";
import MenuLink from "./MenuLink";

export const aboutUsMenuOptions = [
  {
    title: "What we do",
    more: ["Our services", "Annual Report 2020", "Work with us"],
  },
  {
    title: "Who we are",
    more: [
      "Mission, vision and values",
      "Meet the team",
      "Our practices and policies",
    ],
  },
  {
    title: "Partners and supporters",
    more: ["Corporate partners", "Trust and foundations"],
  },
  {
    title: "Latest updates",
    more: ["Our research", "Charity news"],
  },
];

const AboutUsMenu: FC = () => {
  return (
    <div className="px-2 pt-2 pb-8">
      <div className="grid grid-cols-4 divide-x divide-blue-teal">
        {aboutUsMenuOptions.map(({ title, more }, index) => (
          <div className="px-4">
            <div className="text-[14px] font-bold py-2 text-red-main">
              {title}
            </div>
            {more &&
              more.length &&
              more.map((item) => <MenuLink title={item} />)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsMenu;
