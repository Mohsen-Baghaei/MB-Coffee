import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type StateType = {
  id: number;
  name: string;
  img: string;
  weight: number;
  price: number;
};

const initialState: StateType[] = [];

const inBagSlice = createSlice({
  name: "inBag",
  initialState,
  reducers: {
    addToBag: {
      reducer(state, action: PayloadAction<StateType>) {
        state.push(action.payload);
      },
      prepare(id, name, img, weight, price) {
        return {
          payload: {
            id,
            name,
            img,
            weight,
            price,
          },
        };
      },
    },
  },
});

export const { addToBag } = inBagSlice.actions;

export const inBagItems = (state: RootState) => state.inBag;

export default inBagSlice.reducer;
