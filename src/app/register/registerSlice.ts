import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { StateType } from "../inBag/inBagSlice";

export type addressType = {
  addressId: number;
  province: string;
  city: string;
  location: string;
  postalCode: string;
};

export type favoritCoffeeType = {
  productId: number;
  name: string;
  img: string;
  weight: number;
  price: number;
};

export type userInfoType = {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: number | null;
  birthday?: string;
  job?: string;
};

export type OrdersType = {
  orderedId: number;
  orders: StateType[];
  date: string;
  totalItems: number;
  totalPrices: string;
};

export type usersType = {
  user: string;
  pwd: string;
  id: number;
  loggedIn: boolean;
  userAddress: addressType[];
  userInfo: userInfoType;
  favoritCoffee: favoritCoffeeType[];
  orderedItems: OrdersType[];
};

export type UserStateType = {
  users: usersType[];
  error: string;
};

const getInitialUsers = (): usersType[] => {
  try {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  } catch (error) {
    console.error("Error parsing users from localStorage:", error);
    return [];
  }
};

const initialState: UserStateType = {
  users: getInitialUsers(),
  error: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    createUser(
      state: UserStateType,
      action: PayloadAction<{ user: string; pwd: string }>
    ) {
      const { user, pwd } = action.payload;
      const id = state.users.length
        ? state.users[state.users.length - 1].id + 1
        : 1;

      const duplicate = state.users.some((u) => u.user === user);
      if (duplicate) {
        state.error = "Username Taken";
        return;
      }

      state.users.push({
        id,
        user,
        pwd,
        loggedIn: false,
        userAddress: [],
        userInfo: { firstname: "", lastname: "", email: "", phoneNumber: null },
        favoritCoffee: [],
        orderedItems: [],
      });
      localStorage.setItem("users", JSON.stringify(state.users));
      state.error = "";
    },

    authorizUser(
      state: UserStateType,
      action: PayloadAction<{ user: string; pwd: string }>
    ) {
      const { user, pwd } = action.payload;
      const targetUser = state.users.find(
        (u) => u.user === user && u.pwd === pwd
      );

      if (!targetUser) {
        state.error = "Invalid Username or Password";
        return;
      }

      state.users.forEach((u) => (u.loggedIn = false));
      targetUser.loggedIn = true;
      localStorage.setItem("users", JSON.stringify(state.users));
      state.error = "";
    },

    logoutUser(state: UserStateType, action: PayloadAction<{ id: number }>) {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (user) {
        user.loggedIn = false;
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },

    userInfoEdit(
      state: UserStateType,
      action: PayloadAction<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        phoneNumber: number;
        birthday?: string;
        job?: string;
      }>
    ) {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (user) {
        user.userInfo = { ...action.payload };
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },

    createAddress(
      state: UserStateType,
      action: PayloadAction<{
        id: number;
        province: string;
        city: string;
        location: string;
        postalCode: string;
      }>
    ) {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (!user) return;

      const newAddressId = user.userAddress.length
        ? user.userAddress[user.userAddress.length - 1].addressId + 1
        : 1;

      user.userAddress.push({
        addressId: newAddressId,
        ...action.payload,
      });
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    updateAddress(
      state: UserStateType,
      action: PayloadAction<{
        id: number;
        addressId: number;
        province: string;
        city: string;
        location: string;
        postalCode: string;
      }>
    ) {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (!user) return;

      const addressIndex = user.userAddress.findIndex(
        (addr) => addr.addressId === action.payload.addressId
      );

      if (addressIndex !== -1) {
        user.userAddress[addressIndex] = { ...action.payload };
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },

    deleteAddress(
      state: UserStateType,
      action: PayloadAction<{ id: number; addressId: number }>
    ) {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (!user) return;

      user.userAddress = user.userAddress.filter(
        (addr) => addr.addressId !== action.payload.addressId
      );
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    addFavoritCoffee(
      state: UserStateType,
      action: PayloadAction<{
        id: number;
        productId: number;
        name: string;
        img: string;
        weight: number;
        price: number;
      }>
    ) {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (!user) return;

      const exists = user.favoritCoffee.some(
        (coffee) => coffee.productId === action.payload.productId
      );

      if (!exists) {
        user.favoritCoffee.push({ ...action.payload });
        localStorage.setItem("users", JSON.stringify(state.users));
        state.error = "";
      } else {
        state.error = "Coffee already in favorites";
      }
    },

    removeFavoritCoffee(
      state: UserStateType,
      action: PayloadAction<{ id: number; productId: number }>
    ) {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (!user) return;

      user.favoritCoffee = user.favoritCoffee.filter(
        (coffee) => coffee.productId !== action.payload.productId
      );
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    submitOrders(
      state: UserStateType,
      action: PayloadAction<{
        id: number;
        orders: StateType[];
        totalItems: number;
        totalPrices: string;
      }>
    ) {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (!user) return;

      const newOrderId = user.orderedItems.length
        ? user.orderedItems[user.orderedItems.length - 1].orderedId + 1
        : 1;

      user.orderedItems.push({
        orderedId: newOrderId,
        orders: action.payload.orders,
        totalItems: action.payload.totalItems,
        totalPrices: action.payload.totalPrices,
        date: new Date().toISOString(),
      });
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    changeRating(
      state: UserStateType,
      action: PayloadAction<{
        id: number;
        orderedId: number;
        singleOrderId: number;
        rate: number;
      }>
    ) {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (!user) return;

      const order = user.orderedItems.find(
        (o) => o.orderedId === action.payload.orderedId
      );
      const item = order?.orders.find(
        (i) => i.id === action.payload.singleOrderId
      );

      if (item) {
        item.rate = action.payload.rate;
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },
  },
});

export const selectedUsers = (state: RootState) =>
  state.register.users.find((u) => u.loggedIn);

export const allUsers = (state: RootState) => state.register.users;

export const selectedAddress = (state: RootState, addressId: number) => {
  const user = state.register.users.find((u) => u.loggedIn);
  return user?.userAddress.find((addr) => addr.addressId === addressId);
};

export const usersError = (state: RootState) => state.register.error;

export const {
  createUser,
  authorizUser,
  logoutUser,
  userInfoEdit,
  createAddress,
  updateAddress,
  deleteAddress,
  addFavoritCoffee,
  removeFavoritCoffee,
  submitOrders,
  changeRating,
} = registerSlice.actions;

export default registerSlice.reducer;
