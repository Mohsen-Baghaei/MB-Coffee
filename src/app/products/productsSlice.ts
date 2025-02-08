import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

const PRODUCTS_URL: string = "https://fake-coffee-api.vercel.app/api";

export type ProductType = {
  description: string;
  flavor_profile: string[];
  grind_option: string[];
  id: number;
  image_url: string;
  name: string;
  price: number;
  region: string;
  roast_level: number;
  weight: number;
  _id: string;
  rate?: number;
};

const productAdapter = createEntityAdapter({});

const initialState = productAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchProducts = createAsyncThunk("api/fetchProducts", async () => {
  const response = await axios.get(PRODUCTS_URL);
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "success";
      productAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { selectAll, selectById, selectIds } = productAdapter.getSelectors(
  (state: RootState) => state.products
);

export default productsSlice.reducer;
