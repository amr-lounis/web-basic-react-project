import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

function delay(t: number, val: object) {
  return new Promise<[]>((resolve) => setTimeout(resolve, t, val));
}

// Generated pending, fulfilled, rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  const users = [];
  for (let i = 1; i <= 10; i++) users.push({ id: i, name: `name ${i}` });
  return delay(2000, users).then((e) => {
    return e
  });
  // return axios
  //   .get("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.data);
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // pending
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    });
    // fulfilled
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    // rejected
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message || "Something Went Wrong";
    });
  },
});
