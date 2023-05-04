import React, { useState } from "react";
import styles from "../MovieTrailers/MovieTrailers.module.css";
import ReactPlayer from 'react-player'
import Modal from "../../Modal/Modal";

function MovieTrailers({ movie }) {
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);


  const YoutubeTrailer = `https://www.youtube-nocookie.com/embed/${movie.yt_trailer_code}`;


  return (
    <div className={styles.trailersCenterDiv}>

      <div className={styles.trailersContainerDiv}>
        <div className={styles.reactPlayer}>
          <ReactPlayer url={YoutubeTrailer} width='100%' height='100%' />
        </div>
        <div>
          <div>
            <img src={movie.medium_screenshot_image2} alt="trailerIMG"></img>
            <button onClick={() => setShowModal2(true)}>show</button>
          </div>
        </div>
        <div>
          <div>
            <img src={movie.medium_screenshot_image3} alt="trailerIMG"></img>
            <button onClick={() => setShowModal3(true)}>show</button>
          </div>
        </div>
      </div>
      {showModal2 && <Modal showModal={showModal2} setShowModal={setShowModal2} img={movie.large_screenshot_image2} />}
      {showModal3 && <Modal showModal={showModal3} setShowModal={setShowModal3} img={movie.large_screenshot_image3} />}

    </div>

  );
}

export default MovieTrailers;
