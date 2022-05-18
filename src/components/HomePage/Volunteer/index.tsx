import Container from "../../Container";
import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "../../Header/LinkButton";
import ImageCard from "../../Shared/ImageCard";
import SideImageCard from "../../Shared/SideImageCard";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import UnderlineLink from "../../Links/UnderlineLink";

export const EventCard = () => {
  return (
    <div className="shadow h-[106px] lg:h-[114px] rounded-[12px] flex items-center justify-between group ease cursor-pointer hover:shadow-xl">
      <div className="min-w-[72px] lg:min-w-[157px] h-full overflow-hidden rounded-l-[12px]">
        <img
          src="help_1.png"
          alt="help"
          className="object-cover h-full w-[72px] lg:w-[157px] image-hover rounded-l-[12px]"
        />
      </div>
      <div className="flex items-center h-full w-full ease hover:bg-blue-teal hover:text-white rounded-r-[12px]">
        <div className="pl-2 lg:pl-4">
          <div className="font-bold text-[18px] py-0 lg:py-2">Events</div>
          <div className="text-[14px] lg:text-[16px]">
            Support over two million young people that use our service each
            year. We have events for beginners to hardened pros.
          </div>
        </div>
        <div className="pr-2 lg:pr-4 flex items-start">
          <FaChevronRight className="text-blue-teal cursor-pointer ease group-hover:text-white" />
        </div>
      </div>
    </div>
  );
};

const Volunteer = () => {
  return (
    <Container>
      <div className="py-4">
        <div className="flex flex-col lg:flex-row mt-4 space-x-0 lg:space-x-16 space-y-2 lg:space-y-0">
          <div className="w-full">
            <h2 className="border-b border-gray-light py-2">Get involved</h2>
            <div className="w-full h-[257px] lg:h-[387px] my-4">
              <ImageCard
                title="Volunteer at The Mix"
                description="The Mix is an organisation powered by young people, and we need more people like you to help us shape our future."
                imageUrl="volunteers.png"
                imageDimentions="h-[134px] lg:h-[273px]"
                tipRight={true}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between border-b border-gray-light">
              <h2 className="py-2">Other ways to help</h2>
              <UnderlineLink href="#" chevronRight={true}>
                <div className="text-blue-teal font-bold">See all</div>
              </UnderlineLink>
            </div>

            <div className="h-full lg:h-[387px] flex flex-col space-y-2 justify-between mt-4">
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Volunteer;
