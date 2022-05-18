import React from "react";
import { Link } from "gatsby";
import slugify from "react-slugify";
interface IRelatedCard {
  title: string;
  imageUrl: string;
  imageAlt?: string;
}
const RelatedCard = ({ title, imageUrl, imageAlt = "icon" }: IRelatedCard) => {
  return (
    <Link to={`/article/${slugify(title)}`}>
      <div className="py-2">
        <div className="ml-2 shadow rounded-[12px] flex space-x-2 items-center ease group hover:bg-blue-teal hover:text-white">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-[86px] w-[79px] rounded-l-[12px] object-cover"
          />
          <div className="font-bold text-[16px] lg:text-[18px] text-gray-main ease group-hover:text-white">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RelatedCard;
