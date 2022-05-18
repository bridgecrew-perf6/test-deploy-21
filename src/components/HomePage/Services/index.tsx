import React from "react";
import Container from "../../Container";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import UnderlineLink from "../../Links/UnderlineLink";

const ServiceCard = ({ icon, description, title, bg }) => {
  return (
    <div className="ease w-full cursor-pointer group">
      <div className="flex rounded-[12px] p-2 shadow-xl justify-between items-center min-h-[60px] lg:min-h-[140px] bg-white ease hover:bg-blue-teal">
        <div className="border border-transparent">
          <div className="flex flex-row lg:flex-col w-full">
            <div
              className={`w-[37px] h-[37px] p-[6px] flex items-center rounded-[6px] py-4 ${bg} ease group-hover:bg-blue-teal`}
            >
              <img src={icon} alt="help" />
            </div>

            <div className="pl-2 lg:pl-0 w-full">
              <div className="font-bold text-[16px] lg:text-[18px] py-0 lg:py-2 ease group-hover:text-white">
                {title}
              </div>
              <div className="text-[14px] lg:text-[16px] ease group-hover:text-white">
                {description}
              </div>
            </div>
          </div>
        </div>
        <FaChevronRight className="text-blue-teal ease group-hover:text-white" />
      </div>
    </div>
  );
};

const Services = () => {
  const servicesOptions = [
    {
      icon: "icon_1.png",
      title: "Crisis messenger",
      description: "Free messenger services open 24/7",
      bg: "bg-red-main",
    },
    {
      icon: "icon_2.png",
      title: "Online peer support",
      description: "Discussion boards & Group chat",
      bg: "bg-red-main",
    },
    {
      icon: "icon_3.png",
      title: "Helpline",
      description:
        "Webchat, email and freephone open every day from 3pm - 12am",
      bg: "bg-yellow-400",
    },
    {
      icon: "icon_4.png",
      title: "Counselling",
      description: "Book your confidential session with one of our team today",
      bg: "bg-blue-teal",
    },
  ];
  return (
    <Container>
      <div className="flex justify-between flex-col lg:flex-row space-x-0 space-y-2 lg:space-x-4 lg:space-y-0">
        {servicesOptions.map(({ title, description, icon, bg }) => {
          return (
            <ServiceCard
              title={title}
              description={description}
              icon={icon}
              bg={bg}
            />
          );
        })}
      </div>
      <div className="w-full p-2 lg:p-4 flex items-center justify-center">
        <UnderlineLink href="#" chevronRight={true}>
          <div className="font-bold text-blue-teal">
            <span>See all our services</span>
          </div>
        </UnderlineLink>
      </div>
    </Container>
  );
};

export default Services;
