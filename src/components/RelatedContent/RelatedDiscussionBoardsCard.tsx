import React from "react";
import RelatedCard from "./RelatedCard";

interface IRelatedDiscussionBoardsCard {
  data: [];
}

const RelatedDiscussionBoardsCard = ({
  data,
}: IRelatedDiscussionBoardsCard) => {
  return (
    <>
      {data && data.length ? (
        data.map(({ name, firstUserPhotoUrl, url }) => {
          return (
            <a href={url} target="_blank">
              <div className="py-2">
                <div className="ml-2 shadow rounded-[12px] flex space-x-2 items-center group ease hover:bg-blue-teal hover:text-white">
                  <img
                    src={firstUserPhotoUrl}
                    alt={firstUserPhotoUrl}
                    className="h-[86px] w-[79px] rounded-l-[12px] object-cover"
                  />
                  <div className="font-bold text-[16px] lg:text-[18px] text-gray-main ease group-hover:text-white">
                    {name}
                  </div>
                </div>
              </div>
            </a>
          );
        })
      ) : (
        <div>No related stories found</div>
      )}
    </>
  );
};

export default RelatedDiscussionBoardsCard;
