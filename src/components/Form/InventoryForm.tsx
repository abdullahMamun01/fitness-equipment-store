import React, { useState } from "react";
import ControlledInput from "./ControlledInput";
import { FormProvider, useForm } from "react-hook-form";

interface Product {
  name: string;
  description: string;
  category: string;
  price: number;
  stockQuantity: number;
  sku: string;
  brand: string;

  color: string;
  tags: string;
  availability: boolean;
  discount: number;
}
const defaultValue = {
  name: "",
  description: "",
  category: "",
  price: 0,
  stockQuantity: 0,
  sku: "",
  brand: "",
  color: "",
  tags: "",
  availability: false,
  image:'' ,
  discount: 0,
};

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { productSchema } from "@/zod/productSchmea";
import FileUpload from "./ImageUpload";
import ImageUpload from "./ImageUpload";
const InventoryForm: React.FC = () => {
  const form = useForm<Product>({
    defaultValues: defaultValue,
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form
        className="w-full mx-auto shadow-md rounded-md overflow-hidden my-14 grid grid-cols-2 gap-4"
        onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 col-span-2">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            label="Product Name"
            name="name"
            inputType="text"
            labelColor="text-gray-400"
            placeholder="Enter your product name"
          />
        </div>
        <div className="mb-4 col-span-2">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            label="Product Description"
            name="description"
            inputType="text"
            labelColor="text-gray-400"
            placeholder="Enter your product description"
          />
        </div>
        <div className="mb-4 col-span-2">
          <ImageUpload/>
        </div>
        <div className="mb-4 col-span-1">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            label="Product category"
            name="category"
            inputType="text"
            labelColor="text-gray-400"
            placeholder="Enter your product description"
          />
        </div>

        <div className="mb-4 col-span-1">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            label="Product price"
            name="price"
            inputType="string"
            labelColor="text-gray-400"
            placeholder="Enter your product description"
          />
        </div>

        <div className="mb-4 col-span-1">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            label="Stock Quantity"
            name="stockQuantity"
            inputType="string"
            labelColor="text-gray-400"
            placeholder="Enter your product description"
          />
        </div>
        <div className="mb-4 col-span-1">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            label="SKU"
            name="sku"
            inputType="string"
            labelColor="text-gray-400"
            placeholder="Enter your product description"
          />
        </div>
        <div className="mb-4 col-span-1">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            label="Brand"
            name="brand"
            inputType="string"
            labelColor="text-gray-400"
            placeholder="Enter your product description"
          />
        </div>

        <div className="mb-4 col-span-2">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            label="Product Tags"
            name="tags"
            inputType="string"
            labelColor="text-gray-400"
            placeholder="Enter your product description"
          />
        </div>
        <div className="mb-4 col-span-1">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            label="Availability"
            name="availability"
            labelColor="text-gray-400"
            inputType="checkbox"
          />
        </div>
        <div className="mb-4 col-span-1">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            label="Discount Price"
            name="discountPrice"
            inputType="string"
            labelColor="text-gray-400"
            placeholder="Enter your product discount price"
          />
        </div>
        {/* Add more fields as needed */}
        <button
          type="submit"
          className="w-full py-2 px-4 col-span-2 bg-secondary text-primary rounded-md focus:outline-none ">
          Add Product
        </button>
      </form>
    </FormProvider>
  );
};

export default InventoryForm;
