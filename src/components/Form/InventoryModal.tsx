import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import InventoryForm from "./InventoryForm";

export default function InventoryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Button
        onClick={handleOpen}
        className="bg-secondary hover:bg-secondary text-primary px-8 py-6 text-semibold">
        <Plus className="mr-2" /> Add product
      </Button>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="sm:max-w-[625px] bg-primary overflow-y-scroll  max-h-screen">
          <DialogHeader>
            <DialogTitle className="text-gray-300 mb-0 p-0">
              Product Management
            </DialogTitle>
          </DialogHeader>
          <InventoryForm onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
}
