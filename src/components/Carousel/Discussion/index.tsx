import React, { FC, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slick.css";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

import "./custom.css";
import { connect } from "react-redux";
import { fetchForumPosts } from "../../../state/forumPosts";
import DiscussionCard from "./DiscussionCard";
import UnderLineHeading from "../../Common/Headings/UnderLineHeading";
import UnderlineLink from "../../Links/UnderlineLink";

const bgImageClasses = [
  "dis-card-one",
  "dis-card-two",
  "dis-card-three",
  "dis-card-four",
  "dis-card-five",
];

const NextArrow = ({ handleNext }) => {
  return (
    <div
      className="block absolute top-[30%] right-0 mr-4 z-10 cursor-pointer opacity-50 hover:opacity-100"
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
      className="absolute block h-[134px] top-[30%] ml-4 z-10 cursor-pointer opacity-50 hover:opacity-100"
      onClick={handlePrev}
    >
      <div className="h-[70px] w-[35px] rounded-tl-full rounded-bl-full border shadow bg-white flex items-center justify-center">
        <FaChevronLeft className="text-blue-teal h-[20px]" />
      </div>
    </div>
  );
};

class Discussion extends React.Component<any, any> {
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

  componentDidMount() {
    this.props.fetchForumPosts();
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
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    return (
      <>
        <UnderLineHeading
          title="What your peers are discussing"
          rightComponent={
            <UnderlineLink href="#">
              <div>View all our Money discussion boards</div>
            </UnderlineLink>
          }
          className="mb-4"
        />
        {this.props.forumPostsLoading ? (
          <div>Loading...</div>
        ) : this.props.forumPostsData && this.props.forumPostsData.length ? (
          <div className="">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {this.props.forumPostsData.map(
                ({
                  url,
                  name,
                  countComments,
                  lastUserName,
                  firstUserPhotoUrl,
                }) => {
                  const rand =
                    bgImageClasses[(Math.random() * bgImageClasses.length) | 0];
                  return (
                    <DiscussionCard
                      bgImageClass={rand}
                      imageUrl={firstUserPhotoUrl}
                      title={name}
                      comments={countComments}
                      starredBy={lastUserName}
                      url={url}
                    />
                  );
                }
              )}
            </Slider>
          </div>
        ) : (
          <div>Could not fetch</div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  forumPostsLoading: state.forumPosts.forumPostsLoading,
  forumPostsData: state.forumPosts.forumPostsData,
});

export default connect(mapStateToProps, { fetchForumPosts })(Discussion);
