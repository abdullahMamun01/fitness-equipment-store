import Sidebar from "@/components/common/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function ShopLayout() {
  return (
    <div className="grid grid-cols-4 container py-8 gap-8">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <Outlet />
      </div>
    </div>
  );
}
