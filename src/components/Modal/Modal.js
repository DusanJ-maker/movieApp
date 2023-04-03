import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { stateMovieDetails } from "../../features/movies/movieSlice";
import styles from "../Modal/Modal.module.css";

const Modal = ({ showModal, setShowModal, imgSrc}) => {
  const movie = useSelector(stateMovieDetails);
  console.log(movie)

  if (showModal === null) {
    return null;
  }

  return createPortal(
    <div className={styles.modal} onClick={() => setShowModal(null)}>
      <div className={styles.modalContent} onClick={() => setShowModal(null)}>
        <img src={imgSrc} alt="imgimg"></img>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
