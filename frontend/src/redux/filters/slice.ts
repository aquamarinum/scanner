import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type filtersType = {
  search: string;
};

const initialState: filtersType = {
  search: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = filterSlice.actions;

export default filterSlice.reducer;
