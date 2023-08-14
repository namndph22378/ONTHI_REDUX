import { configureStore, ThunkAction, Action, getDefaultMiddleware } from "@reduxjs/toolkit"
import productSlice from "./product/product.Slice"
import { productApi } from "./product/product.service"

export const store = configureStore({
  reducer: {
    products : productSlice,
    [productApi.reducerPath] : productApi.reducer,  
  },
  middleware :(getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
