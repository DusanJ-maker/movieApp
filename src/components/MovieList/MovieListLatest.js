import React from 'react';
import styles from "../MovieList/MovieListLatest.module.css";
import { useGetLatestMoviesQuery} from "../../services/movieApi";
import MovieCard from '../MovieCard/MovieCard';


function MovieListLatest() {
    const { data: latestMoviesObj = [], isLoading, error } = useGetLatestMoviesQuery();

    if (isLoading) {
        return <div>loading...</div>;
      }
      if (error) {
        return <div>Error...</div>;
      }

  const latestMovies = latestMoviesObj.data.movies

  return (
    <>
      
      <hr/>
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