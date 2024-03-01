import { createSlice } from "@reduxjs/toolkit";
import { counter1Slice } from "./counter1Slice";

export const counter2Slice = createSlice({
  name: "counter2",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      console.log("+");
      state.value += 1;
    },
    decremented: (state) => {
      console.log("-");
      state.value -= 1;
    },
    pp: (state, action) => {
      console.log("counter2 :", action.payload, " | ", "", state.value);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(counter1Slice.actions.decremented, (state) => {
      console.log("counter2Slice => extraReducers state:", state.value);
    });
  },
});
