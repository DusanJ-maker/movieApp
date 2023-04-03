import React, { useState } from "react";
import styles from "../MovieTrailers/MovieTrailers.module.css";
import ReactPlayer from 'react-player'
import Modal from "../../Modal/Modal";

function MovieTrailers({ movie }) {
  const [showModal, setShowModal] = useState(null);

  const YoutubeTrailer = `https://www.youtube-nocookie.com/embed/${movie.yt_trailer_code}`;


  return (
    <div className={styles.trailersCenterDiv}>
      
      <div className={styles.trailersContainerDiv}>
        <div className={styles.reactPlayer}>
          <ReactPlayer url={YoutubeTrailer} width='100%' height='100%'/>
        </div>
        <div>
          <div>
            <img src={movie.medium_screenshot_image2} alt="trailerIMG"></img>
            <button  onClick={() => setShowModal(true)}>show</button>
            
      
          </div>
        </div>
        <div>
          <div>
            <img src={movie.medium_screenshot_image3} alt="trailerIMG"></img>
            <button  onClick={() => setShowModal(true)}>show</button>
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </div>
    
  );
}

export default MovieTrailers;
