import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  currentFolder: string;
}

const initialState: NavigationState = {
  currentFolder: "All Sources",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setCurrentFolder(state, action: PayloadAction<string>) {
      state.currentFolder = action.payload;
    },
  },
});

export const { setCurrentFolder } = navigationSlice.actions;
export default navigationSlice.reducer;
