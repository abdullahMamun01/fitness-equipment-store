import Sidebar from "@/components/common/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function ShopLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:container py-8 gap-8">
      <div className="col-span-1 md:col-span-1 w-full h-full">
        <Sidebar />
      </div>
      <div className="col-span-1 md:col-span-3">
        <Outlet />
      </div>
    </div>
  );
}
