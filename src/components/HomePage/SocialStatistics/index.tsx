import { StaticImage } from "gatsby-plugin-image";
import React, { FC, ReactNode } from "react";
import Container from "../../Container";
import FBCard from "../../../../static/card-fb.svg";
import InstagramCard from "../../../../static/card-instagram.svg";
import LinkedInCard from "../../../../static/card-linkedin.svg";
import TwitterCard from "../../../../static/card-twitter.svg";
import SocialCardImage from "../../../../static/card-social.svg";

interface ISocialCard {
  title: string;
  description: string;
  image: ReactNode;
  href: string;
}
const SocialCard: FC<ISocialCard> = ({ title, description, image, href }) => {
  return (
    <a href={href} target="_blank" className="text-gray-main">
      <div className="flex items-center justify-between px-6 lg:px-0 py-2 lg:py-0 lg:block">
        <div className="max-w-[108px] max-h-[76px] lg:max-h-[134px] lg:max-w-[192px] cursor-pointer ">
          {image}
        </div>

        <div className="font-bold text-[18px] lg:text-[20px] pt-0 lg:pt-2 ease group hover:text-blue-teal">
          <div>{title}</div>
          <div>{description}</div>
        </div>
      </div>
    </a>
  );
};

const SocialStatistics: FC = () => {
  return (
    <Container>
      <div className="block lg:flex justify-between z-0 py-6 lg:py-10">
        <SocialCard
          image={
            <img
              src={InstagramCard}
              alt="yt stats"
              className="object-contain rounded-[12px] image-hover "
            />
          }
          title="Watch with our"
          description="12.4K subscribers"
          href="https://www.instagram.com/themixuk/"
        />

        <SocialCard
          image={
            <img
              src={FBCard}
              alt="yt stats"
              className="object-contain rounded-[12px] image-hover "
            />
          }
          title="Watch with our"
          description="12.4K subscribers"
          href="https://www.facebook.com/TheMixUK"
        />

        <SocialCard
          image={
            <img
              src={SocialCardImage}
              alt="yt stats"
              className="object-contain rounded-[12px] image-hover "
            />
          }
          title="Watch with our"
          description="12.4K subscribers"
          href="https://www.youtube.com/themixuk"
        />

        <SocialCard
          image={
            <img
              src={TwitterCard}
              alt="yt stats"
              className="object-contain rounded-[12px] image-hover "
            />
          }
          title="Watch with our"
          description="12.4K subscribers"
          href="https://twitter.com/themixUK"
        />

        <SocialCard
          image={
            <img
              src={LinkedInCard}
              alt="yt stats"
              className="object-contain rounded-[12px] image-hover "
            />
          }
          title="Watch with our"
          description="12.4K subscribers"
          href="https://www.linkedin.com/company/the-mix-charity"
        />
      </div>
    </Container>
  );
};

export default SocialStatistics;
