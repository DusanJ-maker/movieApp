import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useGetPopularQuery } from "../../services/movieApi";
import styles from "../MovieList/MovieListPopular.module.css";

function MovieListPopular() {
  const { data: popularMoviesObj = [], isLoading, error} = useGetPopularQuery();

  if (isLoading) {
    return <h3>loading...</h3>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  
  const movies = popularMoviesObj.data.movies;

  return (
    <>
      
      <hr/>
      <h3 className={styles.h3Title}>Popular movies</h3>
      <div className={styles.centralDiv}>
        <div className={styles.movieListContainer}>
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
      
    </>
  );
}


export default MovieListPopular;
