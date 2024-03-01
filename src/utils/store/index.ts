import { configureStore } from "@reduxjs/toolkit";
// for use in react
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
//
import { counter1Slice } from "./slices/counter1Slice";
import { counter2Slice } from "./slices/counter2Slice";
import { userSlice } from "./slices/userSlice";
//
export const store = configureStore({
  reducer: {
    counter1: counter1Slice.reducer,
    counter2: counter2Slice.reducer,
    user: userSlice.reducer,
  },
});
// for use in react
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch<AppDispatch>;
