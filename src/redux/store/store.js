import { configureStore } from "@reduxjs/toolkit";
import { kinopoiskApi } from "../api/kinopoiskApi";
import filmsQuerySliceReducer from "../slices/filmsQuerySlice";
export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    filmsQuerySlice: filmsQuerySliceReducer,
    // searchQuerySlice: searchQueryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
});
