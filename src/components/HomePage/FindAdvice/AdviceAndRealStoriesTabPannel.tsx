import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageCard from "../../Shared/ImageCard";
import {
  fetchAdviceAndRealStoriesVideo,
  fetchAdviceAndRealStories,
} from "../../../state/adviceAndRealStories";
import ArticleResultCard from "../../Common/Cards/ArticleResultCard";
import VideoArticleCard from "../../Common/Cards/VideoArticleCard";

const AdviceAndRealStoriesTabPannel = ({ tag }) => {
  const dispatch = useDispatch();

  const {
    adviceAndRealStories: {
      adviceAndRealStoriesLoading,
      adviceAndRealStoriesData,
      adviceAndRealStoriesError,

      adviceAndRealStoriesVideoLoading,
      adviceAndRealStoriesVideoError,
      adviceAndRealStoriesVideo,
    },
  } = useSelector((state: any) => state);

  const {
    video_url,
    video_title,
    video_description,
    thumbnails,
    tags,
    date_published,
    view_count,
    like_count,
  } = adviceAndRealStoriesVideo;

  useEffect(() => {
    dispatch(fetchAdviceAndRealStoriesVideo(tag));
    dispatch(fetchAdviceAndRealStories(tag));
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-16 space-y-2 lg:space-y-0">
        <div className="w-full h-[280px] lg:h-[522px] mb-10 lg:mb-0">
          {adviceAndRealStoriesVideoLoading ? (
            <div>Loading...</div>
          ) : adviceAndRealStoriesVideo ? (
            <VideoArticleCard
              title={video_title}
              description={video_description}
              image={thumbnails}
              targetUrl={video_url}
            />
          ) : (
            <div>No video</div>
          )}
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-12">
          {adviceAndRealStoriesLoading ? (
            <div>Loading...</div>
          ) : adviceAndRealStoriesData ? (
            adviceAndRealStoriesData.map(
              ({ title: { rendered }, featured_image_url }) => {
                return (
                  <div className="h-[236px]">
                    <ArticleResultCard
                      title={rendered}
                      image={featured_image_url}
                      commentCount={1}
                      type="Expert advice"
                    />
                  </div>
                );
              }
            )
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdviceAndRealStoriesTabPannel;
