import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

export default function CheckoutItem() {
  return (
    <>
      <div className="flex items-center col-span-5">
        <div className="bg-gray-100 rounded-lg w-36 lg:w-24 h-24 flex items-center justify-center">
          <img src="coleos-assets/shopping-cart/product1.png" alt="" />
        </div>
        <div>
          <h2 className=" font-semibold">Main Name for Product</h2>
          <p className="text-gray-600 font-thin mt-2">
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 col-span-2">
        <span className="font-semibold  items-start"> $ 120</span>
      </div>
      <div className="flex items-center  gap-4 col-span-3">
        <div className="py-3 px-4 rounded-sm border border-coolGray-200 flex gap-4 items-center bg-white">
          <Button className="bg-white hover:bg-white text-primary text-[24px] hover:focus-within:bg-secondary">
            -
          </Button>
          <span x-text="quantity" className="text-rhino-800 text-sm">
            1
          </span>
          <Button className="bg-white text-primary hover:bg-white  text-[24px] hover:focus-within:bg-secondary">
            +
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 col-span-2">
        <span className="font-semibold  items-start"> $ 120</span>
      </div>
    </>
  );
}
