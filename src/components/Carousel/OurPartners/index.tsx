import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slick.css";
import Container from "../../Container";

const PartnerCard = ({ imageUrl, dimentions = "p-2" }) => {
  return (
    <div className="border shadow w-[97px] h-[68px] lg:h-[94px] lg:w-[134px] rounded-[12px] flex items-center justify-center cursor-pointer overflow-hidden">
      <img
        src={imageUrl}
        alt="partner"
        className={`object-contain ${dimentions} image-hover`}
      />
    </div>
  );
};

const OurPartners: FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    dotsClass: "button__bar",
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Container>
      <h2 className="py-4">Our partners</h2>
      <div className="">
        <Slider {...settings}>
          <PartnerCard imageUrl="partner_1.png" />
          <PartnerCard imageUrl="partner_2.png" dimentions="h-[64px]" />
          <PartnerCard imageUrl="partner_3.png" />
          <PartnerCard
            imageUrl="partner_4.png"
            dimentions="w-[64px] h-[64px]"
          />
          <PartnerCard imageUrl="partner_5.png" />
          <PartnerCard imageUrl="partner_6.png" dimentions="h-[60px]" />
          <PartnerCard imageUrl="partner_7.png" />
          <PartnerCard imageUrl="partner_2.png" dimentions="h-[64px]" />
          <PartnerCard imageUrl="partner_1.png" />
        </Slider>
      </div>
    </Container>
  );
};

export default OurPartners;
