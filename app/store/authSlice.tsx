import Cookies from "js-cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  orgID: string | null;
  username: string | null;
  userID: string | null;
}

const initialState: AuthState = {
  token: Cookies.get("auth_token") || null,
  orgID: null,
  username: null,
  userID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      Cookies.set("auth_token", action.payload, { path: "/" });
    },
    clearToken: (state) => {
      state.token = null;
      state.username = null;
      Cookies.remove("auth_token", { path: "/" });
    },
    setOrgID: (state, action: PayloadAction<string>) => {
      state.orgID = action.payload;
    },
    clearOrgID: (state) => {
      state.orgID = null;
    },

    setUserID: (state, action: PayloadAction<string>) => {
      state.userID = action.payload;
    },
    clearUserID: (state) => {
      state.userID = null;
    },
  },
});

export const {
  setToken,
  clearToken,
  setOrgID,
  clearOrgID,
  setUserID,
  clearUserID,
} = authSlice.actions;
export default authSlice.reducer;
