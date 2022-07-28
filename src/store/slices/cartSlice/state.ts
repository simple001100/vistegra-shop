export type CartProduct = {
  ID: string;
  NAME: string;
  PICTURE: string;
  PRICE: string;
  TYPE: string;
  count: number;
  totalCost: number;
};

type State = {
  cartProducts: Array<CartProduct>;
};

export const initialState: State = {
  cartProducts: [],
};
