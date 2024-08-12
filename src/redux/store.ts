import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducres'
import { baseAPi } from './api/baseApi'
// Or from '@reduxjs/toolkit/query/react'

export const store = configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseAPi.middleware),


})

