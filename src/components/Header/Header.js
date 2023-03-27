import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import Hero from "../Hero/Hero"
import img from "../Header/assets/logo.png"

function Header() {
  return (
    <>
    <nav className={styles.navbar}>
      <a href="https://freecodecamp.org" className={styles.logo}>
        <img
          src={img}
          alt="Movie logo"
        />
      </a>
      <span className={styles.headerSlogan}>
        HD movies at the smallest file size.
      </span>
      <ul className={styles.navLinks}>
        <input type="text" className={styles.navSearch} id="navSearch" placeholder="Search.." />
        <li className={styles.navItem}>
        <Link to="/">Home</Link>
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
          <Link to="#">Login</Link>
          </li>
          <p className={styles.loginPipe}>|</p>
          <li>
          <Link to="/">Home</Link>
          </li>
        </ul>
      </ul>
    </nav>
  <Hero />
    </>
  );
}

export default Header;
