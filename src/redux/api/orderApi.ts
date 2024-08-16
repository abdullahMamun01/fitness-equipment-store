
import { baseAPi } from "./baseApi";

 const orderApi = baseAPi.injectEndpoints({
    endpoints: (build) => ({
        confirmStripeOrder : build.mutation({
            query : (session_id: string) => {
                return {
                    url: '/order/stripe-success' ,
                    method:"POST",
                    body: {session_id}
                }
            }
        })
    
    }),
});


export const { useConfirmStripeOrderMutation} = orderApi