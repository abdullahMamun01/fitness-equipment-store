
import { Edit, Trash } from "lucide-react";
import imageUrlParser from "@/lib/imageUrlParser";
import DeleteConfirmModal from "@/components/common/modal/DeleteConfirmModal";
import EditModal from "@/components/common/modal/EditModal";
import { useAppDispatch } from "@/redux/hooks";
import { onEditItem } from "@/redux/features/edit/editProductSLice";
import { useCallback } from "react";
type InventoryProps = {
  name: string;
  price: number;
  stock: number;
  id: string;
  image:string 
};

export default function Inventory({ id, name, price, stock ,image}: InventoryProps) {
  const inStock = stock === 0 ? "stock out" : "in stock";

  const productInfo = {
    id ,
    name
  }

const dispatch  = useAppDispatch()
  const handleEdit = useCallback(() => {
    
    dispatch(onEditItem(id))
  },[])

  return (
    <div className="grid grid-cols-12 text-secondary items-center gap-4 w-full py-2">
      <div className="flex  col-span-4 items-center gap-4">
        <img className="w-[70px] h-[70px] object-contain" src={imageUrlParser(image)} alt="" />
        <h1>{name}</h1>
      </div>

      <div className="col-span-2">$299</div>
      <div className="col-span-2">{inStock}</div>
      <div className="col-span-4 justify-end ">
        <ul className="flex list-none gap-4 justify-end">
          <li>
            <EditModal>
                <Edit onClick={handleEdit} className="text-secondary cursor-pointer" />
            </EditModal>
          </li>
          <li>
          <DeleteConfirmModal productInfo={productInfo}>
            <Trash className="text-secondary cursor-pointer" />
            </DeleteConfirmModal>
          </li>
        </ul>
      </div>
    </div>
  );
}
