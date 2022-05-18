import React from "react";
import Badge from "../Badge";
import StarRating from "../../StarRating";
import CommentCount from "../../CommentCount";
import slugify from "react-slugify";
import { Router, Link } from "@reach/router";
import Bookmark from "../Bookmark";

const ArticleResultCard = ({ title, image, commentCount, type }) => {
  const slug = slugify(title);

  return (
    <>
      <Link to={`/article/${slug}`}>
        <div className="rounded-[12px] shadow-xl bg-white flex flex-col h-[250px] ">
          <div className="w-full h-1/2 overflow-hidden rounded-t-[12px]">
            <img
              src={image}
              alt="featured"
              className="overflow-hidden h-full w-full object-cover hover:cursor-pointer image-hover rounded-t-[12px]"
            />
          </div>
          <div className="group py-2 px-4 h-1/2 overflow-hidden overlay-wrapper">
            <div className="card-overlay rounded-b-[12px]"></div>
            <div className="flex items-center justify-between">
              <Badge title={type} />
              <Bookmark />
            </div>
            <h4 className="pt-4">{title}</h4>
          </div>
        </div>
        <div className="pt-2 flex items-center space-x-4">
          <StarRating />
          <CommentCount count={commentCount} />
        </div>
      </Link>
    </>
  );
};

export default ArticleResultCard;
