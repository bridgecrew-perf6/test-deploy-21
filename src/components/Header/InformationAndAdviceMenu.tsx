import React from "react";
import MenuLink from "./MenuLink";

export const informationAndAdviceMenuTwo = [
  "Sex & relationships",
  "Your body",
  "Mental health",
  "Drinks & drugs",
  "Housing",
  "Money",
  "Work & study",
  "Crime & safety",
  "Travel & lifestyle",
];

export const informationAndAdviceMenuThree = [
  "Stressheads",
  "Define me",
  "Home-trust",
  "Is my relationship healthy",
];

const InformationAndAdviceMenu = () => {
  return (
    <>
      <div className="p-2">
        <div className="grid grid-cols-3 gap-4 divide-x divide-blue-teal">
          <div className="pl-4">
            <div className="text-[14px] font-bold py-2 text-red-main">
              Real life stories & expert advice
            </div>
            {informationAndAdviceMenuTwo.map((item, index) => {
              return <MenuLink title={item} key={index} />;
            })}
          </div>
          <div className="pl-4">
            <div className="text-[14px] font-bold py-2 text-red-main">
              Apps & tools
            </div>
            {informationAndAdviceMenuThree.map((item, index) => {
              return <MenuLink title={item} key={index} />;
            })}
          </div>
          <div className="pl-4">
            <div className="text-[14px] font-bold py-2 text-red-main">
              Skill up
            </div>
            <div className="text-[14px] text-gray-main">
              Develop the know-how to help you move forward in your life. Take a
              look at the different options we have for you!
            </div>
            <MenuLink title="Available courses" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationAndAdviceMenu;
