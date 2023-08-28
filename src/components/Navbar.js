import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.navMode} bg-${props.navMode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {" "}
                Home{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          {/*<form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
    </form>  */}

          <div className="flex">
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                props.color("primary");
              }}
              style={{ height: "20px", width: "30px" }}
            ></button>
            <button
              className="btn btn-warning mx-2"
              onClick={() => {
                props.color("warning");
              }}
              style={{ height: "20px", width: "30px" }}
            ></button>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                props.color("danger");
              }}
              style={{ height: "20px", width: "30px" }}
            ></button>
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                props.color("success");
              }}
              style={{ height: "20px", width: "30px" }}
            ></button>
          </div>

          <div
            className={`form-check form-switch text-${
              props.navMode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "hello",
  about: "hii",
};
