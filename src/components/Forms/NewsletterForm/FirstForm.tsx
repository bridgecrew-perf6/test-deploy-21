import clsx from "clsx";
import * as React from "react";
import { useForm } from "react-hook-form";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { useDispatch } from "react-redux";
import { setUserEmail } from "../../../state/newsletter";

export default function FirstForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => dispatch(setUserEmail(data.email));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" w-full md:w-[418px] mx-auto">
        <div className="relative mt-1 h-[37px]">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            name="email"
            id="email"
            className={clsx(
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
              "block w-full shadow-sm h-full rounded-[12px] pl-4"
            )}
            placeholder="Enter your address"
          />

          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer "
          >
            <FaChevronRight className="text-blue-teal " />
          </button>
        </div>
        <div className="mt-1 pl-4">
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
      </div>
    </form>
  );
}
