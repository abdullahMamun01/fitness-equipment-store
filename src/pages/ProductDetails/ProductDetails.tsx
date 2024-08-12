import ProductDetailSkeleton from "@/components/common/skeleton/ProductDetailSkeleton";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import imageUrlParser from "@/lib/imageUrlParser";
import { useSingleProductQuery } from "@/redux/api/productsApi";
import { Heart, ShoppingBagIcon } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductImageViewer from "./ProductImageViewer";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, isLoading } = useSingleProductQuery(productId as string);
  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  return (
    <section className="md:container pt-12 pb-24 bg-white overflow-hidden">
      
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-14 md:mb-24">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="relative w-full ml-auto mb-16">
              {data && <ProductImageViewer images={data?.images} />}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <h1 className="mb-4 text-primary text-2xl font-heading font-medium">
              {data?.name}
            </h1>
            <p className="flex items-start mb-8">
              <span className="flex items-center text-2xl text-secondary font-heading font-medium">
                <span className=" text-xl">$</span>
                <span>{data?.price}</span>
              </span>
              <span className="ml-4 text-gray-300 font-heading font-medium line-through">
                ${data?.discountedPrice}
              </span>
            </p>
            <p className="mb-8 text-base leading-7 text-gray-500">
              {data?.description}
            </p>
            <div className="mb-8">
              <h4 className="mb-3 font-heading font-medium">Qty:</h4>
              <input
                className="w-24 px-3 py-2 text-center bg-white border-2 border-secondary outline-none focus:ring-primary focus:ring-opacity-50 rounded-xl"
                type="text"
                placeholder="1"
              />
            </div>
            <div className="flex flex-wrap mb-8 md:mb-12">
              <div className="w-full sm:w-1/2 px-3 mb-4 sm:mb-0">
                <label className="block mb-2 text-sm font-medium text-primary">
                  Color
                </label>
                <div className="relative">
                  <select className="appearance-none block w-full px-4 py-3 text-sm leading-4 font-semibold text-gray-400 bg-white border border-gray-100 rounded-md">
                    <option>{data?.color}</option>
                  
                  </select>
                  <svg
                    className="absolute top-1/2 transform -translate-y-1/2 right-3 pointer-events-none"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-4 sm:mb-0">
                <label className="block mb-2 text-sm font-medium text-primary">
                  Memory Storage
                </label>
                <div className="relative">
                  <select className="appearance-none block w-full px-4 py-3 text-sm leading-4 font-semibold text-gray-400 bg-white border border-gray-100 rounded-md">
                    <option>128GB</option>
                    <option>256GB</option>
                    <option>512GB</option>
                  </select>
                  <svg
                    className="absolute top-1/2 transform -translate-y-1/2 right-3 pointer-events-none"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mb-12">
              <Button className="w-full sm:w-[200px] mr-3 mb-4 bg-secondary hover:bg-secondary text-primary py-4 leading-5">
                <ShoppingBagIcon className="text-primary mr-3" /> Add to Bag
              </Button>
              <Button className="w-full sm:w-[200px] px-2 py-4 leading-5">
                <Heart className="text-secondary mr-3" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductDetails;
