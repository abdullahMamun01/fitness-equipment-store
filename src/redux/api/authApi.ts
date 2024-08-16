import { TCategory } from "../types";
import { baseAPi } from "./baseApi";


interface TRegister {
    fullName:string ,
    email: string ,
    password:string ,
}

interface TLogin {
    email: string ,
    password:string ,
}

type TUser = {
    _id: string;
    fullName: string;
    email: string;
    role: string;
    createdAt: string;
    // ... any other fields
  };
  
  type TLoginResponse = {
    data: TUser;
    message: string;
    statusCode: number;
    success: boolean;
    token: string;
  };


 const authApi = baseAPi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<TLoginResponse, TLogin>({
            query: (credentials) => {
                return {
                    url: '/auth/login',
                    method: "POST",
                    body: credentials
                }
            }
        }),
        register: build.mutation<void, TRegister >({
            query: (credentials) => {
                return {
                    url: '/auth/signup',
                    method: "POST" ,
                    body:credentials
                }
            },
        })
    }),
});


export const { useLoginMutation , useRegisterMutation} = authApi