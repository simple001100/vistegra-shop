export type State = {
  products: Array<{
    ID: string;
    NAME: string;
    PICTURE: string;
    PRICE?: string;
    TYPE: string;
    SKU?: object;
  }>;
  isLoading: boolean;
  error: string;
};

export const initialState: State = {
  products: [],
  isLoading: false,
  error: "",
};
