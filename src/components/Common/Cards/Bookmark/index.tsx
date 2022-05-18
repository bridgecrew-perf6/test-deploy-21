import React from "react";
import { VscBookmark } from "@react-icons/all-files/vsc/VscBookmark";

const Bookmark = () => {
  return (
    <div className="badge border-none bg-red-main flex items-center p-1 rounded-[5px] cursor-pointer z-20 ease hover:bg-yellow-main">
      <VscBookmark className=" text-white" />
    </div>
  );
};

export default Bookmark;
