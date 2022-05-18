import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos } from "../../state/videos";
import VideoPlayer from "./VideoPlayer";

const VideoComponent = () => {
  const dispatch = useDispatch();

  const {
    videos: { videosLoading, videosError, videosData },
  } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  return (
    <div className="py-20">
      {videosLoading ? (
        <div>Loading...</div>
      ) : videosError ? (
        <div>Something went wrong {videosError}</div>
      ) : videosData && videosData.length ? (
        <div>
          <div className="flex items-center justify-between border-b border-gray-light">
            <h2 className="py-2">Highlight of the month</h2>
          </div>

          <div className="flex flex-col lg:flex-row w-full space-x-0 lg:space-x-8 space-y-4 lg:space-y-0 mt-4 shadow-lg rounded-[12px] border highlight-card">
            <div className="w-full lg:w-2/3 flex items-center bg-gray-100 rounded-l-[12px]">
              <VideoPlayer video={videosData[0]} />
            </div>
            <div className="w-full lg:w-1/3 h-[230px] lg:h-[474px] pr-8 pl-8 lg:pr-8 lg:pl-0 pt-0 lg:pt-[70px] text-gray-main">
              <div className="h-full">
                <div className="h-5/6 lg:h-5/6 overflow-hidden">
                  <a
                    href={videosData[0].video_url}
                    target="_blank"
                    className="text-[20px] lg:text-[26px] font-bold text-gray-main"
                  >
                    {videosData[0].video_title}
                  </a>
                  <div className="pt-1 lg:pt-6">
                    <a
                      href={videosData[0].video_url}
                      target="_blank"
                      className="text-[14px] lg:text-[16px] text-gray-main"
                    >
                      <ReactMarkdown>
                        {`${videosData[0].video_description.substring(
                          0,
                          300
                        )}...`}
                      </ReactMarkdown>
                    </a>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/channel/UC5GCxz2qQ4NtSAD5cUaHLjA"
                  target="_blank"
                  className="invisible lg:visible w-full h-[86px] flex justify-end items-center text-white font-bold pr-6 pt-1"
                >
                  Visit our YouTube channel
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No videos found</div>
      )}
    </div>
  );
};

export default VideoComponent;
