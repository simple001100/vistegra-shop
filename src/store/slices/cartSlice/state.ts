export type CartProduct = {
  id: string;
  name: string;
  picture: string;
  price: number;
  count: number;
  totalCost: number;
};

type State = {
  cartProducts: Array<CartProduct>;
};

export const initialState: State = {
  cartProducts: [],
};
