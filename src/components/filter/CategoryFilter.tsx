import { useCategoriesQuery, useProductsQuery } from "@/redux/api/productsApi";
import CategorySkeleton from "../common/skeleton/CategorySkeleton";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import useQueryParam from "@/hooks/useQueryParams";

export default function CategoryFilter() {
 
  const { getParamValue, updateQueryParam, queryParams } = useQueryParam({
    paramName: "category",
  });
  const categories = (getParamValue() as string[]) || [];
  const location = useLocation()

  const handleCategorySearchParams = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target;

      const params = checked
        ? [...categories, name]
        : categories.filter((cg) => cg != name);
        
      updateQueryParam(params);
    },
    [categories, queryParams]
  );

  const { data, isLoading } = useCategoriesQuery();

  if (isLoading) {
    return Array.from({ length: 10 }).map(
      (
        _,
        index // Render 10 skeletons
      ) => <CategorySkeleton key={index} />
    );
  }

  return (
    <div>
      <h3 className="text-xl text-[#a2db25] mb-3 uppercase font-medium">
        Categories
      </h3>
      <div className="space-y-2">
        {data?.map((category) => (
          <div key={category._id} className="flex items-center">
            <input
              type="checkbox"
              name={category.categoryName}
              id={`cat-${category._id}`} // Ensure unique IDs
              className={`w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded 
              }`}
              checked={categories.includes(category.categoryName)}
              onChange={handleCategorySearchParams}
            />
            <label
              htmlFor="cat-1"
              className="text-gray-600 ml-3 cusror-pointer">
              {category.categoryName}
            </label>
            <div className="ml-auto text-gray-600 text-sm">
              ({category.count})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
