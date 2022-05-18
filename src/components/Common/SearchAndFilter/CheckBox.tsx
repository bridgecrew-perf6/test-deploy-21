import React from "react";

const CheckBox = ({ name, count, checked, handleClick }) => {
  return (
    <button
      className={`flex items-center space-x-2 py-1 ease group overflow-auto ${
        checked ? "hover:text-gray-main" : "hover:text-blue-teal"
      }`}
      onClick={handleClick}
    >
      <div
        className={`w-3 h-3 rounded-sm ${
          checked ? "bg-blue-teal" : "border border-gray-main"
        } `}
      ></div>
      <span>{name}</span>
      <span>({count})</span>
    </button>
  );
};

export default CheckBox;
