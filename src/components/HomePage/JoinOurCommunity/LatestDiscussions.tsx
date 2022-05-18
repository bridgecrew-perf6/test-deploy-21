import React, { useState, useEffect } from "react";
import axios from "axios";
import LeftCallOutTip from "../../CallOut/LeftCallOutTip";
import RightCallOutTip from "../../CallOut/RightCallOutTip";
import UnderlineLink from "../../Links/UnderlineLink";

const YourOpinions = () => {
  const [discussion, setDiscussion] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPoll = async () => {
    try {
      setLoading(true);

      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/forum-posts?phrase=a`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      setDiscussion(results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPoll();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : discussion && discussion.length ? (
        <div className="w-full lg:w-4/5 mx-auto pt-4">
          <div>
            <div className="flex items-center space-x-2 ml-4 -mb-2">
              <img
                src={discussion[0].firstUserPhotoUrl || "anonymous_avatar.png"}
                alt="anonymous"
                className="w-6 h-6 rounded-full"
              />
              <div className="text-[14px]">{discussion[0].firstUserName}</div>
            </div>
            <div>
              <div className="w-full lg:w-[378px] h-[110px] lg:h-[95px] rounded-[12px] bg-gray-bg p-3 z-20">
                <div className="font-bold py-2">{discussion[0].name}</div>

                <div className="flex items-center">
                  {discussion[0].body}...
                  <UnderlineLink href="#" className="text-gray-more">
                    <span className="text-gray-more"> more</span>
                  </UnderlineLink>
                </div>
              </div>
              <div className="pl-4 -mt-1 z-0">
                <LeftCallOutTip fill="#f2f5f8" />
              </div>
            </div>
            <div className="w-full lg:w-[378px] flex items-center justify-between ml-10 -mt-3">
              <div className="flex items-center space-x-1 cursor-pointer">
                <img src="hugs.png" alt="hugs" className="w-[17px]" />
                <div className="text-[14px]">Hugs</div>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <img src="give_advice.png" alt="advice" className="w-[17px]" />
                <div className="text-[14px]">Give advice</div>
              </div>
              <a
                className="text-[14px] cursor-pointer mr-12 text-gray-main"
                href={discussion[0].url}
                target="_blank"
              >
                View all {discussion[0].countComments} answers
              </a>
            </div>
          </div>

          <div className="py-2 w-full">
            <div className="float-right w-full lg:w-[90%]">
              <div className="flex items-center space-x-2 ml-4 -mb-2 z-10">
                <img
                  src={discussion[0].lastUserPhotoUrl || "yellow_star.png"}
                  alt="anonymous"
                  className="w-6 h-6 rounded-full"
                />
                <div className="text-[14px]">{discussion[0].lastUserName}</div>
              </div>
              <div>
                <div className="w-full h-[70px] rounded-[12px] bg-gray-bg p-3">
                  <div className="flex items-center space-x-1">
                    {discussion[0].firstResponse.body}
                    <span>{"... "}</span>
                    <UnderlineLink href="#" className="text-gray-more">
                      <span className="text-gray-more"> more</span>
                    </UnderlineLink>
                  </div>
                </div>
                <div className="-mt-1 z-0 flex justify-end mr-8">
                  <RightCallOutTip fill="#f2f5f8" />
                </div>
              </div>
              <div className="flex items-center space-x-4 ml-8 -mt-3 ">
                <div className="flex items-center space-x-2">
                  <img
                    src="up_arrow.png"
                    alt="up_arrow"
                    className="w-[17px] cursor-pointer"
                  />
                  <img
                    src="down_arrow.png"
                    alt="down_arrow"
                    className="w-[17px] cursor-pointer"
                  />
                  <div className="text-[14px]">Insightful</div>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <img src="thumbs_up.png" alt="advice" className="w-[17px] " />
                  <div className="text-[14px]">Agree</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No discussions found</div>
      )}
    </>
  );
};

export default YourOpinions;
