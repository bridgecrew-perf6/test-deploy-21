import React from "react";
import { GiRoundStar } from "@react-icons/all-files/gi/GiRoundStar";

interface IBadgeProps {
  title: string;
  className?: string;
}

const Badge = ({ title, className }: IBadgeProps) => {
  return (
    <div
      className={`badge bg-blue-badge text-blue-teal border-none font-bold ease hover:text-white hover:bg-blue-teal cursor-pointer z-30 ${className}`}
    >
      <div className="flex items-center justify-center space-x-1">
        <GiRoundStar />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Badge;
