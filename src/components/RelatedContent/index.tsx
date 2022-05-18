import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import RelatedContentDisclosure from "./RelatedContentDisclosure";
import { fetchRelatedContent } from "../../state/relatedContent";
import RelatedExpertAdviceCard from "./RelatedExpertAdviceCard";
import RelatedYourStoriesCard from "./RelatedYourStoriesCard";
import RelatedVideosCard from "./RelatedVideosCard";
import RelatedDiscussionBoardsCard from "./RelatedDiscussionBoardsCard";
import RelatedLocalServicesCard from "./RelatedLocalServicesCard";
import RelatedContentLoader from "./RelatedContentLoader";

const RelatedContent = ({ title }) => {
  const dispatch = useDispatch();

  const {
    relatedContent: {
      relatedContentLoading,
      relatedContentData,
      relatedContentError,
    },
  } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchRelatedContent(title));
  }, [dispatch]);

  return (
    <div className="mt-8 rounded-[12px] shadow">
      <div className="related-content-bg p-4 font-bold text-white text-[20px]">
        Related Content
      </div>
      {relatedContentLoading ? (
        <RelatedContentLoader />
      ) : relatedContentError ? (
        <div>Something went wrong {relatedContentError}</div>
      ) : relatedContentData ? (
        <>
          <RelatedContentDisclosure
            title="Expert advice"
            icon="articles.png"
            subMenus={
              <RelatedExpertAdviceCard
                data={relatedContentData.expert_advice}
              />
            }
            bg="bg-yellow-main"
          />
          <RelatedContentDisclosure
            title="Your stories"
            icon="articles.png"
            subMenus={
              <RelatedYourStoriesCard data={relatedContentData.your_stories} />
            }
            bg="bg-yellow-main"
          />
          <RelatedContentDisclosure
            title="Videos"
            icon="play_icon.png"
            subMenus={<RelatedVideosCard data={relatedContentData.videos} />}
            bg="bg-yellow-main"
          />
          <RelatedContentDisclosure
            title="Discussion boards"
            icon="discussion_icon.png"
            subMenus={
              <RelatedDiscussionBoardsCard
                data={relatedContentData.forum_posts}
              />
            }
            bg="bg-red-main"
          />
          <RelatedContentDisclosure
            title="Local services"
            icon="local_services.png"
            subMenus={
              <RelatedLocalServicesCard
                data={relatedContentData.localservices}
              />
            }
            bg="bg-blue-teal"
          />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </div>
  );
};

export default RelatedContent;
