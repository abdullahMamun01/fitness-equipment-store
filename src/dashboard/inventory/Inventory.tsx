import React from "react";
import Image from "../../assets/StockCake-Gym Workout Session_1721046342.jpg";
import { Delete, DeleteIcon, Edit, Trash } from "lucide-react";
import imageUrlParser from "@/lib/imageUrlParser";
type InventoryProps = {
  name: string;
  price: number;
  stock: number;
  id: string;
  image:string 
};

export default function Inventory({ id, name, price, stock ,image}: InventoryProps) {
  const inStock = stock === 0 ? "stock out" : "in stock";
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
            <Edit className="text-secondary" />
          </li>
          <li>
            <Trash className="text-secondary" />
          </li>
        </ul>
      </div>
    </div>
  );
}
