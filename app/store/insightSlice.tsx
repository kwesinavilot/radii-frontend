import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InsightState {
  searchID: string | null;
}

const initialState: InsightState = {
  searchID: null,
};

const insightSlice = createSlice({
  name: "insight",
  initialState,
  reducers: {
    setSearchID(state, action: PayloadAction<string>) {
      state.searchID = action.payload;
    },
  },
});

export const { setSearchID } = insightSlice.actions;
export default insightSlice.reducer;
