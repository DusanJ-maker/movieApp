import React from 'react';
import { useState } from 'react';
import '../Burger/Burger.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../../../features/auth/authSlice';
import ModalAddMovie from '../../Modal/ModalAddMovie';


function Burger({ setShowInfo, showInfo }) {
  const [showModal, setShowModal] = useState(false);

  const { role } = useSelector(state => state.persistedReducer.auth.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickBurgerHandler = () => {

    //dispatch logout
    dispatch(logoutUser());

    //close burger
    setShowInfo(false);
  }

  const loginHandler = () => {
    navigate("/login");
    setShowInfo(false);
  }

  const addMovieHandler = () => {
    setShowModal(true);
    setShowInfo(false);
  }

  return (
    <>
      <div id="overlayMobileMenu" onClick={() => setShowInfo(false)} style={{ display: showInfo ? "block" : "none" }}></div>
      <div id="overlayMenu" style={{ display: showInfo ? "block" : "none" }}>
        <ul>
          <li>
            <div><Link to="/">Home</Link></div>
          </li>
          <li>
            <div><a href="#team">Trending</a></div>
          </li>
          <li>
            <div><Link to="/profile">Profile</Link></div>
          </li>
          {!role ? <li onClick={loginHandler}><p>Login</p></li>
            : <li onClick={clickBurgerHandler}><p>Logout</p></li>}
          {role === "admin" && <li>
            <p onClick={addMovieHandler}>Add movie</p>
          </li>}
        </ul>
      </div>
      {showModal && <ModalAddMovie setShowModal={setShowModal} />}
    </>
  )
}

export default Burger;