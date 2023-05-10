import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://yts.mx/api/v2",
  }),
  tagTypes: ["Movie"],
  endpoints: (builder) => ({
    getPopular: builder.query({
      query: () => "/list_movies.json?limit=4&quality=3D&minimum_rating=3",
    }),
    getMovie: builder.query({
      query: (movieID) => `/movie_details.json?movie_id=${movieID}&with_images=true&with_cast=true`,
    }),
    getLatestMovies: builder.query({
      query: () => `/list_movies.json/movie_details.json?limit=8&sort_by=year&quality=3D`,
    }),
    getUpcomingMovies: builder.query({
      query: () => `/movie_suggestions.json?movie_id=10`,
    }),
    getSuggestions: builder.query({
      query: (movieID) => `/movie_suggestions.json?movie_id=${movieID}`,
    }),
  }),
});
export const { useGetPopularQuery, useGetMovieQuery, useGetLatestMoviesQuery, useGetUpcomingMoviesQuery, useGetSuggestionsQuery } = movieApi;
