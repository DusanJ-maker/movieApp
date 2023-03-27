import React from "react";
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
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  if (isSuccess) {
    const movieSuggestions = movieSuggestionsObj.data.movies;
    
    return (
      <div  className={styles.suggestionsGridContainer}>
        {movieSuggestions.map((movie) => {
          return (
              <div className={styles.suggestionMovie}>
                <img src={movie.medium_cover_image} alt="movieImg"></img>
              </div>
          );
        })}
      </div>
    );
  }
}

export default MovieSuggestions;
