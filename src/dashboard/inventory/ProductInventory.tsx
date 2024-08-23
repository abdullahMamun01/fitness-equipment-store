import InventoryModal from "@/components/Form/InventoryModal";
import { Button } from "@/components/ui/button";

import { Home, Plus } from "lucide-react";

import InventoryList from "./InventoryList";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductInventory() {


  return (
    <div className="px-6">
      <div>
        <h1 className="text-[24px] text-gray-300 font-bold my-6">
          Product List
        </h1>
      </div>
      <div>
        <Link className="text-lg text-blue-600 flex gap-2 my-4" to='/'><Home/> Go To Home </Link>
      </div>
      <div className="h-[66px]  bg-primary flex justify-between items-center px-6">
        <h1 className="text-[20px] text-gray-300">Product</h1>
        <InventoryModal/>
      </div>
      <div className=" bg-primary flex justify-between items-center px-6 my-4">
        <InventoryList />
      </div>
    </div>
  );
}
