import React, { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SortByPrice() {
    const [sorting ,setSorting ] = useState('')
    const location = useLocation()
  const navigate = useNavigate()
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const params = new URLSearchParams(location.search)
      const order = event.target.value;
      params.set('order' ,order)

      navigate({
        pathname: '', // You can provide a specific pathname here if needed
        search: params.toString(),
      });
    }

  return (
    <div>
      <form className="max-w-sm mx-auto my-5">
        <label
          htmlFor="order"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Sort By Price
        </label>
        <select
          id="order"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected value='asc'>Default</option>
          <option value="asc">Low to Hight</option>
          <option value="desc">High to Low</option>
        </select>
      </form>
    </div>
  );
}
