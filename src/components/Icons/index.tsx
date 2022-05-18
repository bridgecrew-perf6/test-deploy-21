import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import React from "react";
import AppsAndTools from "../../../static/icons/apps-and-tools.png";
import Campaigns from "../../../static/icons/campaigns.png";
import Articles from "../../../static/icons/articles.png";
import Videos from "../../../static/icons/videos.png";
import YouthVoices from "../../../static/icons/youth-voices.png";
import Volunteer from "../../../static/icons/volunteer.png";
import DiscussionBoards from "../../../static/icons/discussion-boards.png";
import LearnWithUs from "../../../static/icons/learn-with-us.png";
import OtherWebsites from "../../../static/icons/other-websites.png";
import LocalServices from "../../../static/icons/local-services.png";
import CrisisMessenger from "../../../static/icons/crisis-messenger.png";
import CommunitySupport from "../../../static/icons/community-support.png";
import Helpline from "../../../static/icons/helpline.png";
import Counselling from "../../../static/icons/counselling.png";
import Login from "../../../static/icons/login.png";
import Signup from "../../../static/icons/signup.png";
import UnderlineLink from "../Links/UnderlineLink";

const ResourcesCard = ({ image, bg, title }) => {
  return (
    <div className="flex items-center space-x-2 py-1">
      <div
        className={`flex items-center justify-center h-[30px] w-[30px] rounded-[10px] ${bg} overflow-hidden`}
      >
        <img
          src={image}
          alt="search"
          className="object-scale-down max-h-[19px] max-w-[19px] image-hover rounded-[10px]"
        />
      </div>
      <UnderlineLink href="#">
        <div className="font-bold text-blue-teal">{title}</div>
      </UnderlineLink>
    </div>
  );
};

const Icons = () => {
  const resources = [
    {
      bg: "bg-yellow-main",
      image: Campaigns,
      title: "Campaigns",
    },
    {
      bg: "bg-yellow-main",
      image: Articles,
      title: "Articles",
    },
    {
      bg: "bg-yellow-main",
      image: Videos,
      title: "Videos",
    },
    {
      bg: "bg-red-main",
      image: AppsAndTools,
      title: "Apps & Tools",
    },
    {
      bg: "bg-red-main",
      image: YouthVoices,
      title: "Youth Voices",
    },
    {
      bg: "bg-red-main",
      image: Volunteer,
      title: "Volunteer",
    },
    {
      bg: "bg-red-main",
      image: DiscussionBoards,
      title: "Discussion Boards",
    },
    {
      bg: "bg-red-main",
      image: LearnWithUs,
      title: "Learn with us",
    },
    {
      bg: "bg-blue-teal",
      image: OtherWebsites,
      title: "Other websites",
    },
    {
      bg: "bg-blue-teal",
      image: LocalServices,
      title: "Local services",
    },
    {
      bg: "bg-red-main",
      image: CrisisMessenger,
      title: "Crisis messenger",
    },
    {
      bg: "bg-red-main",
      image: CommunitySupport,
      title: "Community support",
    },
    {
      bg: "bg-yellow-main",
      image: Helpline,
      title: "Helpline",
    },
    {
      bg: "bg-blue-teal",
      image: Counselling,
      title: "Counselling",
    },
    {
      bg: "bg-red-main",
      image: Login,
      title: "Login",
    },
    {
      bg: "bg-yellow-main",
      image: Signup,
      title: "Signup",
    },
  ];
  return (
    <div className="max-w-sm">
      <h2 className="py-4">Icons</h2>
      {resources.map(({ bg, image, title }) => {
        return <ResourcesCard image={image} bg={bg} title={title} />;
      })}
    </div>
  );
};

export default Icons;
