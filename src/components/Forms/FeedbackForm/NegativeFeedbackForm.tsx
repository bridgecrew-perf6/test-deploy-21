import React, { useEffect } from "react";
import TextArea from "../../../emements/TextArea";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ImSpinner8 } from "@react-icons/all-files/im/ImSpinner8";
import { postUserFeedback } from "../../../state/ratingForm";
import { ToastContainer, toast } from "react-toastify";

type FormValues = {
  comment: string;
};

const NegativeFeedbackForm = () => {
  const dispatch = useDispatch();

  const {
    ratingForm: {
      isPostFeedbackLoading,
      isPostRatingsData,
      isPostFeedbackError,
    },
  } = useSelector((state: any) => state);

  const methods = useForm<FormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { comment } = data;
    const { id, token } = isPostRatingsData;

    dispatch(postUserFeedback({ id, token, comment }));
  };

  useEffect(() => {
    if (isPostFeedbackError) {
      toast.error(isPostFeedbackError, {
        toastId: "isPostFeedbackError",
      });
    }
  }, [isPostFeedbackError]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="pl-2">We’re sorry you didn’t find the results helpful!</p>
        <div className="border-b border-gray-light py-1.5 opacity-40"></div>
        <p className="font-bold pl-2 my-2">
          Would you like to refine your search?
        </p>
        <button className="bg-blue-teal text-white font-bold p-2 w-full lg:w-1/3 rounded-[12px]">
          Take me to the search filter
        </button>
        <div className="border-b border-gray-light py-1.5 opacity-40"></div>
        <p className="pl-2 py-1.5">
          If you have already refined your search and it’s still unhelpful…
        </p>
        <p className="font-bold pl-2 my-1.5">
          Would you like to let us know how could we improve it?
        </p>
        <TextArea
          id="comment"
          name="comment"
          placeholder="Type your text here..."
          label="Why did you rate like that?"
          disabled={isPostFeedbackLoading}
          validation={{
            required: "Feedback for rating is required",
            minLength: {
              value: 15,
              message: "Feedback should be at lease 15 characters long",
            },
          }}
        />

        <button
          className="bg-blue-teal text-white font-bold p-2 w-[136px] rounded-[12px] my-4"
          type="submit"
          disabled={isPostFeedbackLoading}
        >
          {isPostFeedbackLoading ? (
            <ImSpinner8 className="animate-spin m-auto" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </FormProvider>
  );
};

export default NegativeFeedbackForm;
