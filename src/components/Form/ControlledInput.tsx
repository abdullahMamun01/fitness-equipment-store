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
};

const ControlledInput: React.FC<ControlledInputProps> = ({
  inputType = "text",
  name,
  label,
  placeholder,
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
      <label className="block text-gray-300 mb-4">{label}</label>
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
              className={` "block py-4 px-3 w-full text-sm text-gray-400 tex-[5px] placeholder-gray-500 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-gray-300 rounded-lg"`}
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
