import React from "react";
import LocalServicesCard from "./LocalServicesCard";

interface IRelatedLocalServicesCard {
  data: [];
}

const RelatedLocalServicesCard = ({ data }: IRelatedLocalServicesCard) => {
  return (
    <>
      {data && data.length ? (
        data.map(({ norg, distance, distance_unit, serviceoffered, topic_names_array, name, targetgroup, url }) => {
          return (
            <LocalServicesCard
              norg={norg}
              distance={distance}
              distance_unit={distance_unit}
              topics={topic_names_array}
              name={name}
              servicesOffered={serviceoffered}
              targetgroup={targetgroup}
              url={url}
            />
          );
        })
      ) : (
        <div>No local services found</div>
      )}
    </>
  );
};

export default RelatedLocalServicesCard;
