import classNames from "classnames";
import React from "react";
import {
  Control,
  Controller,
  FieldValue,
  useFormContext,
} from "react-hook-form";

type ControlledInputProps = {
  inputType?: string;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
};

const ControlledInput: React.FC<ControlledInputProps> = ({
  inputType = "text",
  name,
  label,
  placeholder,
  className = undefined,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const getErrorMessage = (error: any) => {
    if (error && typeof error.message === "string") {
      return error.message;
    }
    return null;
  };

  return (
    <>
      <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue="" // Ensure the input is controlled from the start
        render={({ field }) =>
          inputType === "checkBox" ? (
            <input type="checkbox" className="" name={name} id="" />
          ) : (
            <input
              type={inputType}
              className={classNames(``, className)}
              placeholder={placeholder}
              {...field}
            />
          )
        }
      />
      {errors[name] && (
        <div className="text-red-600 pt-4">{getErrorMessage(errors[name])}</div>
      )}
    </>
  );
};

export default ControlledInput;
