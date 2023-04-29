import React from "react";
import { Link } from "react-router-dom";
import styles from "../MovieCard/MovieCard.module.css";

function MovieCard({ movie }) {

  return (
    <div className={styles.movieContainer}>
      <div className={styles.container}>
      <img src={movie.medium_cover_image} alt="moveImg"></img>
      <div className={styles.detailsPage}><span><Link to={`/movieDetail/${movie.id}`}>
          <h3>View details</h3>
        </Link></span></div>
      </div>
      <footer className={styles.divInfoCard}>
        <h4 className={styles.movieTitle}>{movie.title}</h4>
        <p className={styles.movieYear}>{movie.year}</p>
      </footer>
    </div>
  );
}

export default MovieCard;