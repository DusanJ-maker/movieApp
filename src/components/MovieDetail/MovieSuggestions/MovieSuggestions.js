import React from "react";
import { Link } from "react-router-dom";
import { useGetSuggestionsQuery } from "../../../services/movieApi";
import styles from "../MovieSuggestions/MovieSuggestions.module.css";

function MovieSuggestions({ movieID }) {

  const {
    data: movieSuggestionsObj = [],
    isLoading,
    isSuccess,
    error,
  } = useGetSuggestionsQuery(movieID);

  if (isLoading) {
    return <h3>loading...</h3>;
  }
  if (error) {
    return <h3>error...</h3>;
  }

  if (isSuccess) {
    const movieSuggestions = movieSuggestionsObj.data.movies;
    
    return (
      <div  className={styles.suggestionsGridContainer}>
        {movieSuggestions.map((movie) => {
          return (
              <div className={styles.suggestionMovie}>
                <Link to={`/movieDetail/${movie.id}`}>
                <img src={movie.medium_cover_image} alt="movieImg"></img>
                </Link>
              </div>
          );
        })}
      </div>
    );
  }
}

export default MovieSuggestions;
