import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducres'
import { baseAPi } from './api/baseApi'

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'






export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseAPi.middleware)


})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export const persistor = persistStore(store);