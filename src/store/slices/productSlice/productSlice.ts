import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "./state";

export const getProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL || "");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue("Не удалось загрузить продукты");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
    },
    [getProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProducts.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
