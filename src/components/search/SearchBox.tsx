import useDebounce from "@/hooks/useDebounce";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchBox() {
  const navigation = useNavigate()
  const location = useLocation()
  const [debouncedValue ,debounceCB] = useDebounce<string>(1000);
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    debounceCB(event.target.value);
    console.log(debouncedValue , 'search');
  };
  
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if(debouncedValue){
        params.set('search' , debouncedValue)
        navigation({search: params.toString()})
    }else {
        params.delete('search')
        navigation({search: params.toString()})
    }
    
  } , [location.search ,navigation, debouncedValue])
  
  return (
    <div>
      <input
        onChange={handleSearch}
        type="search"
        id="default-search"
        className="block max-sm:my-4 w-full p-3.5 ps-10 text-sm text-gray-900 border border-primary placeholder:font-semibold  rounded-lg bg-gray-50 0"
        placeholder="Search products"
        required
      />
    </div>
  );
}
