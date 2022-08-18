import { createSlice } from "@reduxjs/toolkit";
import { Dark, Light } from "../../utills/Theme";

const initialState = {
  appLoader: false,
  selectedTheme: "dark",
  theme: Dark,
};
export const configSlice = createSlice({
  name: "Config",
  initialState,
  reducers: {
    setAppLoader: (state, action) => {
      state.appLoader = action.payload;
    },
    setDarkTheme: (state, action) => {
      // console.log(  state.theme = action.payload == "dark" ? Dark : Light);
      state.theme = action.payload == "dark" ? Dark : Light;
      state.selectedTheme = action.payload;
    },
  },
});

export const { setAppLoader ,setDarkTheme} = configSlice.actions;
export const selectAppLoader = (state) => state.Config.appLoader;
export const selectedTheme = (state) => state.Config.theme;
export const selectedMode=(state)=>state.Config.selectedTheme

export default configSlice.reducer;
