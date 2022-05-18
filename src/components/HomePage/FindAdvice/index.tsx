import Container from "../../Container";
import React, { FC, Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "../../Header/LinkButton";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { Tab } from "@headlessui/react";
import ImageCard from "../../Shared/ImageCard";
import AdviceAndRealStoriesTabPannel from "./AdviceAndRealStoriesTabPannel";
import UnderlineLink from "../../Links/UnderlineLink";

const FindAdvice = () => {
  const tabs = ["Mental health", "Work & Study", "Relationships"];

  return (
    <Container>
      <div className="py-4">
        <div className="flex items-center justify-between border-b border-gray-light">
          <h2 className="py-2">Find advice & real stories</h2>
          <UnderlineLink href="#" chevronRight={true}>
            <div className="text-blue-teal font-bold">See all</div>
          </UnderlineLink>
        </div>
        <Tab.Group>
          <Tab.List className="py-2 border-b border-gray-light">
            {tabs.map((tab) => (
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`group px-2 lg:px-4 h-[25px] lg:h-[35px] rounded-[12px] ease ${
                      selected
                        ? "bg-blue-teal hover:bg-blue-teal"
                        : "hover:bg-yellow-main hover:text-white"
                    }`}
                  >
                    <div
                      className={`text-[14px] lg:text-[16px] ease group-hover:text-white ${
                        selected
                          ? "text-white font-bold"
                          : "text-blue-teal font-bold"
                      }`}
                    >
                      {tab}
                    </div>
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-4">
            {tabs.map((tab) => (
              <Tab.Panel>
                <AdviceAndRealStoriesTabPannel tag={tab} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Container>
  );
};

export default FindAdvice;
