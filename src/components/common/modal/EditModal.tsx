import InventoryForm from "@/components/Form/InventoryForm";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { closeEditItem,selectIsEditMode } from "@/redux/features/edit/editProductSLice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

type TEditProps = {
  children: ReactNode;
};

export default function EditModal({ children }: TEditProps) {

  const [isOpen ,setIsOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  
  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])


  return (
    <Dialog open={isOpen}  onOpenChange={setIsOpen}>
 
      <DialogTrigger asChild>
        {children }
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-primary overflow-y-scroll  max-h-screen">

        <DialogHeader>
          <DialogTitle className="text-gray-300 mb-0 p-0">
          <button className="text-white " onClick={handleClose}>X</button>
            Product Management
          </DialogTitle>
        </DialogHeader>
        <InventoryForm onClose={handleClose} />
      </DialogContent>
    </Dialog>

  );
}
