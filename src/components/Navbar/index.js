import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  function handleBurger() {
    const burger = document.getElementById("burger");
    const navbar = document.getElementById("navbar");
    burger.classList.toggle("is-active");
    navbar.classList.toggle("is-active");
  }
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item navbar__logo">
          Quizzy
        </Link>
        <button
          id="burger"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={() => handleBurger()}
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/discover" className="navbar-item">
            Discover
          </Link>
          <Link to="/create" className="navbar-item">
            Create
          </Link>
          <Link to="/my-quizes" className="navbar-item">
            My Quizes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
