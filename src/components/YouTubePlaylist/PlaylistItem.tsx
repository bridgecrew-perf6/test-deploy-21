import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveVideo } from "../../state/videoPlaylist";
interface IPlaylistItem {
  video: any;
}

const PlaylistItem = ({ video }: IPlaylistItem) => {
  const dispatch = useDispatch();

  const {
    videoPlaylist: { activeVideo },
  } = useSelector((state: any) => state);

  const { id, title, thumbnails } = video;

  return (
    <div
      className="mix-card shadow-lg h-[96px] w-full rounded-[12px] flex mb-4 cursor-pointer"
      onClick={() => dispatch(setActiveVideo(video))}
    >
      <img
        className="flex-1 object-cover rounded-l-[12px]"
        src={thumbnails.high.url}
      />
      <div
        className={`flex-1 font-bold flex items-center rounded-r-[12px] ${
          id === activeVideo.id ? "bg-blue-teal text-white" : "bg-white"
        }`}
      >
        <div className="px-4">{title}</div>
      </div>
    </div>
  );
};

export default PlaylistItem;
