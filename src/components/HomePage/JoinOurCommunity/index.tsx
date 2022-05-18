import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import React from "react";
import Container from "../../Container";
import LeftCallOutTip from "../../CallOut/LeftCallOutTip";
import RightCallOutTip from "../../CallOut/RightCallOutTip";
import YourOpinions from "./YourOpinions";
import LatestDiscussions from "./LatestDiscussions";
import UnderlineLink from "../../Links/UnderlineLink";

const JoinOurCommunity = () => {
  const choices = ["I want to stay home", "I'm not sure", "I can't wait"];
  return (
    <Container>
      <div className="join-our-community-bg ml-0 lg:-ml-10 mt-10"></div>
      <div className="py-4 flex flex-col lg:flex-row space-x-0 lg:space-x-16 space-y-2 lg:space-y-0">
        <div className="w-full">
          <div className="flex justify-between items-center border-b border-gray-light py-2 ">
            <h2 className="">Latest discussions</h2>
            <UnderlineLink href="#" chevronRight={true}>
              <div className="text-blue-teal font-bold">See all</div>
            </UnderlineLink>
          </div>

          <LatestDiscussions />
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center border-b border-gray-light py-2 ">
            <h2 className="">Your opinions</h2>
            <UnderlineLink href="#" chevronRight={true}>
              <div className="text-blue-teal font-bold">See all</div>
            </UnderlineLink>
          </div>
          <YourOpinions />
        </div>
      </div>
      <div className="w-full p-2 lg:p-4 cursor-pointer flex items-center justify-center">
        <UnderlineLink href="#" chevronRight={true}>
          <div className="font-bold text-blue-teal">
            Sign up or Sign in to comment
          </div>
        </UnderlineLink>
      </div>
    </Container>
  );
};

export default JoinOurCommunity;
