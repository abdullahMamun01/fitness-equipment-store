import React from "react";
import CategoryFilter from "../filter/CategoryFilter";
import PriceFilterAction from "../filter/PriceFilterAction";

export default function Sidebar() {
  return (
    <div className="divide-y divide-gray-200 space-y-5">
      <CategoryFilter />
      <PriceFilterAction />
    </div>
  );
}
