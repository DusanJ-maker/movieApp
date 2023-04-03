import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../MovieCard/MovieCard.module.css";

function MovieCard({ movie }) {

  const [style, setStyle] = useState({
    backgroundImage: `url(${movie.medium_cover_image})`,
    backgroundRepeat: "no-repeat",
    height: "400px",
    width: "100%",
    textAlign: "center",
    backgroundSize: "100% 100%",
    border: "4px solid #ccc",
    borderRadius: "4px",
    opacity: "100%",
    transform: "scale(1)",
    transition: "transform .2s",
  });

  const [isHovering, setIsHovering] = useState(false);

  const cardStyles = {
    backgroundImage: `url(${movie.medium_cover_image})`,
    backgroundRepeat: "no-repeat",
    height: "400px",
    width: "100%",
    textAlign: "center",
    backgroundSize: "100% 100%",
    border: `${style.border}`,
    borderRadius: "4px",
    opacity: `${style.opacity}`,
    transform: `${style.transform}`,
    transition: "transform .2s",
  };

  return (
    <div id="test" className={`${styles.movieContainer}`}>
      <header
        style={cardStyles}
        onMouseEnter={() => {
          setIsHovering(true);
          setStyle({
            ...style,
            border: "5px solid greenyellow",
            opacity: "50%",
            transform: "scale(105%)",
          });
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setStyle({
            ...style,
            border: "4px solid #ccc",
            opacity: "100%",
            transform: "scale(1)",
          });
        }}
      >
        {isHovering && <h3>test</h3>}
      </header>
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