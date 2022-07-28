import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice/productSlice";
import cartReducer from "./slices/cartSlice/cartSlice";

const rootReducer = combineReducers({ productReducer, cartReducer });

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
