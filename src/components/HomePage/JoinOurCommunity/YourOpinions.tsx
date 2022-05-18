import React, { useState, useEffect } from "react";
import axios from "axios";
import RightCallOutTip from "../../CallOut/RightCallOutTip";

const YourOpinions = () => {
  const [poll, setPoll] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPoll = async () => {
    try {
      setLoading(true);

      const {
        data: { results },
      } = await axios.get(
        `https://k4vlzf812h.execute-api.eu-west-2.amazonaws.com/dev/polls?phrase=test`,
        {
          headers: {
            "x-api-key": "5YOoy0Ky6m3IDsVOUdtfe93r7cEzzpHt6BKc2NvW",
          },
        }
      );

      setPoll(results);
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
        <div className="w-full lg:w-4/5 mx-auto pt-4">Loading...</div>
      ) : poll && poll.length ? (
        <div className="w-full lg:w-4/5 mx-auto pt-4">
          <div className="pb-2">
            <div className="rounded-[12px] h-[68px] bg-[#ED5A73] flex items-center z-20">
              <div className="px-8 text-white font-[18px] font-bold opacity-100">
                {poll[0].name}
              </div>
            </div>
            <div className="-mt-2 lg:-mt-1 z-0 flex justify-end mr-8">
              <RightCallOutTip fill="#ED5A73" />
            </div>
          </div>

          {poll[0].options.map(({ body }) => (
            <div className="h-[35px] bg-gray-bg flex items-center rounded-[12px] mb-2">
              <div className="px-6 flex items-center justify-between w-full">
                <div>{body}</div>
                <img
                  src="rounded_check.png"
                  alt="check"
                  className="h-[16px] w-[16px] cursor-pointer"
                />
              </div>
            </div>
          ))}

          <div className="h-[35px] flex items-center justify-between px-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <img src="hugs.png" alt="hugs" className="w-[17px]" />
                <div>{poll[0].countVotes}</div>
              </div>
              <div className="flex items-center space-x-1">
                <img src="give_advice.png" alt="advice" className="w-[17px]" />
                <div>{poll[0].countOptions}</div>
              </div>
            </div>
            <img src="bookmark.png" alt="advice" className="h-[14px] px-1" />
          </div>
        </div>
      ) : (
        <div>No poll found</div>
      )}
    </>
  );
};

export default YourOpinions;
