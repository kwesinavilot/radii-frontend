// // import { configureStore } from "@reduxjs/toolkit";
// // import { persistStore, persistReducer } from "redux-persist";
// // import storage from "redux-persist/lib/storage";
// // import authReducer from "./authSlice";
// // import navigationReducer from "./navigationSlice";

// // const persistConfig = {
// //   key: "root",
// //   storage,
// // };

// // const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// // const store = configureStore({
// //   reducer: {
// //     navigation: navigationReducer,
// //     auth: persistedAuthReducer,
// //   },
// // });

// // const persistor = persistStore(store);

// // export type RootState = ReturnType<typeof store.getState>;

// // export { store, persistor };

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import authReducer from "./authSlice";
// import navigationReducer from "./navigationSlice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// const store = configureStore({
//   reducer: {
//     navigation: navigationReducer,
//     auth: persistedAuthReducer,
//   },
// });

// const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;

// export { store, persistor };

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authSlice";
import navigationReducer from "./navigationSlice";
import integrationReducer from "./integrationSlice";
import insightReducer from "./insightSlice";
// import chartsReducer from "./chartsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    auth: persistedAuthReducer,
    integration: integrationReducer,
    insight: insightReducer,
    // charts: chartsReducer,
  },
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
