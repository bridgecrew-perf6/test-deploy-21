import React from "react";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";

interface IFilterPillProps {
  title: string;
}
const FilterPill = ({ title }: IFilterPillProps) => {
  return (
    <button className="group flex items-center space-x-2 rounded-[12px] p-2 mr-2 bg-gray-form my-1 hover:text-white hover:bg-blue-teal">
      <span className="font-bold">{title}</span>
      <IoMdClose className="text-blue-teal group-hover:text-white" />
    </button>
  );
};

export default FilterPill;
