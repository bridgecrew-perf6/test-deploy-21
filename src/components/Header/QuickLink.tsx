import React, { FC } from "react";

interface IQuickLinkProps {
  src?: string;
  text: string;
}
const QuickLink: FC<IQuickLinkProps> = ({
  src = "https://via.placeholder.com/35.png/09f/fff",
  text,
}) => {
  return (
    <div className="flex items-center px-2">
      <img src={src} alt="img" />
      <div className="text-xs table-caption pl-2">{text}</div>
    </div>
  );
};

export default QuickLink;
