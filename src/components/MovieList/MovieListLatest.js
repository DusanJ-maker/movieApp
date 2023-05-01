import React from 'react';
import styles from "../MovieList/MovieListLatest.module.css";
import { useGetLatestMoviesQuery } from "../../services/movieApi";
import MovieCard from '../MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import { stateAllMovies } from '../../features/movies/movieSlice';


function MovieListLatest() {
  const { data: latestMoviesObj = [], isLoading, error } = useGetLatestMoviesQuery();
  const addedMovies = useSelector(stateAllMovies);
  console.log(addedMovies);

  if (isLoading) {
    return <h3>loading...</h3>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  const latestMoviesData = latestMoviesObj.data.movies;

  const latestMovies = [...addedMovies, ...latestMoviesData]

  return (
    <>

      <hr />
      <h3 className={styles.h3Title}>Latest 3D movies</h3>
      <div className={styles.centralDiv}>
        <div className={styles.movieListContainer}>
          {latestMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>

    </>
  );
}

export default MovieListLatest