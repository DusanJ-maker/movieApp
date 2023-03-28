import React from "react";
import { useParams } from "react-router-dom";
import { useGetMovieQuery } from "../../../services/movieApi";
import styles from "../MoviePlotAndCast/MoviePlotAndCast.module.css";

function MoviePlotAndCast() {
  const { movieID } = useParams();
  const { data, isLoading, isSuccess, error } = useGetMovieQuery(movieID);

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

    return (
      <div className={styles.castCentralDiv}>
        <div className={styles.castGridDiv}>
          <div className={styles.plotDiv}>
            <div className={styles.plotFlexDiv}>
              <h3>Plot Summary</h3>
              <p>{movie.description_intro}</p>
            </div>
          </div>
          <div className={styles.castDiv}>
            <h2>Cast</h2>
            {movie.cast?.map((actor) => {
              return (
                <div>
                  <div className={styles.castInfo}>
                    <a
                      href={`https://www.imdb.com/name/nm${actor.imdb_code}`}
                      target={`https://www.imdb.com/name/nm${actor.imdb_code}`}
                    >
                      <img src={actor.url_small_image} alt="castImg"></img>
                    </a>
                    <a
                      href={`https://www.imdb.com/name/nm${actor.imdb_code}`}
                      target={`https://www.imdb.com/name/nm${actor.imdb_code}`}
                    >
                      <h4>{actor.name}</h4>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePlotAndCast;
