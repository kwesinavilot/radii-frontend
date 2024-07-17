import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IntegrationState {
  integrationID: string | null;
}

const initialState: IntegrationState = {
  integrationID: null,
};

const integrationSlice = createSlice({
  name: "integration",
  initialState,
  reducers: {
    setIntegrationID: (state, action: PayloadAction<string>) => {
      state.integrationID = action.payload;
      console.log("Integration ID set:", action.payload);
      console.log("Integration ID:", state.integrationID);
      console.log("State:", state);
    },

    clearIntegrationID: (state) => {
      state.integrationID = null;
    },
  },
});

export const { setIntegrationID, clearIntegrationID } =
  integrationSlice.actions;

export default integrationSlice.reducer;
