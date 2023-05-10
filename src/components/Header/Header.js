import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Hero from "../Hero/Hero";
import ModalAddMovie from "../Modal/ModalAddMovie";
import imgLogo from "../Header/assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";
import Burger from "./Burger/Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useWindowsSize from "../../hooks/useWindowsSize";


function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const { role, img, name } = useSelector(state => state.persistedReducer.auth.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const burger = <FontAwesomeIcon icon={faBars} />
  const size = useWindowsSize();

  const loginHandler = () => {
    navigate('/login');
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
  }


  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          <img src={imgLogo} alt="Movie logo" />
        </Link>
        {/* <span className={styles.headerSlogan}>
          Best HD movies.
        </span> */}
        <ul className={styles.navLinks}>
          {/* <input
            type="text"
            className={styles.navSearch}
            id="navSearch"
            placeholder="Search.."
          /> */}
          <li className={styles.navItemAddMovie}>
            {role === "admin" && <p onClick={() => setShowModal(true)}>Add movie</p>}
          </li>
          <li className={styles.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navLinkProfile}>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <ul className={styles.navLinksUserInfo}>
          <li className={styles.userImg}>
            {role ? <Link to="/profile">
              <img src={img} alt="userImg"></img>
            </Link> : <Link to="/login">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png" alt="userImg"></img>
            </Link>
            }</li>
          {role ? <li className={styles.userInfo}>
            <p>Name: {name}</p>
            <p>[Role: {role}]</p>
          </li>
            : <li className={styles.userInfo}>
              <p>Name: guest</p>
              <p>[Role: guest]</p>
            </li>}
          <li className={styles.navItem}>
            {!role ? <p onClick={loginHandler}>Login</p>
              : <p onClick={logoutHandler}>Logout</p>}
          </li>
          {size.width < 1023 && <span onClick={() => setShowInfo(true)}>{burger}</span>}
        </ul>

      </nav>
      <Hero />
      {showModal && <ModalAddMovie setShowModal={setShowModal} />}
      <Burger setShowInfo={setShowInfo} showInfo={showInfo} />

    </>
  );
}

export default Header;
