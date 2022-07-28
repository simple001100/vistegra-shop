import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, initialState } from "./state";

const increaseProductCount = (array: Array<CartProduct>, id: string) => {
  return array.map((el) => {
    if (el.ID === id) {
      el.count += 1;
      el.totalCost += Number(el.PRICE);
    }
    return el;
  });
};

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{
        ID: string;
        NAME: string;
        PICTURE: string;
        PRICE: string;
        TYPE: string;
      }>
    ) {
      const { ID, NAME, PICTURE, PRICE, TYPE } = action.payload;
      const isExists = state.cartProducts.find((el) => el.ID === ID);
      if (!isExists)
        state.cartProducts.push({
          ID,
          NAME,
          PICTURE,
          PRICE,
          count: 1,
          totalCost: Number(PRICE),
          TYPE,
        });
      else {
        state.cartProducts = increaseProductCount(state.cartProducts, ID);
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cartProducts = state.cartProducts.filter(
        (el) => el.ID !== action.payload
      );
    },
    setCount(state, action: PayloadAction<{ ID: string; count: number }>) {
      const { ID, count } = action.payload;

      state.cartProducts = state.cartProducts.filter((el) => {
        if (el.ID === ID) {
          el.count = count;
          el.totalCost = Number(el.PRICE) * count;
        }
        if (el.count !== 0) return el;
      });
    },
  },
});

export const { addToCart, removeFromCart, setCount } = cartSlice.actions;
export default cartSlice.reducer;
