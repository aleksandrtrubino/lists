import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/model/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authSlice.middleware),
});
export default store;
