import React from "react";

export default function CheckoutCart() {
  return (
    <div className="w-full  px-4 text-primary">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-rhino-700 text-lg mb-4 font-semibold">
          Cart totals
        </h2>
        <div className="pb-4 border-b border-coolGray-200 flex flex-wrap gap-2 justify-between items-center mb-4">
          <p className="text-rhino-300">Subtotal</p>
          <p className="text-rhino-800">$ 357.00</p>
        </div>
        <p className="text-rhino-800 mb-4">Shipping</p>
        <div className="mb-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-rhino-300">Flat Rate</p>
            <p className="text-rhino-800">$ 20.00</p>
          </div>
          <p className="text-rhino-300">Shipping to United States</p>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <h2 className="text-rhino-700 font-semibold text-lg">Order Total</h2>
          <h2 className="text-rhino-700 font-semibold text-lg">$ 377.00</h2>
        </div>
        <a
          className="bg-secondary text-primary py-3 px-4 rounded-sm  text-center hover:bg-primary hover:text-secondary transition duration-200 w-full inline-block"
          href="#">
          Go to Checkout
        </a>
      </div>
    </div>
  );
}
