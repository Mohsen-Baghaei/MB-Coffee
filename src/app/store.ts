import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import aboutReducer from "./about/aboutSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    about: aboutReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;
