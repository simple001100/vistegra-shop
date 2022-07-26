import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, initialState } from "./state";

const increaseProductCount = (array: Array<CartProduct>, id: string) => {
  return array.map((el) => {
    if (el.id === id) {
      el.count += 1;
      el.totalCost += el.price;
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
        id: string;
        name: string;
        picture: string;
        price: number;
      }>
    ) {
      const { id, name, picture, price } = action.payload;
      const isExists = state.cartProducts.find((el) => el.id === id);
      if (!isExists)
        state.cartProducts.push({
          id,
          name,
          picture,
          price,
          count: 1,
          totalCost: price,
        });
      else {
        state.cartProducts = increaseProductCount(state.cartProducts, id);
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cartProducts = state.cartProducts.filter(
        (el) => el.id !== action.payload
      );
    },
    increaseCount(state, action: PayloadAction<string>) {
      state.cartProducts = increaseProductCount(
        state.cartProducts,
        action.payload
      );
    },
    decreaseCount(state, action: PayloadAction<string>) {
      state.cartProducts = state.cartProducts.filter((el) => {
        if (el.id === action.payload) {
          el.count -= 1;
          el.totalCost -= el.price;
        }
        if (el.count !== 0) return el;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount: deacreseCount,
} = cartSlice.actions;
export default cartSlice.reducer;
