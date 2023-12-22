import { createSlice } from "@reduxjs/toolkit";
import categories_data from "../data/categories_data";
import products_data from "../data/products_data";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categorySelected: "",
    productIdSelected: 0,
    categories: categories_data,
    products: products_data,
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload;
    },
  },
});
export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
