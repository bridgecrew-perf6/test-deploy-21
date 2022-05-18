import React, { FC, ReactNode, useState } from "react";

interface ILinkButtonProps {
  image?: ReactNode;
  text: string;
  bgColor: string;
  fontColor: string;
  icon?: JSX.Element;
  styles?: string;
  rightIcon?: JSX.Element;
  onClick?: () => void;
  hovered?: boolean;
}
const LinkButton: FC<ILinkButtonProps> = ({
  icon,
  text,
  bgColor = "",
  fontColor,
  styles = "",
  rightIcon,
  onClick,
  hovered = false,
}) => {
  return (
    <button
      className={`flex lg:flex-none items-center cursor-pointer ${
        rightIcon ? `justify-between` : `justify-center`
      }  px-2 shadow rounded-lg lg:rounded-xl cursor-pointer h-[24px] lg:h-[35px] hover:bg-yellow-main ${bgColor} ${styles}`}
      onClick={onClick}
    >
      {icon}
      <div
        className={`font-bold ${hovered ? "text-white" : fontColor} ${
          icon && "pl-2"
        } text-[12px] lg:text-[16px] `}
      >
        {text}
      </div>
      {rightIcon}
    </button>
  );
};

export default LinkButton;
