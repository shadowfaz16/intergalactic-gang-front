import { createSlice } from "@reduxjs/toolkit";
import Black from "../../images/layers/Backgrounds/Black.png";

const initialState = {
  background: { Black },
  body: "",
  eye: "",
  clothes: "",
  hat: "",
};

export const customizeSlice = createSlice({
  name: "customize",
  initialState,
  reducers: {
    changeBackground: (state, action) => {
      state.background = action.payload;
    },
    changeBody: (state, action) => {
      state.body = action.payload;
    },
    changeEye: (state, action) => {
      state.eye = action.payload;
    },
    changeClothes: (state, action) => {
      state.clothes = action.payload;
    },
    changeHat: (state, action) => {
      state.hat = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeBackground,
  changeBody,
  changeEye,
  changeClothes,
  changeHat,
} = customizeSlice.actions;

export default customizeSlice.reducer;
