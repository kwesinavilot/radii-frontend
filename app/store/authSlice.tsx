import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {
  token: string | null;
  orgID: string | null;
}

const initialState: AuthState = {
  token: Cookies.get("auth_token") || null,
  orgID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      Cookies.set("auth_token", action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      Cookies.remove("auth_token");
    },
    setOrgID: (state, action: PayloadAction<string>) => {
      state.orgID = action.payload;
    },
    clearOrgID: (state) => {
      state.orgID = null;
    },
  },
});

export const { setToken, clearToken, setOrgID, clearOrgID } = authSlice.actions;
export default authSlice.reducer;
