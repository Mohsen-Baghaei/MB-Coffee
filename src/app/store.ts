import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import aboutReducer from "./about/aboutSlice";
import inBagReducer from "./inBag/inBagSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    about: aboutReducer,
    inBag: inBagReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;
