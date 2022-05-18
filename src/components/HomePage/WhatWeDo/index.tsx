import Container from "../../Container";
import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "../../Header/LinkButton";
import ImageCard from "../../Shared/ImageCard";
import SideImageCard from "../../Shared/SideImageCard";

const WhatWeDo = () => {
  return (
    <Container>
      <div className="py-4">
        <h2 className="border-b border-gray-light py-2">What we do</h2>
        <div className="flex flex-col lg:flex-row mt-4 space-x-0 lg:space-x-16 space-y-2 lg:space-y-0">
          <div className="w-full lg:w-1/2 h-[257px] lg:h-[304px]">
            <ImageCard
              title="About us"
              description="We’re a diverse bunch, with a wealth of experience and varied backgrounds. Our working ethos is based on respect, challenge and nice coffee."
              imageUrl="about_us_what_we_do.png"
              imageDimentions="h-[134px] lg:h-[174px]"
            />
          </div>
          <div className="w-full lg:w-1/2 h-[full] lg:h-[304px]">
            <div className="flex flex-col lg:flex-row h-full space-x-0 lg:space-x-8 space-y-4 lg:space-y-0">
              <SideImageCard
                title="Campaigns"
                description="The Mix & Student Space launch a new campaign to support students with exam stress."
                imageUrl="campaigns.png"
                imageDimentions="h-[85px] lg:h-[85px]"
              />
              <SideImageCard
                title="Research"
                description="Data trends and research on the most up-to-date issues impacting young people."
                imageUrl="research.png"
                imageDimentions="h-[85px] lg:h-[85px]"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhatWeDo;
