import { persistReducer } from "redux-persist";
import { baseAPi } from "./api/baseApi";
import authReducer from './features/auth/authSLice'
import cartReducer from './features/cart/cartSlice'
import storage from 'redux-persist/lib/storage'
import editProductReducer from './features/edit/editProductSLice'


const persistConfig = {
    key: 'auth',
    storage
}
const cartPersistConfig = {
    key:'cart',
    storage
}
const persistedAuthReducer  = persistReducer(persistConfig, authReducer)
const persistedCartReducer  = persistReducer(cartPersistConfig, cartReducer)

export const rootReducer = {
    [baseAPi.reducerPath]: baseAPi.reducer,
    auth: persistedAuthReducer ,
    cart:persistedCartReducer ,
    editProduct: editProductReducer

}

