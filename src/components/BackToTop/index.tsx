import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";
import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import ScrollToTop from "react-scroll-to-top";

const BackToTop = () => {
  return (
    <ScrollToTop
      smooth
      component={
        <div className="flex justify-end">
          <button
            className="bg-gray-main flex items-center flex-col-reverse lg:flex-row rounded-[10px] h-[58px] lg:h-[35px] px-2 py-1 lg:py-0"
            onClick={() => scrollTo("#header")}
          >
            <div className="text-white font-bold pr-0 lg:pr-2 flex flex-col lg:flex-row items-center text-[12px] lg:text-[14px]">
              <div className="pr-0 lg:pr-1">Back</div>
              <div>to top</div>
            </div>
            <div className="flex justify-end lg:justify-start w-full lg:w-auto">
              <FaChevronUp className="text-white text-sm" />
            </div>
          </button>
        </div>
      }
    />
  );
};

export default BackToTop;
