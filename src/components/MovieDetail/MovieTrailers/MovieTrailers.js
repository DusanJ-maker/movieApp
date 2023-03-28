import React from "react";
import styles from "../MovieTrailers/MovieTrailers.module.css";

function MovieTrailers({ movie }) {
  const YoutubeTrailer = `https://www.youtube.com/watch?v=${movie.yt_trailer_code}`;

  return (
    <div className={styles.trailersCenterDiv}>
      <div className={styles.trailersContainerDiv}>
        <div>
          <a href={YoutubeTrailer} target={YoutubeTrailer}>
            <img src={movie.medium_screenshot_image1} alt="trailerIMG"></img>
            Open Movie Trailer
          </a>
        </div>
        <div>
          <div>
            <img src={movie.medium_screenshot_image2} alt="trailerIMG"></img>
          </div>
        </div>
        <div>
          <div>
            <img src={movie.medium_screenshot_image3} alt="trailerIMG"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieTrailers;
