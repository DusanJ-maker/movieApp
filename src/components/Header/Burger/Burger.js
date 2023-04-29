import React from 'react';
import "../Burger/Burger.css"

function Burger() {
  return (
    <>
    <div id="overlayMobileMenu"></div>
    <div id="overlayMenu">
      <ul>
        <li>
          <div><a href="#products">Home</a></div>
          <div></div>
        </li>
        <li>
          <div><a href="#features">4K</a></div>
          <div></div>
        </li>
        <li>
          <div><a href="#team">Trending</a></div>
          <div></div>
        </li>
        <li>
          <div><a href="#faq">Movies</a></div>
          <div></div>
        </li>
        <li>
          <div><a href="#contact">Login</a></div>
          <div></div>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Burger