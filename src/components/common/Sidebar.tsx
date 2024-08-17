import React from "react";
import CategoryFilter from "../filter/CategoryFilter";
import PriceFilterAction from "../filter/PriceFilterAction";
import Filter from "../filter/Filter";

export default function Sidebar() {
  return (
    <div>
      <div className="max-sm:hidden divide-y divide-gray-200 space-y-5">
        <CategoryFilter />
        <PriceFilterAction />
      </div>
      <div className="md:hidden">
        <Filter/>
      </div>
    </div>
  );
}
