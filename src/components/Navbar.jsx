import React from "react";
import iconogpt from "../assets/chatgpticon.png";
import iconogptdark from "../assets/chatgpticon2.png";

const Navbar = ({ darkMode, changeMode }) => {
  return (
    <div className="sticky-top">
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "bg-dark navbar-dark" : "bg-light"
        }`}
      >
        <div className="container-fluid">
          <img
            src={darkMode ? iconogptdark : iconogpt}
            alt="chatgpt"
            className="iconogpt"
          />
          <a className="navbar-brand" href="#">
            ChatGPT
          </a>
          <div className="d-flex align-items-center order-lg-1">
            <div className="form-check form-switch me-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onChange={changeMode}
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  App
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
