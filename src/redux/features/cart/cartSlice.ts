import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type TCartItem = {
    id: string,
    name: string,
    description: string,
    image: string,
    quantity: number,
    price: number
}
type TInitial = {
    items: TCartItem[]
}

const initialState: TInitial = {
    items: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const item: TCartItem = action.payload
            const existItem = state.items.find(pd => pd.id === item.id)
            if (existItem) {
                existItem.quantity += action.payload.quantity
            } else {

                state.items.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(pd => pd.id !== action.payload.id)

        },
        updateQuantity: (state, action) => {
            const updateRef: { id: string, quantity: number } = action.payload
            const product = state.items.find(pd => pd.id === updateRef.id)
            if (product) {
                product.quantity = updateRef.quantity;
            }
            return state
        },
        clearCart: (state) => {
            state.items = []

        },

    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, clearCart,updateQuantity } = cartSlice.actions
export const useCart = (state: RootState) => state.cart.items


