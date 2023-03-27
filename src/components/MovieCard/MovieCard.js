import React from "react";
import { Link } from "react-router-dom";
import styles from "../MovieCard/MovieCard.module.css";

function MovieCard({ movie }) {
  const cardStyles = {
    backgroundImage: `url(${movie.medium_cover_image})`,
    backgroundRepeat: "no-repeat",
    height: "400px",
    width: "100%",
    textAlign: "center",
    backgroundSize: "100% 100%",
    border: "4px solid lightgrey",
    borderRadius: "4px",
  };

  return (
    <div className={styles.movieContainer}>
      <header style={cardStyles}></header>
      <footer className={styles.divInfoCard}>
        <Link to={`/movieDetail/${movie.id}`}>
          <h3>Details page</h3>
        </Link>
        <h4 className={styles.movieTitle}>{movie.title}</h4>
        <p className={styles.movieYear}>{movie.year}</p>
      </footer>
    </div>
  );
}

export default MovieCard;
