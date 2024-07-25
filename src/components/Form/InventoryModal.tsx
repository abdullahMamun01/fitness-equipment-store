import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import InventoryForm from "./InventoryForm";

export default function InventoryModal() {
  return (
    <>
      <DialogContent className="sm:max-w-[625px] bg-primary overflow-y-scroll  max-h-screen">
        
        <DialogHeader>
          <DialogTitle className="text-gray-300 mb-0 p-0">Product Management</DialogTitle>
         
        </DialogHeader>
        <InventoryForm/>
      
      </DialogContent>
    </>
  );
}
