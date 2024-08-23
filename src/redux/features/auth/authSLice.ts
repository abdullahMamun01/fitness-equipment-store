import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";


type TUser = {
    _id: string;
    fullName: string;
    email: string;
    role: string;
    createdAt: string;
}

type TAuthState = {
    user: TUser | null,
    token: string | null
}
const initialState: TAuthState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state: TAuthState, action) =>{

            const { user, token } = action.payload
            state.user = user
            state.token = token
        } ,
        logout : (state) => {
            state.user = null 
            state.token = null
        }
    }
})

export default authSlice.reducer
export const {setUser,logout} = authSlice.actions
export const useToken = (state:RootState) => state.auth.token
export const selectCurrentUser = (state:RootState) => state.auth.user

