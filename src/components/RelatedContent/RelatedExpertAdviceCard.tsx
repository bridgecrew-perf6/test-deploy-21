import React from "react";
import RelatedCard from "./RelatedCard";

interface IRelatedExpertAdviceCard {
  data: [];
}

const RelatedExpertAdviceCard = ({ data }: IRelatedExpertAdviceCard) => {
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
        <div>No related expert advice found</div>
      )}
    </>
  );
};

export default RelatedExpertAdviceCard;
