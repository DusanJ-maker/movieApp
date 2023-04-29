import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import authReducer from "./auth/authSlice";
import { movieApi } from "../services/movieApi";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
