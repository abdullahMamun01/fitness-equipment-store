import { useImageUploadMutation } from "@/redux/api/imageApi";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { toast } from "react-toastify";

const ImageUpload = () => {
    const {control ,setValue, formState : {errors}} = useFormContext()
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageUpload] = useImageUploadMutation()

    const handleImageChange = async (file: FileList | null) => {
        
        if (file && file.length > 0) {
          const formData = new FormData()
          formData.append('image' , file[0])

          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result as string);
          };
          reader.readAsDataURL(file[0]);

          try {
            const response = await imageUpload(formData).unwrap()
            toast.success('image upload successfully' , {position: 'top-right'})
          } catch (error) {
            const err = error as Error
            toast.error(err.message , {position: 'top-right'})
          }



        }
      };

      const getErrorMessage = (error: any) => {
        if (error && typeof error.message === "string") {
          return error.message;
        }
        return null;
      };

  return (
    <Controller
      name="image"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <div
          className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-400 rounded-lg bg-gray-800 text-center"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            field.onChange(e.dataTransfer.files);
            handleImageChange(e.dataTransfer.files);
          }}>
          <label
            htmlFor="imageUpload"
            className="cursor-pointer flex flex-col items-center">
            <div className="bg-blue-600 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7v14"
                />
              </svg>
            </div>
            <div className="text-blue-500 mt-4">
              Click to upload a file or drag and drop
            </div>
            <div className="text-gray-400 mt-1">
              PNG, JPG, GIF or up to 10MB
            </div>
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            name="image"
            multiple
            onChange={(e) => {
              field.onChange(e.target.files);
              handleImageChange(e.target.files);
            }}
            // {...field.onChange}
            className="hidden"
          />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          )}

        {errors['image'] && (
        <div className="text-red-600 pt-4">{getErrorMessage(errors['image'])}</div>
      )}
        </div>
      )}
    />
  );
};

export default ImageUpload;
