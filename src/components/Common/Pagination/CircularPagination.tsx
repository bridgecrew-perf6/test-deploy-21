import React from "react";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

const CircularPagination = () => {
  return (
    <div className="flex items-center space-x-2 text-blue-teal font-bold">
      <div className="bg-blue-teal text-white flex items-center justify-center rounded-full p-1">
        <FaChevronLeft />
      </div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>...</span>
      <span>10</span>
      <div className="bg-blue-teal text-white flex items-center justify-center rounded-full p-1">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default CircularPagination;
