import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type addressType = {
  addressId: number;
  province: string;
  city: string;
  location: string;
  postalCode: string;
};

export type usersType = {
  user: string;
  pwd: string;
  id: number;
  loggedIn: boolean;
  userAddress: addressType[];
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
      const duplicate = state.users.find((username) => username.user === user);
      if (duplicate) {
        state.error = "Username Taken";
      } else {
        const loggedIn = false;
        state.users.push({ id, user, pwd, loggedIn, userAddress });
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
  createAddress,
  updateAddress,
  deleteAddress,
} = registerSlice.actions;

export const selectedUsers = (state: RootState) =>
  state.register?.users?.find((person) => person.loggedIn === true);

export const allUsers = (state: RootState) => state.register?.users;

export const selectedAddress = (state: RootState, addressId: number) => {
  const user = state.register.users.find((person) => person.loggedIn === true);
  const address = user?.userAddress.find(
    (location) => location.addressId === addressId
  );
  return address;
};

export const usersError = (state: RootState) => state.register?.error;

export default registerSlice.reducer;
