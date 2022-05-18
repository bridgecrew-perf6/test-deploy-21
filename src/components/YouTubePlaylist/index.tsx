import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlaylistItem from "./PlaylistItem";
import YouTubePlayer from "./YouTubePlayer";
import { fetchVideoPlaylist } from "../../state/videoPlaylist";
import UnderlineLink from "../Links/UnderlineLink";
const YouTubePlaylist = () => {
  const dispatch = useDispatch();

  const {
    videoPlaylist: {
      videoPlaylistLoading,
      videoPlaylistError,
      videoPlaylistData,
    },
  } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchVideoPlaylist());
  }, [dispatch]);

  return (
    <div className="py-20">
      {videoPlaylistLoading ? (
        <div>Loading...</div>
      ) : videoPlaylistError ? (
        <div>Something went wrong {videoPlaylistError}</div>
      ) : videoPlaylistData && videoPlaylistData.length ? (
        <div>
          <div className="flex items-center justify-between border-b border-gray-light">
            <h2 className="py-2">Learn by watching</h2>
            {/* <a
              href={videoPlaylistData[0].playlist_url}
              target="_blank"
              className="flex items-center cursor-pointer border-b border-transparent no-underline-link hover:border-b hover:border-blue-teal"
            >
              <div className="text-blue-teal font-bold pr-1 text-[14px] lg:text-[16px]">
                Visit our {videoPlaylistData[0].playlist_title} playlist
              </div> 
              <FaChevronRight className="text-blue-teal text-sm" />
            </a> */}
            <UnderlineLink href={videoPlaylistData[0].playlist_url}>
              <div className="flex items-center space-x-2">
                <div className="text-blue-teal font-bold pr-1 text-[14px] lg:text-[16px]">
                  Visit our {videoPlaylistData[0].playlist_title} playlist
                </div>
                <FaChevronRight className="text-blue-teal text-sm" />
              </div>
            </UnderlineLink>
          </div>

          <div className="flex flex-col lg:flex-row w-full space-x-0 lg:space-x-8 space-y-4 lg:space-y-0 pt-4">
            <div className="w-full lg:w-2/3 flex items-center justify-center bg-gray-100">
              <YouTubePlayer />
            </div>
            <div className="w-full lg:w-1/3 aspect-video h-[200px] lg:h-[474px] custom-scroll overflow-y-scroll">
              <div className="pr-4">
                {videoPlaylistData[0].videos.map((video) => {
                  return <PlaylistItem video={video} />;
                })}
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

export default YouTubePlaylist;
