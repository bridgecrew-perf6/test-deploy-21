import React from "react";
import TopicIcons from "./TopicIcons";
import TopicSmallIcons from "./TopicSmallIcons";

interface ILocalServicesCard {
  norg: string,
  distance: string,
  distance_unit: string,
  topics: [any];
  name: string;
  servicesOffered: string;
  targetgroup: string,
  url: string;
}
const LocalServicesCard = ({
  norg,
  distance,
  distance_unit,
  topics,
  name,
  servicesOffered,
  targetgroup,
  url,
}: ILocalServicesCard) => {
  const getDistance = (norg, distance, distance_unit) => {
    return (
      <>
        {
          norg === 0 &&
          <div>
            Distance: {distance?.toFixed(2)} {distance_unit}
          </div>
        }
        {
          norg === 1 &&
          <div className={'national-org'}>
            National organisation
          </div>
        }
      </>
    )
  }

  return (
    <div className="py-2">
      <a href={url} target="_blank">
        <div className="ml-2 shadow rounded-[12px] ">
          <div className="p-2">
            <div className="flex space-x-2">
              {topics && topics.length ? (
                <TopicIcons topic={topics[0]} dimentions="w-16 h-16" />
              ) : null}
              <div>
                <div className="font-bold text-[16px] lg:text-[18px] text-gray-main">
                  {name}
                </div>
                <p>{targetgroup}</p>
              </div>
            </div>
          </div>
          <div className="grid mt-3 grid-cols-2 gap-2 px-3 pb-3">
            {topics && topics.length
              ? topics.map((topic) => (
                <TopicSmallIcons topic={topic} />
              ))
              : null}
          </div>
          {/* <div className="text-black px-3 pb-2">
            {getDistance(norg, distance, distance_unit)}
          </div> */}
        </div>
      </a>
    </div>
  );
};

export default LocalServicesCard;
