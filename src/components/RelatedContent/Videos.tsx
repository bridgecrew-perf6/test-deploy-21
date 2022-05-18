import React, { useState, useEffect } from "react";
import axios from "axios";

const Videos = ({ title }) => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async () => {
    try {
      setLoading(true);

      const {
        data: {
          results: { videos },
        },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/related-content?categories=707&title=${title}`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      setRelated(videos);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : related && related.length ? (
        related.map(({ video_title, thumbnails }) => (
          <div className="py-2">
            <div className="ml-2 shadow rounded-[12px] flex space-x-2 items-center">
              <img
                src={thumbnails.medium.url}
                alt="img"
                className="h-[86px] w-[79px] rounded-l-[12px] object-cover"
              />
              <div className="font-bold text-[16px] lg:text-[18px] text-gray-main">
                {video_title}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No related articles found</p>
      )}
    </>
  );
};

export default Videos;
