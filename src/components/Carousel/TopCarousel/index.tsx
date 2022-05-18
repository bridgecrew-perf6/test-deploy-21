import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slick.css";
import Container from "../../Container";

const TopCard = ({}) => {
  return (
    <div className="flex flex-col lg:relative rounded-[10px] h-[278px] lg:h-[356px] shadow">
      <img
        src="top_bg.png"
        className="h-[137px] lg:h-full w-full border-0 no-border object-cover rounded-[10px]"
      />
      <div className="block lg:hidden flex-1  p-4 top-card-mobile">
        <h2 className="pb-2 text-[26px] font-bold">We’re here to help you</h2>
        <div className="text-[16px]">
          We are here to help you take on any challenge you’re facing - from
          mental health to money, homelessness to finding a job, break-ups to
          drugs.
        </div>
      </div>
      <div className="invisible lg:visible absolute w-[378px] h-[190px] z-50 bg-white top-card p-6 group hover:shadow-xl">
        <h2 className="pb-2 ">We’re here to help you</h2>
        <div className="text-[18px]">
          We are here to help you take on any challenge you’re facing - from
          mental health to money, homelessness to finding a job, break-ups to
          drugs.
        </div>
      </div>
    </div>
  );
};

const TopCarousel: FC = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "button__bar",
    arrows: false,
  };

  return (
    <Container>
      <Slider {...settings}>
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
      </Slider>
    </Container>
  );
};

export default TopCarousel;
