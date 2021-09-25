import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "access_token",
  initialState: {
    access_token: "",
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
  },
});

export const { setAccessToken } = userSlice.actions;

export default userSlice.reducer;
