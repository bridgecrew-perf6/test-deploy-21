import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slick.css";
import Container from "../../Container";
import UnderlineLink from "../../Links/UnderlineLink";

const StatisticCard = ({ title, author }) => {
  return (
    <div className="border shadow rounded-[14px]">
      <div className="h-[256px] lg:h-[273px] flex flex-col items-center justify-center rounded-[12px] statistics-card-bg">
        <div className="text-red-main text-[25px] lg:text-[35px] font-bold max-w-[274px] lg:max-w-[560px] pt-10">
          {title}
        </div>
        <div className="w-[274px] lg:w-[560px] flex justify-end p-4 text-gray-main font-light text-[12px] lg:text-[16px] pb-10">
          {author}
        </div>
      </div>
    </div>
  );
};

const Statistics: FC = () => {
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
      <div className="py-4">
        <Slider {...settings}>
          <StatisticCard
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
          <StatisticCard
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
          <StatisticCard
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
          <StatisticCard
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
          <StatisticCard
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
        </Slider>
      </div>
    </Container>
  );
};

export default Statistics;
