import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../data/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
