import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IProductState } from "./product.interface";

const initState : IProductState = {
    products: [],
}
export const productSlice = createSlice({
    name: 'product',
    initialState: initState,
    reducers:{
        productList: (state, action: PayloadAction<IProduct[]>) =>{
            state.products = action.payload
        },
    },
});

export const {productList} = productSlice.actions
export default productSlice.reducer