import CheckoutCart from "@/components/cart/CheckoutCart";
import CheckoutItem from "@/components/cart/CartItem";
import { useCart } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";


export default function ShoppingCart() {
  const cartItems= useAppSelector((state) =>useCart(state))


  return (
    <section className="md:container py-14 bg-gray-50">
      {/* product */}
      <div className="grid md:grid-cols-12 grid-cols-1">
        <div className="grid grid-cols-12 text-primary font-bold md:col-span-8">
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
            {
              cartItems?.map(item => <CheckoutItem key={item.id} item={item}/>)
            }



          
        </div>
        <div className="w-full col-span-4">
            <CheckoutCart/>
        </div>
      </div>
    </section>
  );
}
