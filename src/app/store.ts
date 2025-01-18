import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;
