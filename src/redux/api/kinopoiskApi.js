import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const kinopoiskApi = createApi({
  reducerPath: "kinopoiskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", "e2ca23d1-d964-48e3-b422-d884c892cc12");
      headers.set("Content-Type", "application/json");
    },
  }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: ({ type, page }) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
    getFilmsCategory: builder.query({
      query: ({ type, genreId = "", page, year, country }) =>
        `/v2.2/films?genres=${genreId}&order=NUM_VOTE&type=${type}&yearFrom=${year}&yearTo=${year}&countries=${country}&page=${page}`,
    }),
    getCountriesAndGenres: builder.query({
      query: () => `/v2.2/films/filters`,
    }),
    getMediaPosts: builder.query({
      query: (page) => `/v1/media_posts?page=${page}`,
    }),
    getSearchFilms: builder.query({
      query: (keyword) => `/v2.1/films/search-by-keyword?keyword=${keyword}`,
    }),
    getFilmId: builder.query({
      query: (id) => `/v2.2/films/${id}`,
    }),
    getSequelsAndPrequels: builder.query({
      query: (id) => `/v2.1/films/${id}/sequels_and_prequels`,
    }),
    getImagesFilm: builder.query({
      query: ({ id, page }) =>
        `/v2.2/films/${id}/images?type=SHOOTING&page=${page}`,
    }),
    getStaffFilm: builder.query({
      query: (id) => `/v1/staff?filmId=${id}`,
    }),
    getStaffId: builder.query({
      query: (id) => `/v1/staff/${id}`,
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useGetFilmsCategoryQuery,
  useGetCountriesAndGenresQuery,
  useGetMediaPostsQuery,
  useGetSearchFilmsQuery,
  useGetFilmIdQuery,
  useGetStaffFilmQuery,
  useGetImagesFilmQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffIdQuery,
} = kinopoiskApi;
