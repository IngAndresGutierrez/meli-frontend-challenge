import { configureStore } from '@reduxjs/toolkit'

import itemsReducer from './slices/itemsSlice'

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
