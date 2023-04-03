import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  movieDetails: {}
}

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, {payload}) => {
        state.movies = payload;
    },
    addMovieDetails: (state, {payload}) => {
      state.movieDetails = payload;
  }
  },
})

// Action creators are generated for each case reducer function
export const {addMovies, addMovieDetails} = movieSlice.actions;
export const stateAllMovies = (state) => state.movies.movies;
export const stateMovieDetails = (state) => state.movies.movieDetails;
export default movieSlice.reducer