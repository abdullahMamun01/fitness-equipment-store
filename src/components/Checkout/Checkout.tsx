import CheckoutCart from "../cart/CheckoutCart";
import CheckoutForm from "./CheckoutForm";

export default function Checkout() {
  return (
    <div className="font-[sans-serif] bg-white md:container  ">
      <div className="grid grid-cols-1 md:grid-cols-12  gap-12 max-lg:gap-4 h-full ">
        <div className="max-w-4xl md:col-span-8 col-span-1 w-full h-max rounded-md md:px-4 px-8  py-8 md:sticky top-0">
          <h2 className="text-2xl font-bold text-primary">
            Complete your order
          </h2>
          <CheckoutForm />
        </div>

        <div className="col-span-1 md:col-span-4 py-8 h-full">
          <CheckoutCart />
        </div>
      </div>
    </div>
  );
}
