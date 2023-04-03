import React from "react";
import styles from "../MovieTechSpecs/MovieTechSpecs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faClock, faClosedCaptioning, faEye, faFolderOpen, faTv, faUpRightAndDownLeftFromCenter, faVolumeControlPhone } from "@fortawesome/free-solid-svg-icons";
import { useGetMovieQuery } from "../../../services/movieApi";

function MovieTechSpecs({movieID}) {

    const {data, isLoading, isSuccess, error} = useGetMovieQuery(movieID);

    const folderIcon = <FontAwesomeIcon icon={faFolderOpen} />;
    const sizeIcon = <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />;
    const volumeIcon = <FontAwesomeIcon icon={faVolumeControlPhone} />;
    const eyeIcon = <FontAwesomeIcon icon={faEye} />;
    const ccIcon = <FontAwesomeIcon icon={faClosedCaptioning} />;
    const tvIcon = <FontAwesomeIcon icon={faTv} />;
    const clockIcon = <FontAwesomeIcon icon={faClock} />;
    const progressIcon =<FontAwesomeIcon icon={faBarsProgress} />;

    if (isLoading) {
        return (
          <div>
            <h1>loading...</h1>
          </div>
        );
      }
      if (error) {
        return (
          <div>
            <h1>Error...</h1>
          </div>
        );
      }

      if (isSuccess) {
        const movie = data.data.movie;
        console.log(movie)


  return (
    <div className={styles.centralDiv}>
      <div className={styles.divGrid}>
        <header className={styles.flexDiv1}>
          <div>
            <h2>Tech specs</h2>
          </div>
          <div className={styles.flexSpecs}>
            <div>
              <h3>720p</h3>
            </div>
            <div>
              <h3>1080p</h3>
            </div>
            <div>
              <h3>2060p</h3>
            </div>
          </div>
        </header>
        <div className={styles.flexDiv2}>
          <h3 title="Size">
            {folderIcon} {movie.torrents[0].size}
          </h3>
          <h3 title="Resolution">{sizeIcon} resolution</h3>
          <h3 title="Language">
            {volumeIcon} {movie.language}
          </h3>
          <h3 title="MPA rating">
            {eyeIcon} {movie.mpa_rating}
          </h3>
        </div>
        <div className={styles.flexDiv3}>
          <h3 title="Subtitles">{ccIcon} Subtitles</h3>
          <h3 title="Type">
            {tvIcon} {movie.torrents[0].type}
          </h3>
          <h3 title="Runtime">{clockIcon} 1hr 25</h3>
          <h3 title="Peers & Seeds">
            {progressIcon} {movie.torrents[0].peers}/{movie.torrents[0].seeds}
          </h3>
        </div>
      </div>
    </div>
  );
}}

export default MovieTechSpecs;
