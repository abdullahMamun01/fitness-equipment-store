import React, { useState } from "react";
import UploadInput from "./UploadInput";
import InputField from "@/dashboard/InputField";
import ControlledInput from "./ControlledInput";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
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
    discount: 0,
  }


import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { productSchema } from "@/zod/productSchmea";
const InventoryForm: React.FC = () => {


 
  const form = useForm<Product>({
    defaultValues:defaultValue ,
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
            label="Product Name"
            name="name"
            inputType="text"

            placeholder="Enter your product name"
          />
        </div>
        <div className="mb-4 col-span-2">
          <ControlledInput
            label="Product Description"
            name="description"
            inputType="text"
 
            placeholder="Enter your product description"
          />
        </div>
        <div className="mb-4 col-span-1">
          <ControlledInput
            label="Product category"
            name="category"
            inputType="text"
 
            placeholder="Enter your product description"
          />
        </div>

        <div className="mb-4 col-span-1">
          <ControlledInput
            label="Product price"
            name="price"
            inputType="string"
 
            placeholder="Enter your product description"
          />
        </div>

        <div className="mb-4 col-span-1">
          <ControlledInput
            label="Stock Quantity"
            name="stockQuantity"
            inputType="string"
 
            placeholder="Enter your product description"
          />
        </div>
        <div className="mb-4 col-span-1">
          <ControlledInput
            label="SKU"
            name="sku"
            inputType="string"
 
            placeholder="Enter your product description"
          />
        </div>
        <div className="mb-4 col-span-1">
          <ControlledInput
            label="Brand"
            name="brand"
            inputType="string"
            placeholder="Enter your product description"
          />
        </div>

        <div className="mb-4 col-span-2">
          <ControlledInput
            label="Product Tags"
            name="tags"
            inputType="string"
            placeholder="Enter your product description"
          />
        </div>
        <div className="mb-4 col-span-1">
            
          <ControlledInput
            label="Availability"
            name="availability"
            inputType="checkbox"

          />
        </div>
        <div className="mb-4 col-span-1">
          <ControlledInput
            label="Discount Price"
            name="discountPrice"
            inputType="string"
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
