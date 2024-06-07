import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  currentFolder: string;
  selectedItems: string[];
}

const initialState: NavigationState = {
  currentFolder: "All Sources",
  selectedItems: [],
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setCurrentFolder(state, action: PayloadAction<string>) {
      state.currentFolder = action.payload;
    },
    toggleItemSelection(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      if (state.selectedItems.includes(itemId)) {
        state.selectedItems = state.selectedItems.filter((id) => id !== itemId);
      } else {
        state.selectedItems.push(itemId);
      }
    },
    selectAllItems(state, action: PayloadAction<string[]>) {
      state.selectedItems = action.payload;
    },
    clearAllSelections(state) {
      state.selectedItems = [];
    },
  },
});

export const {
  setCurrentFolder,
  toggleItemSelection,
  selectAllItems,
  clearAllSelections,
} = navigationSlice.actions;
export default navigationSlice.reducer;
