import React, { useEffect } from "react";
import Input from "../../../emements/Input";

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

const SecondForm = () => {
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
    // const { comment } = data;
    // const { id, token } = isPostRatingsData;
    // dispatch(postUserFeedback({ id, token, comment }));
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Input
            placeholder="Name*"
            name="name"
            id="name"
            validation={{
              required: "Name is required",
            }}
          />
          <Input
            placeholder="Surname*"
            name="surname"
            id="surname"
            validation={{
              required: "Surname is required",
            }}
          />
          <Input
            placeholder="Email Address*"
            name="email"
            id="email"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            }}
          />
          <Input
            placeholder="Where did you hear about us*"
            name="where"
            id="where"
            validation={{
              required: "This field is required",
            }}
          />
          <Input placeholder="When were you born" name="dob" id="dob" />

          <button
            className="bg-blue-teal text-white font-bold w-full h-[37px] rounded-[12px]"
            type="submit"
            disabled={isPostFeedbackLoading}
          >
            {isPostFeedbackLoading ? (
              <ImSpinner8 className="animate-spin m-auto" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SecondForm;
