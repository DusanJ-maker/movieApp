import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Hero from "../Hero/Hero";
import ModalAddMovie from "../Modal/ModalAddMovie";
import img from "../Header/assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const { role } = useSelector(state => state.persistedReducer.auth.userInfo);
  const dispatch = useDispatch();

  const clickBurgerHandler = () => {
    // const headerBurger = document
    const overlay = document.getElementById("overlayMobileMenu");
    const overlayMenu = document.getElementById("overlayMenu");

    if (overlay.style.display === "block" && overlayMenu.style.display === "block") {
      overlay.style.display = "none";
      overlayMenu.style.display = "none";
    } else {
      overlay.style.display = "block";
      overlayMenu.style.display = "block";
    }
  }

  return (
    <>
      <nav className={styles.navbar}>
        <a href="localhost:3000" className={styles.logo}>
          <img src={img} alt="Movie logo" />
        </a>
        <span className={styles.headerSlogan}>
          HD movies at the smallest file size.
        </span>
        <div>
          <ul>
            <li className={styles.burger} onClick={clickBurgerHandler}>
              <div></div>
              <div></div>
              <div></div>
            </li>
          </ul>
        </div>
        <ul className={styles.navLinks}>
          <input
            type="text"
            className={styles.navSearch}
            id="navSearch"
            placeholder="Search.."
          />
          <li className={styles.navItemAddMovie}>
            {role === "admin" && <p onClick={() => setShowModal(true)}>Add movie</p>}
          </li>
          <li className={styles.navItem}>
            <Link to="#">4K</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="#">Trending</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/">Browse Movies</Link>
          </li>
          <ul className={styles.navLinkGuest}>
            <li>
              {!role && <Link to="login">Login</Link>}
            </li>
            {/* <p className={styles.loginPipe}>|</p> */}
            <li>
              {role && <p onClick={() => dispatch(logoutUser())}>Logout</p>}
            </li>
          </ul>
        </ul>
      </nav>
      <Hero />
      {showModal && <ModalAddMovie setShowModal={setShowModal} />}
    </>
  );
}

export default Header;
