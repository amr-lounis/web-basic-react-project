import { createSlice } from "@reduxjs/toolkit";

function delay(t: number, val: number) {
  return new Promise((resolve) => setTimeout(resolve, t, val));
}

export const counter1Slice = createSlice({
  name: "counter1",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state, action) => {
      console.log(action);
      delay(200, action.payload).then(() => {
        state.value += 1;
      });
    },
    decremented: (state, action) => {
      console.log(action);
      delay(200, action.payload).then(() => {
        state.value -= 1;
      });
    },
    pp: (state, action) => {
      console.log("counter1 :", action.payload, " | ", "", state.value);
    },
  },
});
