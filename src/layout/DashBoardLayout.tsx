import DashboardNav from "@/dashboard/DashboardNav";
import Dashboard from "@/pages/dashboard/Dashboard";
import { Outlet } from "react-router-dom";

export default function DashBoardLayout() {
  return (
    <div className="flex gap-0 bg-[#101010]">
      <div>
        <Dashboard />
      </div>
      <div className="w-full">
        <DashboardNav />
        <Outlet />
      </div>
    </div>
  );
}
