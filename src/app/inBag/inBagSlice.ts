import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type StateType = {
  id: number;
  name: string;
  img: string;
  qty?: number;
  weight: number;
  price: number;
};

const initialState: StateType[] =
  localStorage.getItem("inBag") !== null
    ? JSON.parse(localStorage.getItem("inBag")!)
    : [];

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

      const newState = [
        ...filteredItems,
        { id, name, img, weight, price, qty },
      ];
      localStorage.setItem("inBag", JSON.stringify(newState));
      return newState;
    },
    updateQty(
      state: StateType[],
      action: PayloadAction<{ id: number; qty: number }>
    ) {
      const { id, qty } = action.payload;
      const existItem: StateType | undefined = state.find(
        (item) => item.id === id
      );
      const filteredItems: StateType[] = state.filter((item) => item.id !== id);
      if (existItem) {
        const newState = [...filteredItems, { ...existItem, qty }];
        localStorage.setItem("inBag", JSON.stringify(newState));
        return newState;
      }
    },
    deleteItem(state: StateType[], action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const filteredItems: StateType[] = state.filter((item) => item.id !== id);
      localStorage.setItem("inBag", JSON.stringify(filteredItems));
      return filteredItems;
    },
    clearItems(state: StateType[]) {},
  },
});

export const { addToBag, updateQty, deleteItem } = inBagSlice.actions;

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
