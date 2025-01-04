import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: "",
  genreId: "",
  type: "",
  year: "",
  keyword: "",
  page: 1,
  imageListLength: false,
};

export const filmsQuerySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    selectQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    resetQuery: () => ({
      ...initialState,
    }),
  },
});

export const { selectQuery, resetQuery } = filmsQuerySlice.actions;

export default filmsQuerySlice.reducer;
