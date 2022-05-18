import clsx from "clsx";
import * as React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { AiFillExclamationCircle } from "@react-icons/all-files/ai/AiFillExclamationCircle";

export type InputProps = {
  /** Input label */
  label?: string;
  /**
   * id to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  id: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  label,
  placeholder = "",
  helperText,
  id,
  type = "text",
  readOnly = false,
  hideError = false,
  validation,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-normal text-gray-600">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          {...register(id, validation)}
          {...rest}
          type={type}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsx(
            readOnly
              ? "cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0"
              : errors[id]
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-primary-500 focus:ring-primary-500",
            "block w-full shadow-sm rounded-[12px] h-[37px] px-3"
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        {!hideError && errors[id] && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <AiFillExclamationCircle className="text-xl text-red-500" />
          </div>
        )}
      </div>
      <div className="mt-0">
        {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
        {!hideError && errors[id] && (
          <span className="text-xs pl-3 mt-0 text-red-500">
            {errors[id].message}
          </span>
        )}
      </div>
    </div>
  );
}
