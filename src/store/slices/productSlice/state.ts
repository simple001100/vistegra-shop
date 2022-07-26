export type State = {
  products: [];
  isLoading: boolean;
  error: string;
};

export const initialState: State = {
  products: [],
  isLoading: false,
  error: "",
};
