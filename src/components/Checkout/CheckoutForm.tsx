import { FormProvider, useForm } from "react-hook-form";
import ControlledInput from "../Form/ControlledInput";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { billingSchema, TBilling } from "@/zod/billingSchema";
import { useAppSelector } from "@/redux/hooks";
import { useCart } from "@/redux/features/cart/cartSlice";
import imageUrlParser from "@/lib/imageUrlParser";
import { useStripePaymentMutation } from "@/redux/api/paymentApi";
import { toast } from "react-toastify";

const defaultValues: TBilling = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  zipCode: "",
  street: "",
};

export default function CheckoutForm() {
  const form = useForm({
    defaultValues,
    resolver: zodResolver(billingSchema),
  });
  const cartItems = useAppSelector((state) => useCart(state));
  const products = cartItems.map(({ description, ...pd }) => ({
    ...pd,
    img: imageUrlParser(pd.image),
  }));
  // console.log(products)
  const [payStipe] = useStripePaymentMutation();

  //submit form
  const onSubmit = async (formData: TBilling) => {
    try {
      console.log(products);
      const payment = await payStipe({ billingDetails: formData, products }).unwrap();
      const sessionUrl = payment.sessionUrl as string;
      window.location.href = sessionUrl;
    } catch (error) {
      if (error && typeof error === "object" && "data" in error) {
        const err = error as { data: { message: string } };

        toast.error(err.data.message || "An unexpected error occurred", {
          position: "top-right",
        });
      } else {
        toast.error("An unexpected error occurred", { position: "top-right" });
      }
    }
  };
  return (
    <FormProvider {...form}>
      <form className="mt-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <h3 className="text-base text-primary mb-4">Billing Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ControlledInput
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                inputType="text"
                label="First Name "
                name="firstName"
                placeholder="Enter your First Name"
              />
            </div>

            <div>
              <ControlledInput
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                inputType="text"
                label="Last Name "
                name="lastName"
                placeholder="Enter your Last Name"
              />
            </div>

            <div>
              <ControlledInput
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                inputType="email"
                label="Email"
                name="email"
                placeholder="Enter your Email"
              />
            </div>

            <div>
              <ControlledInput
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                inputType="phone"
                label="Phone"
                name="phone"
                placeholder="Enter your Phone"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ControlledInput
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                inputType="text"
                label="Street"
                name="street"
                placeholder="Enter your Street"
              />
            </div>
            <div>
              <ControlledInput
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                inputType="text"
                label="Country"
                name="country"
                placeholder="Enter your Country"
              />
            </div>
            <div>
              <ControlledInput
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                inputType="text"
                label="City"
                name="city"
                placeholder="Enter your City"
              />
            </div>
            <div>
              <ControlledInput
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                inputType="text"
                label="Postal Code"
                name="postalCode"
                placeholder="Enter your Zip code"
              />
            </div>
          </div>

          <div className="flex gap-4 max-md:flex-col mt-8">
            <button
              type="button"
              className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1">
              Cancel
            </button>
            <Button
              type="submit"
              className="rounded-md px-6 py-3 w-full text-sm tracking-wide hover:bg-primary bg-primary  text-white">
              Complete Purchase
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
