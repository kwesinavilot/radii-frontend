// // import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // import { exists } from "fs";
// // import Cookies from "js-cookie";
// // import { pages } from "next/dist/build/templates/app-page";

// // interface AuthState {
// //   token: string | null;
// //   orgID: string | null;
// // }

// // const initialState: AuthState = {
// //   token: Cookies.get("auth_token") || null,
// //   orgID: null,
// // };

// // const authSlice = createSlice({
// //   name: "auth",
// //   initialState,
// //   reducers: {
// //     setToken: (state, action: PayloadAction<string>) => {
// //       state.token = action.payload;
// //       Cookies.set("auth_token", action.payload);
// //     },
// //     clearToken: (state) => {
// //       state.token = null;
// //       Cookies.remove("auth_token");
// //     },
// //     setOrgID: (state, action: PayloadAction<string>) => {
// //       state.orgID = action.payload;
// //     },
// //     clearOrgID: (state) => {
// //       state.orgID = null;
// //     },
// //   },
// // });

// // export const { setToken, clearToken, setOrgID, clearOrgID } = authSlice.actions;
// // export default authSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// interface AuthState {
//   token: string | null;
//   orgID: string | null;
// }

// const initialState: AuthState = {
//   token: Cookies.get("auth_token") || null,
//   orgID: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setToken: (state, action: PayloadAction<string>) => {
//       state.token = action.payload;
//       Cookies.set("auth_token", action.payload);
//       console.log("Token set:", action.payload);
//     },
//     clearToken: (state) => {
//       state.token = null;
//       Cookies.remove("auth_token");
//       console.log("Token cleared");
//     },
//     setOrgID: (state, action: PayloadAction<string>) => {
//       state.orgID = action.payload;
//       console.log("OrgID set:", action.payload);
//     },
//     clearOrgID: (state) => {
//       state.orgID = null;
//       console.log("OrgID cleared");
//     },
//   },
// });

// export const { setToken, clearToken, setOrgID, clearOrgID } = authSlice.actions;
// export default authSlice.reducer;

import Cookies from "js-cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  orgID: string | null;
  username: string | null;
}

const initialState: AuthState = {
  token: Cookies.get("auth_token") || null,
  orgID: null,
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      Cookies.set("auth_token", action.payload, { path: "/" });
      console.log("Token set:", action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      state.username = null;
      Cookies.remove("auth_token", { path: "/" });
      console.log("Token cleared");
    },
    setOrgID: (state, action: PayloadAction<string>) => {
      state.orgID = action.payload;
      console.log("OrgID set:", action.payload);
    },
    clearOrgID: (state) => {
      state.orgID = null;
      console.log("OrgID cleared");
    },
  },
});

export const { setToken, clearToken, setOrgID, clearOrgID } = authSlice.actions;
export default authSlice.reducer;
