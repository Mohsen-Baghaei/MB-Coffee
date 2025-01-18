import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

const PRODUCTS_URL: string = "https://fake-coffee-api.vercel.app/api";

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
    }),
      builder.addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { selectAll, selectById, selectIds } = productAdapter.getSelectors(
  (state: RootState) => state.products
);

export default productsSlice.reducer;
