import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slick.css";
import ProfileOne from "../../../../static/profile/profile-one.png";

const QuoteCard = ({ title, author }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="block lg:hidden w-[115px] h-[115px] rounded-full shadow border -mb-14 z-20 bg-white overflow-hidden">
        <img src={ProfileOne} alt="profile" className="image-hover" />
      </div>
      <div className="border shadow-xl rounded-[14px] w-full">
        <div className="h-[256px] lg:h-[273px] flex items-center justify-center space-x-10 rounded-[12px] quote-card-bg">
          <div className="hidden lg:block h-[187px] w-[187px] bg-white border shadow rounded-full overflow-hidden">
            <img src={ProfileOne} alt="profile" className="image-hover" />
          </div>
          <div>
            <div className="text-blue-teal text-[25px] lg:text-[35px] font-bold max-w-[274px] lg:max-w-[560px] pt-10">
              {title}
            </div>
            <div className="w-[274px] lg:w-[560px] flex justify-start p-4 text-gray-main font-light text-[12px] lg:text-[16px] pb-10">
              {author}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuoteCardSmall = ({ title, author }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[115px] h-[115px] rounded-full shadow border -mb-14 z-20 bg-white overflow-hidden">
        <img src={ProfileOne} alt="profile" className="image-hover" />
      </div>
      <div className="border shadow-xl rounded-[14px] w-full">
        <div className="h-[273px]  flex items-center justify-center space-x-10 rounded-[12px] quote-card-bg-small">
          <div>
            <div className="text-blue-teal text-[25px] font-bold max-w-[274px] pt-10">
              {title}
            </div>
            <div className="w-[274px] flex justify-start p-4 text-gray-main font-light text-[12px] pb-10">
              {author}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Quote: FC = () => {
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
    <div className="py-4 flex space-x-10">
      <div className="w-3/4 mt-14">
        <Slider {...settings}>
          <QuoteCard
            title="“No one is perfect, that’s why pencils have erasers”"
            author="- Wolfgang Riebe, speaker"
          />
          <QuoteCard
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
          <QuoteCard
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
          <QuoteCard
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
          <QuoteCard
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
        </Slider>
      </div>
      <div className="w-1/4">
        <Slider {...settings}>
          <QuoteCardSmall
            title="“No one is perfect, that’s why pencils have erasers”"
            author="- Wolfgang Riebe, speaker"
          />
          <QuoteCardSmall
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
          <QuoteCardSmall
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
          <QuoteCardSmall
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
          <QuoteCardSmall
            title="“75% of young people Involved with us feel better After 2 weeks”"
            author="- Nikki, The Mix Helpline Team Leader"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Quote;
