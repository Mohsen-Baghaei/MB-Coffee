import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type StateType = {
  showSidebar: boolean;
};

const initialState: StateType = {
  showSidebar: false,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    closeSidebar: (state) => {
      state.showSidebar = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = settingSlice.actions;

export const sidebarStatus = (state: RootState) => state.setting.showSidebar;

export default settingSlice.reducer;
