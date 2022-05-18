import React from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";

import ReactStars from "react-rating-stars-component";
import { StaticImage } from "gatsby-plugin-image";
import { useDispatch, useSelector } from "react-redux";
import { postUserRatings } from "../../../state/ratingForm";
import TextArea from "../../../emements/TextArea";
import { ImSpinner8 } from "@react-icons/all-files/im/ImSpinner8";

type FormValues = {
  score: number;
  reason: string;
};

interface IFeedbackFormProps {
  id: number;
  type: string;
}

const FeedbackForm = ({ id, type }: IFeedbackFormProps) => {
  const dispatch = useDispatch();

  const {
    ratingForm: { isPostRatingsLoading },
  } = useSelector((state: any) => state);

  const methods = useForm<FormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { score, reason } = data;
    dispatch(postUserRatings({ id, type, score, reason }));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="font-bold pl-2">How helpful were these results?</p>

        <Controller
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <ReactStars
              count={5}
              onChange={onChange}
              size={33}
              isHalf={false}
              char={
                <StaticImage
                  src="../../../../static/empty_star.png"
                  alt="Search icon"
                  placeholder="none"
                  className="pointer-events-none w-8 h-8"
                />
              }
              emptyIcon={
                <StaticImage
                  src="../../../../static/empty_star.png"
                  alt="Search icon"
                  placeholder="none"
                  className="pointer-events-none w-8 h-8"
                />
              }
              filledIcon={
                <StaticImage
                  src="../../../../static/filled_star.png"
                  alt="Search icon"
                  placeholder="none"
                  className="pointer-events-none w-8 h-8"
                />
              }
              activeColor="#ffd700"
              classNames={`flex space-x-[2px] ${
                isPostRatingsLoading ? "cursor-wait" : "cursor-pointer"
              }`}
            />
          )}
          name="score"
          control={control}
          rules={{ required: true }}
        />
        {errors.score?.type === "required" && (
          <span className="text-sm text-red-500">Score is required</span>
        )}

        <div className="border-b border-gray-light py-2 opacity-40"></div>

        <TextArea
          id="reason"
          name="reason"
          placeholder="Type your text here..."
          label="Why did you rate like that?"
          disabled={isPostRatingsLoading}
          validation={{
            required: "Reason for rating is required",
            minLength: {
              value: 15,
              message: "Reason should be at lease 15 characters long",
            },
          }}
        />
        <button
          className="bg-blue-teal text-white font-bold p-2 w-[136px] rounded-[12px] my-4"
          type="submit"
          disabled={isPostRatingsLoading}
        >
          {isPostRatingsLoading ? (
            <ImSpinner8 className="animate-spin m-auto" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </FormProvider>
  );
};

export default FeedbackForm;
