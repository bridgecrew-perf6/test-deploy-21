import React from "react";
import clsx from "clsx";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { AiFillExclamationCircle } from "@react-icons/all-files/ai/AiFillExclamationCircle";

export type TextAreaProps = {
  label?: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<"textarea">;

export default function TextArea({
  label,
  placeholder = "",
  helperText,
  id,
  readOnly = false,
  hideError = false,
  validation,
  ...rest
}: TextAreaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block font-bold pl-2 py-2">
          {label}
        </label>
      )}
      <div className="relative mt-1">
        <textarea
          {...register(id, validation)}
          rows={3}
          {...rest}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsx(
            errors[id]
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-light focus:border-blue-teal focus:ring-blue-teal shadow-xl",
            "block w-full rounded-[12px] shadow-2xl p-2"
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
      <div className="mt-1">
        {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
        {!hideError && errors[id] && (
          <span className="text-sm text-red-500">{errors[id].message}</span>
        )}
      </div>
    </div>
  );
}
