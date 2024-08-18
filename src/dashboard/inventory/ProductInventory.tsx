
import InventoryModal from "@/components/Form/InventoryModal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

import InventoryList from "./InventoryList";

export default function ProductInventory() {
  return (
    <div className="px-6">
      <div>
        <h1 className="text-[24px] text-gray-300 font-bold my-6">
          Product List
        </h1>
      </div>
      <div className="h-[66px]  bg-primary flex justify-between items-center px-6">
        <h1 className="text-[20px] text-gray-300">Product</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-secondary hover:bg-secondary text-primary px-8 py-6 text-semibold">
              {" "}
              <Plus className="mr-2" /> Add product
            </Button>
          </DialogTrigger>
          <InventoryModal />
        </Dialog>
      </div>
      <div className=" bg-primary flex justify-between items-center px-6 my-4">
        <InventoryList/>
        
      </div>
    </div>
  );
}
