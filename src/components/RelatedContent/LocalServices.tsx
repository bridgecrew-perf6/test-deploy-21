import React, { useState, useEffect } from "react";
import axios from "axios";
import TopicIcons from "./TopicIcons";
import TopicSmallIcons from "./TopicSmallIcons";

const LocalServices = ({ title }) => {
  const [loading, setLoading] = useState(false);
  const [lServices, setLServices] = useState([]);

  console.log("********* l services: ", lServices);

  const fetchArticles = async () => {
    try {
      setLoading(true);

      const {
        data: {
          results: { articles, localservices },
        },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/related-content?categories=707&title=${title}`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      setLServices(localservices);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const getDistance = (norg, distance, distance_unit) => {
    return (
      <>
        {
          norg === 0 &&
          <div>
            Distance: {distance.toFixed(2)} {distance_unit}
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
    <>
      {loading ? (
        <p>Loading...</p>
      ) : lServices && lServices.length ? (
        lServices.map(({ name, norg, distance, distance_unit, serviceoffered, topic_names_array }) => (
          <div className="py-2">
            <div className="ml-2 shadow rounded-[12px] ">
              <div className="p-2">
                <div className="flex space-x-2">
                  {topic_names_array && topic_names_array.length ? (
                    <TopicIcons
                      topic={topic_names_array[0]}
                      dimentions="w-16 h-16"
                    />
                  ) : null}
                  <div>
                    <div className="font-bold text-[16px] lg:text-[18px] text-gray-main">
                      {name}
                    </div>
                    <p>{serviceoffered.substring(0, 100)}...</p>
                  </div>
                </div>
              </div>
              <div className="p-2 flex items-center space-x-2">
                {topic_names_array && topic_names_array.length
                  ? topic_names_array.map((topic) => (
                    <TopicSmallIcons topic={topic} />
                  ))
                  : null}
              </div>
              <div className="tmct-article-footer">
                {getDistance(norg, distance, distance_unit)}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No local services found</p>
      )}
    </>
  );
};

export default LocalServices;
