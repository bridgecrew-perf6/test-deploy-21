import React from "react";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";

const VideoPlayer = ({ video }) => {
  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <YouTube
      videoId={video.video_id}
      onReady={onReady}
      containerClassName="relative w-full pt-[56.25%]"
      className="absolute inset-0 h-full w-full rounded-t-[12px] lg:rounded-t-none rounded-l-none lg:rounded-l-[12px] rounded-tl-[12px]"
    />
  );
};

export default VideoPlayer;
