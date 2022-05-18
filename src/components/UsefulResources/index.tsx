import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import React from "react";
import Eye from "../../../static/resources/eye.png";
import Share from "../../../static/resources/share.png";
import UnstyledLink from "../Links/unstyledLink";

const ResourcesCard = ({ image, bg, title }) => {
  return (
    <UnstyledLink href="#">
      <div className="shadow h-[52px] rounded-[12px] flex justify-between mb-4 cursor-pointer bg-white ease group hover:bg-blue-teal hover:text-white">
        <div className="flex items-center">
          <div
            className={`flex items-center justify-center h-full w-[52px] rounded-[12px] ${bg} ease group-hover:bg-blue-teal`}
          >
            <img src={image} alt="search" className="w-[37px]" />
          </div>
          <div className="pl-2 lg:pl-4 font-bold text-gray-main ease group-hover:text-white">
            {title}
          </div>
        </div>
        <div className="pr-2 lg:pr-4 flex items-start my-auto">
          <FaChevronRight className="text-blue-teal cursor-pointer w-5 h-5 ease group-hover:text-white" />
        </div>
      </div>
    </UnstyledLink>
  );
};

const UsefulResources = () => {
  const resources = [
    {
      bg: "bg-yellow-main",
      image: Eye,
      title: "A financial guide to COVID-19",
    },
    {
      bg: "bg-yellow-main",
      image: Eye,
      title: "Making the most of your money",
    },
    {
      bg: "bg-yellow-main",
      image: Eye,
      title: "What is National Insurance?",
    },
    {
      bg: "bg-yellow-main",
      image: Eye,
      title: "What is Universal Credit?",
    },
    {
      bg: "bg-yellow-main",
      image: Eye,
      title: "The cost of being a student",
    },
    {
      bg: "bg-yellow-main",
      image: Eye,
      title: "Understanding overdrafts",
    },
    {
      bg: "bg-blue-teal",
      image: Share,
      title: "Find out about National Numeracy Day",
    },
    {
      bg: "bg-blue-teal",
      image: Share,
      title: "MyBnk Savings Reminders",
    },
  ];
  return (
    <div className="max-w-sm">
      <h2 className="py-4">Useful resources</h2>
      {resources.map(({ bg, image, title }) => {
        return <ResourcesCard image={image} bg={bg} title={title} />;
      })}
    </div>
  );
};

export default UsefulResources;
