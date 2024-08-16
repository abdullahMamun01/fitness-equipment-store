import { TCategory } from "../types";
import { baseAPi } from "./baseApi";


type TBilling = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    zipCode: string;
    street: string;
}

type TProduct = {
    id:string ,
    name: string,
    img: string,
    price: number,
    quantity: number
}

type TPaymentInfo = {
    products: TProduct[]
    billingDetails: TBilling,
 
}

type TSuccessPaymentResponse = {
    sessionId: string,
    sessionUrl: string
}

 const paymentApi = baseAPi.injectEndpoints({
    endpoints: (build) => ({
        stripePayment: build.mutation<TSuccessPaymentResponse, TPaymentInfo>({
            query: (paymentInfo) => {
        
                return {
                    url: '/payment/stripe/confirm-payment',
                    method: "POST",
                    body: paymentInfo
                }
            },
            transformResponse: (response: { success: boolean; statusCode: number; data: TSuccessPaymentResponse }) => response.data,
        })

    }),
});


export const { useStripePaymentMutation} = paymentApi