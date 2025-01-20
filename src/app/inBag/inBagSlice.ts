import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type StateType = {
  id: number;
  name: string;
  img: string;
  qty?: number;
  itemPrice?: string;
  weight: number;
  price: number;
};

const initialState: StateType[] = [];

const inBagSlice = createSlice({
  name: "inBag",
  initialState,
  reducers: {
    addToBag(state, action: PayloadAction<StateType>) {
      const { id, name, img, weight, price } = action.payload;
      const existItem: StateType | undefined = state.find(
        (item) => item.id === id
      );
      const filteredItems: StateType[] = state.filter((item) => item.id !== id);
      const qty: number = existItem ? existItem.qty! + 1 : 1;
      const itemPrice: string = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(qty * price);
      const newState = [
        ...filteredItems,
        { id, name, img, weight, price, qty, itemPrice },
      ];
      return newState;
    },
  },
});

export const { addToBag } = inBagSlice.actions;

export const inBagItems = (state: RootState) => state.inBag;

export const totalItem = (state: RootState) =>
  state.inBag.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty!;
  }, 0);

export const totalPrice = (state: RootState) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    state.inBag.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.qty! * cartItem.price;
    }, 0)
  );

export default inBagSlice.reducer;
