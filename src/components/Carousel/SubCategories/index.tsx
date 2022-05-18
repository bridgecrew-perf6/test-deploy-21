import React, { FC, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slick.css";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import Sub1 from "../../../../static/sub1.png";
import Sub2 from "../../../../static/sub2.png";
import Sub3 from "../../../../static/sub3.png";
import Sub4 from "../../../../static/sub4.png";
import Sub5 from "../../../../static/sub5.png";
import UnderlineLink from "../../Links/UnderlineLink";
import UnderLineHeading from "../../Common/Headings/UnderLineHeading";

const SubCategoryCard = ({ imageUrl, title }) => {
  return (
    <div className="cursor-pointer">
      <div className="flex flex-col items-center">
        <div className="border shadow-xl overflow-hidden rounded-[12px]">
          <img
            src={imageUrl}
            alt="partner"
            className={`object-cover w-full h-[134px] shadow-xl image-hover rounded-[12px]`}
          />
        </div>

        <div className="w-full font-bold text-[20px] pl-2 pt-[15px]">
          <div className="text-gray-main ease hover:text-blue-teal">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ handleNext }) => {
  return (
    <div
      className="block absolute top-[15%] right-0 mr-4 z-10 cursor-pointer opacity-50 hover:opacity-100"
      onClick={handleNext}
    >
      <div className="h-[70px] w-[35px] rounded-tr-full rounded-br-full border shadow bg-white flex items-center justify-center">
        <FaChevronRight className="text-blue-teal h-[20px]" />
      </div>
    </div>
  );
};

const PrevArrow = ({ handlePrev }) => {
  return (
    <div
      className="absolute block h-[134px] top-[15%] ml-4 z-10 cursor-pointer opacity-50 hover:opacity-100"
      onClick={handlePrev}
    >
      <div className="h-[70px] w-[35px] rounded-tl-full rounded-bl-full border shadow bg-white flex items-center justify-center">
        <FaChevronLeft className="text-blue-teal h-[20px]" />
      </div>
    </div>
  );
};

class SubCategories extends React.Component {
  slider: any;
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      dotsClass: "button__bar",
      arrows: true,
      nextArrow: <NextArrow handleNext={this.next} />,
      prevArrow: <PrevArrow handlePrev={this.previous} />,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
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
      <>
        <UnderLineHeading title="Money topics you may be interested in" />
        <div className="">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <SubCategoryCard imageUrl={Sub1} title="Benefits" />
            <SubCategoryCard imageUrl={Sub2} title="Credit and Debit" />
            <SubCategoryCard imageUrl={Sub3} title="Gambling" />
            <SubCategoryCard imageUrl={Sub4} title="Insurance" />
            <SubCategoryCard imageUrl={Sub5} title="Living on a budget" />
            <SubCategoryCard imageUrl={Sub4} title="Benefits" />
            <SubCategoryCard imageUrl={Sub1} title="Other" />
            <SubCategoryCard imageUrl={Sub2} title="Benefits" />
            <SubCategoryCard imageUrl={Sub1} title="Benefits" />
          </Slider>
        </div>
      </>
    );
  }
}

export default SubCategories;
