import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';


const ProductDetailSkeleton: React.FC = () => {
  return (
    <section className="md:container pt-12 pb-24 bg-white overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-14 md:mb-24">
          {/* Image Placeholder */}
          <div className="w-full bg-gray-100 lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="relative w-full ml-auto mb-16">
              <div className="w-full h-full mx-auto overflow-hidden bg-gray-100 p-4 rounded-3xl">
                <Skeleton className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Content Placeholder */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="mb-4 h-8 bg-gray-300 rounded animate-pulse"></div>
            <div className="flex items-start mb-8">
              <div className="flex items-center text-2xl text-gray-300 font-heading font-medium animate-pulse">
                <div className="mr-2 text-xl bg-gray-300 rounded w-10 h-6"></div>
                <div className="bg-gray-300 rounded w-20 h-6"></div>
              </div>
              <div className="ml-4 text-gray-300 font-heading font-medium line-through bg-gray-300 rounded w-20 h-6 animate-pulse"></div>
            </div>
            <div className="mb-8 text-base leading-7 text-gray-300 bg-gray-100 p-4 rounded animate-pulse">
              <div className="h-4 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="mb-8">
              <h4 className="mb-3 font-heading font-medium bg-gray-300 rounded w-24 h-6 animate-pulse"></h4>
              <div className="w-24 px-3 py-2 bg-gray-100 border-2 border-gray-300 rounded-xl animate-pulse">
                <div className="h-6 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="flex flex-wrap mb-8 md:mb-12">
              <div className="w-full sm:w-1/2 px-3 mb-4 sm:mb-0">
                <label className="block mb-2 text-sm font-medium text-gray-300 bg-gray-100 rounded h-6 animate-pulse"></label>
                <div className="relative">
                  <select className="appearance-none block w-full px-4 py-3 text-sm leading-4 font-semibold text-gray-400 bg-gray-100 border border-gray-300 rounded-md animate-pulse">
                    <option className="bg-gray-200 h-4"></option>
                    <option className="bg-gray-200 h-4"></option>
                    <option className="bg-gray-200 h-4"></option>
                  </select>
                </div>
              </div>
              <div className="w-full sm:w-1/2 px-3 mb-4 sm:mb-0">
                <label className="block mb-2 text-sm font-medium text-gray-300 bg-gray-100 rounded h-6 animate-pulse"></label>
                <div className="relative">
                  <select className="appearance-none block w-full px-4 py-3 text-sm leading-4 font-semibold text-gray-400 bg-gray-100 border border-gray-300 rounded-md animate-pulse">
                    <option className="bg-gray-200 h-4"></option>
                    <option className="bg-gray-200 h-4"></option>
                    <option className="bg-gray-200 h-4"></option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mb-12">
              <div className="w-full sm:w-[200px] mr-3 mb-4 bg-gray-300 rounded h-12 animate-pulse"></div>
              <div className="w-full sm:w-[200px] px-2 py-4 leading-5 bg-gray-300 rounded h-12 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSkeleton;
