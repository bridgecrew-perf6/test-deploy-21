import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import FeedbackForm from "../Forms/FeedbackForm";
import PositiveFeedbackForm from "../Forms/FeedbackForm/PositiveFeedbackForm";
import NegativeFeedbackForm from "../Forms/FeedbackForm/NegativeFeedbackForm";
import { useSelector, useDispatch } from "react-redux";
import {
  openNegativeSlide,
  openPositiveSlide,
  openFirstSlide,
} from "../../state/ratingForm";

interface IFeedbackProps {
  id: number;
  type: string;
}

const Feedback = ({ id, type }: IFeedbackProps) => {
  const dispatch = useDispatch();

  const {
    ratingForm: {
      isFirstSlideOpen,
      isPositiveSlideOpen,
      isNegativeSlideOpen,
      formData: { score },
    },
  } = useSelector((state: any) => state);

  let info: JSX.Element;
  let form: JSX.Element;

  if (isFirstSlideOpen) {
    info = (
      <div>
        <h4>Hello [name], we’d like to make this page better for you!</h4>
        <p className="py-2">Would you be happy to give us some feedback?</p>
      </div>
    );
    form = <FeedbackForm id={id} type={type} />;
  } else if (isPositiveSlideOpen) {
    info = <h2>Thanks so much for your feedback!</h2>;
    form = <PositiveFeedbackForm />;
  } else if (isNegativeSlideOpen) {
    info = <h2>Thanks so much for your feedback!</h2>;
    form = <NegativeFeedbackForm />;
  } else {
    info = <h2>Something went wrong</h2>;
    form = null;
  }

  useEffect(() => {
    if (score === 0) {
      dispatch(openFirstSlide());
    } else if (score < 3) {
      dispatch(openNegativeSlide());
    } else {
      dispatch(openPositiveSlide());
    }
  }, [dispatch, score]);

  return (
    <>
      <div className="mb-8 mt-20">
        <div className="flex flex-col lg:flex-row rounded-[12px] shadow border">
          <div className="w-full lg:w-1/4 feedback-bg min-h-[455px] lg:min-h-[341px] lg:max-h-[341px]">
            <div className="flex justify-center">
              <div className="shadow rounded-full h-32 w-32 -mt-16 bg-white flex items-center justify-center">
                <StaticImage
                  src="../../../static/feedback.png"
                  alt="Search icon"
                  placeholder="none"
                  className="pointer-events-none w-24 h-24"
                />
              </div>
            </div>
            <div className="w-4/5 lg:w-3/5 mx-auto pt-4 lg:pt-10">{info}</div>

            {/* Mobile feedback form */}
            <div className="visible lg:invisible w-4/5 mx-auto pt-4 lg:pt-10">
              {form}
            </div>
          </div>
          <div className="w-full lg:w-3/4 invisible lg:visible">
            {/* Desktop feedback form */}
            <div className="hidden lg:block px-10 my-6">{form}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
