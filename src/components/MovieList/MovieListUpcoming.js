import React from 'react';
import styles from "../MovieList/MovieListUpcoming.module.css";
import { useGetUpcomingMoviesQuery} from "../../services/movieApi";
import MovieCard from '../MovieCard/MovieCard';


function MovieListUpcoming() {
    const { data: upcomingMoviesObj = [], isLoading, error } = useGetUpcomingMoviesQuery();

    if (isLoading) {
        return <div>loading...</div>;
      }
      if (error) {
        return <div>Error...</div>;
      }
  const upcomingMovies = upcomingMoviesObj.data.movies

  return (
    <>
      
      <hr/>
      <h3 className={styles.h3Title}>Movie sugestions</h3>
      <div className={styles.centralDiv}>
        <div className={styles.movieListContainer}>
          {upcomingMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
      
    </>
  );
}

export default MovieListUpcoming;