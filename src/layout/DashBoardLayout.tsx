import DashboardNav from "@/dashboard/DashboardNav";
import Dashboard from "@/pages/dashboard/Dashboard";
import { Outlet } from "react-router-dom";

export default function DashBoardLayout() {
  return (
    <div className="flex bg-[#101010] relative">
      <div className="fixed w-64 h-full ">
        <Dashboard />
      </div>
      <div className="ml-64 w-full">
        <DashboardNav />
        <Outlet />
      </div>
    </div>
  );
}
