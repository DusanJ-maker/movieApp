import { useParams } from "react-router-dom";
import { useGetMovieQuery } from "../../services/movieApi";
import styles from "../MovieDetail/MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDown,
  faHeart,
  faFilm,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import MovieSuggestions from "./MovieSuggestions/MovieSuggestions";
import MoviePlotAndCast from "./MoviePlotAndCast/MoviePlotAndCast";
import MovieTrailers from "./MovieTrailers/MovieTrailers";
import MovieTechSpecs from "./MovieTechSpecs/MovieTechSpecs";
import MovieComments from "./MovieComments/MovieComments";
import useWindowsSize from "../../hooks/useWindowsSize";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function MovieDetail() {
  const size = useWindowsSize();
  const { movieID } = useParams();
  const { data, isLoading, isSuccess, error } = useGetMovieQuery(movieID);

  const downloadIcon = <FontAwesomeIcon icon={faCircleDown} />;
  const heartIcon = <FontAwesomeIcon icon={faHeart} />;
  const filmIcon = <FontAwesomeIcon icon={faFilm} />;
  const starIcon = <FontAwesomeIcon icon={faStarHalfStroke} />;

  if (isLoading) {
    return (
      <div>
        <Header />
        <h1>loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <Header />
        <h1>Error...</h1>
      </div>
    );
  }

  if (isSuccess) {
    const movie = data.data.movie;


    return (
      <>
        <Header />
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
              <h3>
                Language: <span>[{movie.language}]</span>
              </h3>
              <h4>
                Available in:
                <span>
                  {movie?.torrents[0]?.quality}.{movie?.torrents[0]?.type}
                </span>
                <span>
                  {movie?.torrents[1]?.quality}.{movie?.torrents[0]?.type}
                </span>
              </h4>
              <h3 className={styles.downloadIcon}>
                {downloadIcon} Download subtitles
              </h3>
              <h3 className={styles.likeIcon}>
                {heartIcon} {movie.like_count}
              </h3>
              <h3>
                {filmIcon} {movie.download_count} downloads
              </h3>
              <h3 className={styles.starIcon}>
                {starIcon} {movie.rating} rating
              </h3>
            </div>
            <div className={styles.movieSuggestions}>
              <h3>Similar movies</h3>
              <MovieSuggestions movieID={movieID} />
            </div>
            {size.width < 1023 && size.width > 767 && <MovieTrailers movie={movie} />}
          </div>
        </div>
        {size.width > 1023 && <MovieTrailers movie={movie} />}

        <MoviePlotAndCast />

        <MovieTechSpecs movieID={movieID} />

        <MovieComments />

        <Footer />
      </>
    );
  }
}

export default MovieDetail;
