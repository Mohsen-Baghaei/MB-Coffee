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

const initialState: UserStateType = {
  users:
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user")!)
      : [],
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
      const id: number = state.users.length
        ? state.users[state.users.length - 1].id + 1
        : 1;
      const userAddress: addressType[] = [];
      const userInfo: userInfoType = {
        firstname: "",
        lastname: "",
        phoneNumber: null,
        email: "",
        birthday: "",
        job: "",
      };
      const favoritCoffee: favoritCoffeeType[] = [];
      const orderedItems: OrdersType[] = [];
      const duplicate = state.users.find((username) => username.user === user);
      if (duplicate) {
        state.error = "Username Taken";
      } else {
        const loggedIn = false;
        state.users.push({
          id,
          user,
          pwd,
          loggedIn,
          userAddress,
          userInfo,
          favoritCoffee,
          orderedItems,
        });
        localStorage.setItem("user", JSON.stringify(state.users));
        state.error = "";
      }
    },
    authorizUser(
      state: UserStateType,
      action: PayloadAction<{ user: string; pwd: string }>
    ) {
      const { user, pwd } = action.payload;
      const existUser = state.users.find(
        (username) => username.user === user && username.pwd === pwd
      );
      if (existUser) {
        existUser.loggedIn = true;
        localStorage.setItem("user", JSON.stringify(state.users));
        state.error = "";
      } else {
        state.error = "Invalid Username or Password";
      }
    },
    logoutUser(
      state: UserStateType,
      action: PayloadAction<{
        id: number;
      }>
    ) {
      const { id } = action.payload;
      const existUser = state.users.find((username) => username.id === id);
      if (existUser) {
        existUser.loggedIn = false;
        localStorage.setItem("user", JSON.stringify(state.users));
        state.error = "";
      }
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
      const { id, orders, totalItems, totalPrices } = action.payload;
      const existUser = state.users.find((username) => username.id === id);

      if (existUser) {
        const orderedId: number = existUser.orderedItems.length
          ? existUser.orderedItems[existUser.orderedItems.length - 1]
              .orderedId + 1
          : 1;
        const date = new Date().toISOString();
        existUser.orderedItems.push({
          orderedId,
          orders,
          totalItems,
          totalPrices,
          date,
        });
        localStorage.setItem("user", JSON.stringify(state.users));
      }
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
      const { id, orderedId, singleOrderId, rate } = action.payload;

      const existUser = state.users.find((username) => username.id === id);

      if (existUser) {
        const order = existUser.orderedItems.find(
          (order) => order.orderedId === orderedId
        );
        const singleOrder = order?.orders.find(
          (order) => order.id === singleOrderId
        );
        if (singleOrder) {
          singleOrder.rate = rate;
          localStorage.setItem("user", JSON.stringify(state.users));
        }
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
      const { id, firstname, lastname, email, phoneNumber, birthday, job } =
        action.payload;
      const existUser = state.users.find((username) => username.id === id);
      if (existUser) {
        existUser.userInfo = {
          firstname,
          lastname,
          email,
          phoneNumber,
          birthday,
          job,
        };
        localStorage.setItem("user", JSON.stringify(state.users));
      }
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
      const { id, productId, name, price, img, weight } = action.payload;

      const existUser = state.users.find((username) => username.id === id);

      if (existUser) {
        existUser.favoritCoffee.push({ productId, name, price, img, weight });
        localStorage.setItem("user", JSON.stringify(state.users));
      }
    },
    removeFavoritCoffee(
      state: UserStateType,
      action: PayloadAction<{
        id: number;
        productId: number;
      }>
    ) {
      const { id, productId } = action.payload;

      const existUser = state.users.find((username) => username.id === id);

      if (existUser) {
        const filteredFavoritCoffee = existUser.favoritCoffee.filter(
          (coffee) => coffee.productId !== productId
        );
        existUser.favoritCoffee = filteredFavoritCoffee;
        localStorage.setItem("user", JSON.stringify(state.users));
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
      const { id, province, city, location, postalCode } = action.payload;

      const existUser = state.users.find((person) => person.id === id);
      if (existUser) {
        const addressId: number = existUser.userAddress?.length
          ? existUser.userAddress[existUser.userAddress.length - 1].addressId +
            1
          : 1;
        existUser.userAddress.push({
          addressId,
          province,
          city,
          location,
          postalCode,
        });
        localStorage.setItem("user", JSON.stringify(state.users));
      }
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
      const { id, addressId, province, city, location, postalCode } =
        action.payload;

      const existUser = state.users.find((person) => person.id === id);

      const existAddress = existUser?.userAddress.find(
        (address) => address.addressId === addressId
      );
      const filteredAddress = existUser?.userAddress.filter(
        (address) => address.addressId !== addressId
      );
      if (existAddress && existUser && filteredAddress) {
        existUser.userAddress = [
          ...filteredAddress,
          { addressId, province, city, location, postalCode },
        ];
        localStorage.setItem("user", JSON.stringify(state.users));
      }
    },
    deleteAddress(
      state: UserStateType,
      action: PayloadAction<{
        id: number;
        addressId: number;
      }>
    ) {
      const { id, addressId } = action.payload;

      const existUser = state.users.find((person) => person.id === id);
      const filteredAddress = existUser?.userAddress.filter(
        (address) => address.addressId !== addressId
      );
      if (existUser && filteredAddress) {
        existUser.userAddress = [...filteredAddress];
        localStorage.setItem("user", JSON.stringify(state.users));
      }
    },
  },
});

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

export const selectedUsers = (state: RootState) =>
  state?.register?.users?.find((person) => person.loggedIn === true);

export const allUsers = (state: RootState) => state.register?.users;

export const selectedAddress = (state: RootState, addressId: number) => {
  const user = state.register?.users?.find(
    (person) => person.loggedIn === true
  );
  const address = user?.userAddress.find(
    (location) => location.addressId === addressId
  );
  return address;
};

export const usersError = (state: RootState) => state.register?.error;

export default registerSlice.reducer;
