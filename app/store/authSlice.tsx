import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      Cookies.set("auth_token", action.payload);
    },
    clearToken: (state) => {
      Cookies.remove("auth_token");
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
