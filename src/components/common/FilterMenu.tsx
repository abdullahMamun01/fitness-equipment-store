import React, { useCallback } from "react";
import CategoryFilter from "../filter/CategoryFilter";
import SortByPrice from "../filter/SortByPrice";
import PriceFilterAction from "../filter/PriceFilterAction";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../search/SearchBox";

export default function FilterMenu() {
  const navigate = useNavigate();
  const handleClear = useCallback(() => {
    const url = new URLSearchParams();
    navigate("/shop");
  }, []);
  return (
    <>
        <SearchBox />
      <CategoryFilter />
      <SortByPrice />
      <PriceFilterAction />
      <div className="">
        <Button onClick={handleClear} className="bg-primary my-5 w-full">
          <X className="mr-2 w-5 h-5 text-red-500" /> Clear filtering
        </Button>
      </div>
    </>
  );
}
