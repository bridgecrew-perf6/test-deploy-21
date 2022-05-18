import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModals } from "../../state/modals";
import PlainModal from "./PlainModal";
import YouTube from "react-youtube";

const VideoPlayer = ({ video_id }) => {
  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <YouTube
      videoId={video_id}
      onReady={onReady}
      containerClassName="relative w-full pt-[56.25%]"
      className="absolute inset-0 h-full w-full rounded-[12px]"
    />
  );
};

const VideoOverlay = () => {
  const dispatch = useDispatch();

  const {
    modals: { isVideoOverlayOpen, activeVideoId },
  } = useSelector((state: any) => state);

  return (
    <PlainModal
      content={<VideoPlayer video_id={activeVideoId} />}
      openModal={isVideoOverlayOpen}
      closeModal={() => dispatch(closeModals())}
      widths="w-full md:w-3/4 lg:w-1/2"
    />
  );
};

export default VideoOverlay;
