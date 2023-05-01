import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import authReducer from "./auth/authSlice";
import { movieApi } from "../services/movieApi";
import storage from 'redux-persist/lib/storage';
import {
  persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";


//PERSIST
const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const reducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);


//RTK STORE
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    persistedReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(movieApi.middleware),
});
