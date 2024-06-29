"use client";

import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";

type ProvidersProps = {
  children: React.ReactNode;
};
const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </ReduxProvider>
  );
};

export default Providers;
