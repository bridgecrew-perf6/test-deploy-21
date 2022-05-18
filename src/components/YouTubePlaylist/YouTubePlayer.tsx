import React from "react";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";

const YouTubePlayer = () => {
  const onReady = (event) => {
    event.target.pauseVideo();
  };

  const {
    videoPlaylist: {
      activeVideo: { id },
    },
  } = useSelector((state: any) => state);

  return (
    <YouTube
      videoId={id}
      onReady={onReady}
      containerClassName="relative w-full pt-[56.25%]"
      className="absolute inset-0 h-full w-full"
    />
  );
};

export default YouTubePlayer;
