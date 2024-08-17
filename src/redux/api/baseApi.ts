import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'


// Define a service using a base URL and expected endpoints
export const baseAPi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fitness-equipment-backend-eta.vercel.app/api',
    prepareHeaders: (headers, { getState ,endpoint}) => {
      const auth = (getState() as RootState).auth
      const user = auth.user?.role

      if (auth.token) {
        headers.set('authorization', `Bearer ${auth.token}`)
      }

      if(endpoint === 'adminOnly' && user !== 'admin'){
        throw new Error('Unauthorized');
      }

      return headers
    }

  }),

  endpoints: () => ({})
})
