import React, { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { updateQuantity } from "@/redux/features/cart/cartSlice";
import imageUrlParser from "@/lib/imageUrlParser";
import { Link } from "react-router-dom";

type TCartItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
};
type TCartProps = {
  item: TCartItem;
};

export default function CheckoutItem({ item }: TCartProps) {
  const totalPrice = Math.floor(item.price * item.quantity);
  const [quantity, setQuantity] = useState(item.quantity || 0);
  const dispatch = useAppDispatch();
  const handleIncQuantity = useCallback(() => {
    setQuantity((prev) => {
      const update = prev + 1;
      dispatch(updateQuantity({ id: item.id, quantity: update }));
      return update;
    });
  }, [quantity]);

  const handleDecQuantity = useCallback(() => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
    dispatch(updateQuantity({ id: item.id, quantity }));
  }, [quantity]);

  return (
    <>
      <div className="flex items-center col-span-5 my-2">
        <div className="bg-gray-100 rounded-lg w-48 lg:w-36 h-24 flex items-center justify-center px-4">
          <img className="object-contain " src={imageUrlParser(item.image)} alt="" />
        </div>
        <div className="">
          <h2 className=" font-semibold text-sm md:text-lg">
            <Link  to={`/product/${item.id}`}>{item.name}</Link>
          </h2>
          <p className="text-gray-600 font-thin mt-2 text-[11px] md:text-sm">{item.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 col-span-2">
        <span className="font-semibold  items-start text-sm md:text-lg"> ${item.price}</span>
      </div>
      <div className="flex items-center  gap-4 col-span-3 ">
        <div className="py-3 px-4 w-full rounded-sm border border-coolGray-200 flex gap-4 items-center bg-white">
          <Button
            onClick={() => handleDecQuantity()}
            className="bg-white  w-1/3 hover:bg-white text-primary text-[24px] hover:focus-within:bg-secondary">
            -
          </Button>
          <span x-text="quantity" className="text-rhino-800 text-sm">
            {quantity}
          </span>
          <Button
            onClick={() => handleIncQuantity()}
            className="bg-white  w-1/3 text-primary hover:bg-white  text-[24px] hover:focus-within:bg-secondary">
            +
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 col-span-2">
        <span className="font-semibold  items-start"> ${totalPrice}</span>
      </div>
    </>
  );
}
