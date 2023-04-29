import React from "react";
import { createPortal } from "react-dom";
import styles from "../Modal/Modal.module.css";

const Modal = ({ setShowModal, img }) => {


  return createPortal(
    <div className={styles.modal} onClick={() => setShowModal(false)}>
      <div className={styles.modalContent}>
        <img src={img} alt="imgimg"></img>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
