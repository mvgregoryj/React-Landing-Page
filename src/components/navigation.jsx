import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#page-top">
          <img src="/img/logo.png" alt="logo" width="100"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <a className="nav-link nav-item" href="#carousel">
              Nosotros
            </a>
            <a className="nav-link nav-item" href="#portfolio">
              Videos
            </a>
            <a className="nav-link nav-item" href="#services">
              Servicios
            </a>
            <a className="nav-link nav-item" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
