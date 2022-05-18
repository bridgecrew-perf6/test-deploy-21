import React from "react";
import RelatedCard from "./RelatedCard";

interface IRelatedYourStoriesCard {
  data: [];
}

const RelatedYourStoriesCard = ({ data }: IRelatedYourStoriesCard) => {
  return (
    <>
      {data && data.length ? (
        data.map(
          ({ title: { rendered }, featured_image_url, featured_image_alt }) => {
            return (
              <RelatedCard
                title={rendered}
                imageUrl={featured_image_url}
                imageAlt={featured_image_alt}
              />
            );
          }
        )
      ) : (
        <div>No related stories found</div>
      )}
    </>
  );
};

export default RelatedYourStoriesCard;
