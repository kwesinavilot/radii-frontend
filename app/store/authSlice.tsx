// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// interface AuthState {}

// const initialState: AuthState = {};

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setToken: (state, action: PayloadAction<string>) => {
//       Cookies.set("auth_token", action.payload);
//     },
//     clearToken: (state) => {
//       Cookies.remove("auth_token");
//     },
//   },
// });

// export const { setToken, clearToken } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {
  token: string | null;
  orgID: string | null;
}

const initialState: AuthState = {
  token: null,
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
