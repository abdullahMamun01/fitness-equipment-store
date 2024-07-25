import CheckoutCart from "@/components/Checkout/CheckoutCart";
import CheckoutItem from "@/components/Checkout/CheckoutItem";
import React from "react";

export default function ShoppingCart() {
  return (
    <section className="md:container py-14 bg-gray-50">
      {/* product */}
      <div className="grid grid-cols-12">
        <div className="grid grid-cols-12 text-primary font-bold col-span-8">
          <div className="w-full py-4 px-6 border-b border-coolGray-200 col-span-5">
            <span className="text-rhino-800">Product</span>
          </div>
          <div className="w-full py-4 px-6 border-b border-coolGray-200 col-span-2 ">
            <span className="text-rhino-800 ">Price</span>
          </div>
          <div className="w-full py-4 px-6 border-b border-coolGray-200 col-span-3">
            <span className="text-rhino-800">Quantity</span>
          </div>
          <div className="w-full py-4 px-6 border-b border-coolGray-200 col-span-2">
            <span className="text-rhino-800">Sub Totla</span>
          </div>

          <CheckoutItem/>
          <CheckoutItem/>
          <CheckoutItem/>


          
        </div>
        <div className="w-full col-span-4">
            <CheckoutCart/>
        </div>
      </div>
    </section>
  );
}
