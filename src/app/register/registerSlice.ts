import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import coffeeregister1 from "../../assets/register/coffeeregister1.png";
import coffeeregister2 from "../../assets/register/coffeeregister2.png";
import coffeeregister3 from "../../assets/register/coffeeregister3.png";
import coffeeregister4 from "../../assets/register/coffeeregister4.png";
import coffeeregister5 from "../../assets/register/coffeeregister5.png";
import coffeeregister6 from "../../assets/register/coffeeregister6.png";
import coffeeregister7 from "../../assets/register/coffeeregister7.png";
import coffeeregister8 from "../../assets/register/coffeeregister8.png";
import coffeeregister9 from "../../assets/register/coffeeregister9.png";
import coffeeregister10 from "../../assets/register/coffeeregister10.png";

export const pictutes = [
  coffeeregister1,
  coffeeregister2,
  coffeeregister3,
  coffeeregister4,
  coffeeregister5,
  coffeeregister6,
  coffeeregister7,
  coffeeregister8,
  coffeeregister9,
  coffeeregister10,
];

export type StateOptionsType = {
  name: string;
};

export const stateOptions: StateOptionsType[] = [
  { name: "Azerbaijan sharghi" },
  { name: "Azerbaijan gharbi" },
  { name: "Ardabil" },
  { name: "Isfahan" },
  { name: "Alborz" },
  { name: "Ilam" },
  { name: "Bushehr" },
  { name: "Tehran" },
  { name: "Chaharmahal and Bakhtiari" },
  { name: "Khorasan jonobi" },
  { name: " Khorasan Razavi" },
  { name: "Khorasan shomali" },
  { name: "Khuzestan" },
  { name: "Zanjan" },
  { name: "Semnan" },
  { name: "Sistan and Baluchestan" },
  { name: "Fars" },
  { name: "Qazvin" },
  { name: "Qom" },
  { name: "Golestan" },
  { name: "Gilan" },
  { name: "Lorestan" },
  { name: "Mazandaran" },
  { name: "Markazi" },
  { name: "Hormozgan" },
  { name: "Hamadan" },
  { name: "Kurdistan" },
  { name: "Kerman" },
  { name: "Kermanshah" },
  { name: "Kohgiluyeh and Boyer-Ahmad" },
  { name: "Yazd" },
];

type addressType = {
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
        state.error = "";
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

export const usersError = (state: RootState) => state.register?.error;

export default registerSlice.reducer;
