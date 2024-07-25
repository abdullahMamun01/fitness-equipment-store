import React from "react";

export default function UploadInput() {
  return (
    <div className="mb-6 pt-4 col-span-2">
      <label className="mb-5 block text-xl font-semibold text-gray-300">
         Product Image
      </label>

      <div className="mb-8">
        <input type="file" name="file" id="file" className="sr-only" />
        <label
          htmlFor="file"
          className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
          <div>
            <span className="mb-2 block text-xl font-semibold text-gray-300">
              Drop files here
            </span>
            <span className="mb-2 block text-base font-medium text-[#6B7280]">
              Or
            </span>
            <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-gray-300">
              Browse
            </span>
          </div>
        </label>
      </div>
    </div>
  );
}
