import { baseAPi } from "./api/baseApi";


export const rootReducer = {
    // Add the generated reducer as a specific top-level slice
    [baseAPi.reducerPath]: baseAPi.reducer,
    
}