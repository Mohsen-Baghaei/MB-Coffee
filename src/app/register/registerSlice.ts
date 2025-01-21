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

export type usersType = {
  user: string;
  pwd: string;
  id: number;
  loggedIn: boolean;
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
      const id = state.users.length
        ? state.users[state.users.length - 1].id + 1
        : 1;
      const duplicate = state.users.find((username) => username.user === user);
      if (duplicate) {
        state.error = "Username Taken";
      } else {
        const loggedIn = false;
        state.users.push({ id, user, pwd, loggedIn });
        localStorage.setItem("user", JSON.stringify(state.users));
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
      } else {
        state.error = "Invalid Username or Password";
      }
    },
    logoutUser(state: UserStateType, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const existUser = state.users.find((username) => username.id === id);
      if (existUser) {
        existUser.loggedIn = false;
        localStorage.setItem("user", JSON.stringify(state.users));
      }
    },
  },
});

export const { createUser, authorizUser, logoutUser } = registerSlice.actions;

export const selectedUsers = (state: RootState) =>
  state.register?.users?.find((person) => person.loggedIn === true);

export const allUsers = (state: RootState) => state.register?.users;

export const usersError = (state: RootState) => state.register?.error;

export default registerSlice.reducer;
