import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import aboutReducer from "./about/aboutSlice";
import inBagReducer from "./inBag/inBagSlice";
import settingReducer from "./setting/settingSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    about: aboutReducer,
    inBag: inBagReducer,
    setting: settingReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;
