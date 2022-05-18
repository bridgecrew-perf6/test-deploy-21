import React from "react";
import CommentIcon from "./icons/comment.png";

const CommentCount = ({ count }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <img src={CommentIcon} alt="Comments" className="w-[16px] h-[14px]" />
      <span>{CommentCount}</span>
    </div>
  );
};

export default CommentCount;
