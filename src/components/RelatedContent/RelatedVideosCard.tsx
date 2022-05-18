import React from "react";
import { useDispatch } from "react-redux";
import { openVideoOverlay } from "../../state/modals";
import VideoCard from "./VideoCard";

interface IRelatedVideosCard {
  data: [];
}

const RelatedVideosCard = ({ data }: IRelatedVideosCard) => {
  const dispatch = useDispatch();

  return (
    <>
      {data && data.length ? (
        data.map(({ video_id, video_title, thumbnails }) => {
          return (
            <VideoCard
              title={video_title}
              thumbnails={thumbnails}
              handleClick={() => dispatch(openVideoOverlay(video_id))}
            />
          );
        })
      ) : (
        <div>No related videos found</div>
      )}
    </>
  );
};

export default RelatedVideosCard;
