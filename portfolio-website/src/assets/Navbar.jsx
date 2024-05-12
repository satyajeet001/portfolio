import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="Images/logo.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto nav-items">
              <a className="nav-link" href="#home">
                Home
              </a>
              <a className="nav-link" href="#skills">
                Skills
              </a>
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </div>
            <a href="#connect" style={{ textDecoration: "none" }}>
              <button className="button-64" role="button">
                <span className="text">Let's Connect</span>
              </button>
            </a>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;
