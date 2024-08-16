import { useConfirmStripeOrderMutation } from "@/redux/api/orderApi";
import React, { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "../ui/spinner";

export default function PaymentSuccess() {
  const [params] = useSearchParams();
  // console.log(params.get('session_id'), ' success')
  const [processOrder, { isLoading }] = useConfirmStripeOrderMutation();
  const hasRunRef = useRef(false);

  useEffect(() => {
    const confirmProcessingOrder = async () => {
      const sessionId = params.get("session_id") as string;
      try {
        const order = await processOrder(sessionId).unwrap();
    
        toast.success(order.message, { position: "top-right" });
      } catch (error) {
        if (error && typeof error === "object" && "data" in error) {
          const err = error as { data: { message: string } };
          
          toast.error(err.data.message || "An unexpected error occurred", {
            position: "top-right",
          });
        } else {
          console.log(error)
          toast.error("An unexpected error occurred", {
            position: "top-right",
          });
        }
      }
    };

    if (!hasRunRef.current) {
      hasRunRef.current = true;
      confirmProcessingOrder();
    }
  }, []);

  return (
    <div className="bg-gray-100 ">
      <div className="bg-white p-6  md:mx-auto py-20">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
          <div className="py-10 text-center flex justify-center">
            {isLoading ? (
              <div className="px-12   text-orange-500 font-semibold py-3  gap-2 ">
                <Spinner className="text-primary"/> <h1 className="mt-4 font-bold uppercase">Please waiting For order Confirmation</h1>
              </div>
            ) : (
              <Link
                to="/"
                className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                GO Home
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
