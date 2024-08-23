import React, { useEffect, useRef, useState } from "react";
import ControlledInput from "./ControlledInput";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/zod/productSchmea";
import ImageUpload from "./ImageUpload";
import { toast } from "react-toastify";
import { useAddProductMutation, useSingleProductQuery, useUpdateProductMutation } from "@/redux/api/productsApi";
import { Spinner } from "../ui/spinner";
import { IProductMutate } from "@/redux/types";
import { useAppSelector } from "@/redux/hooks";
import { closeEditItem, selectEditItem } from "@/redux/features/edit/editProductSLice";
import { useDispatch } from "react-redux";

type TInventoryProps = {
  onClose: () => void;
};

const InventoryForm = ({ onClose }: TInventoryProps) => {
  const selectedId  = useAppSelector(state => selectEditItem(state))
  const {data ,isLoading : loading ,isSuccess ,status} = useSingleProductQuery(selectedId as string)
  const dispatch = useDispatch()
  const form = useForm<any>({
    resolver: zodResolver(productSchema),
  });

  const {reset} = form

  const [addProduct, { isLoading }] =
    useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation()
  const onSubmit = async (formData: IProductMutate) => {
    formData.stockStatus = "inStock";
    if(selectedId){
    
      await handleUpdateProduct(formData)
    }else{
      await handleAddProduct(formData)

    }
   
  };

  const handleAddProduct = async (formData :IProductMutate) => {
   
    try {
      const response = await addProduct(formData).unwrap();
      toast("product add successfully", { position: "top-right" });
      onClose()
    } catch (error) {
      if (error && typeof error === "object" && "data" in error) {
        const err = error as { data: { message: string } };

        toast.error(err.data.message || "An unexpected error occurred", {
          position: "top-right",
        });
      } else {
        toast.error("An unexpected error occurred", { position: "top-right" });
      }
    }
  }

  const handleUpdateProduct = async (formData:IProductMutate) => {
    const productId = selectedId as string
    try {
      const response = await updateProduct({productId, data:formData}).unwrap();
      toast("product update successfully", { position: "top-right" });

      dispatch(closeEditItem())
      onClose()
    } catch (error) {
      if (error && typeof error === "object" && "data" in error) {
        const err = error as { data: { message: string } };

        toast.error(err.data.message || "An unexpected error occurred", {
          position: "top-right",
        });
      } else {
        toast.error("An unexpected error occurred", { position: "top-right" });
      }
    }
  }

  useEffect(() => {
    if (isSuccess && data) {
      reset({
        name: data.name || '',
        description: data.description || '',
        category: data.category || '',
        price: data.price.toString() || '',
        stock: data.stock.toString() || '',
        sku: data.sku  || '',
        brand: data.brand || '',
        tags: data.tags.toString() || '',
        stockStatus: data.stockStatus || 'outOfStock',
        discountedPrice: data.discountedPrice.toString()  || '',
        img: data.img || '',
        images: data.images || [],
      });
    }
  }, [isSuccess, data, reset]);

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
          <ImageUpload />
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
            name="stock"
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
            name="stockStatus"
            labelColor="text-gray-400"
            inputType="text"
          />
        </div>
        <div className="mb-4 col-span-1">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            label="Discount Price"
            name="discountedPrice"
            inputType="string"
            labelColor="text-gray-400"
            placeholder="Enter your product discount price"
          />
        </div>
        {/* Add more fields as needed */}

        <button
          type="submit"
      
          className="w-full py-2 px-4 col-span-2 bg-secondary text-primary rounded-md focus:outline-none ">
          {isLoading ? (
            <Spinner size="small" className="text-primary" />
          ) : (
            <span>{selectedId ? 'Update Product' : 'Add Product'}</span>
          )}
        </button>
      </form>
    </FormProvider>
  );
};

export default InventoryForm;
