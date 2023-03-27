import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../../services/movieApi";
import styles from "../MovieDetail/MovieDetail.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown, faHeart, faFilm, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import MovieSuggestions from "./MovieSuggestions/MovieSuggestions";

function MovieDetail() {
  const { movieID } = useParams();
  const { data, isLoading, isSuccess, error } = useGetPostQuery(movieID);

  const downloadIcon = <FontAwesomeIcon icon={faCircleDown}/>
  const heartIcon = <FontAwesomeIcon icon={faHeart}/>
  const filmIcon = <FontAwesomeIcon icon={faFilm}/>
  const starIcon = <FontAwesomeIcon icon={faStarHalfStroke} />

  if (isLoading) {
    return <div><h1>loading...</h1></div>;
  }
  if (error) {
    return <div><h1>Error...</h1></div>;
  }
  
  if(isSuccess){
    const movie = data.data.movie;

    return (
      <>
        <div className={styles.centralDiv}>
          <div className={styles.divGrid}>
            <div className={styles.flexImgSection}>
              <img src={movie.medium_cover_image} alt="movieImage"></img>
              <button>{downloadIcon} Download</button>
              <button>Watch now</button>
            </div>
            <div className={styles.itemGridTwo}>
              <h2>{movie.title}</h2>
              <h3>Year: {movie.year}</h3>
              <div></div>
              <h3>Language: <span>[{movie.language}]</span></h3>
              <h4>Available in: <span>{movie.torrents[0].quality}.{movie.torrents[0].type}</span>  <span>{movie.torrents[1].quality}.{movie.torrents[0].type}</span></h4>
              <h3 className={styles.downloadIcon}>{downloadIcon} Download subtitles</h3>
              <h3 className={styles.likeIcon}>{heartIcon} {movie.like_count}</h3>
              <h3>{filmIcon} {movie.download_count} downloads</h3>
              <h3 className={styles.starIcon}>{starIcon} {movie.rating} rating</h3>
            </div>
            <div>
              <h3>Similar movies</h3>
              <MovieSuggestions movieID={movieID}/>
              </div>
            
        </div>
        </div>
        
      </>
    );
  }
  
}

export default MovieDetail;
