import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.navMode} bg-${props.navMode}`}
    >
      <div className=" d-flex container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              props.color("primary");
            }}
            style={{ height: "20px", width: "30px" }}
          ></button>
          <button
            className="btn btn-warning m-2"
            onClick={() => {
              props.color("warning");
            }}
            style={{ height: "20px", width: "30px" }}
          ></button>
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              props.color("danger");
            }}
            style={{ height: "20px", width: "30px" }}
          ></button>
          <button
            className="btn btn-success m-2"
            onClick={() => {
              props.color("success");
            }}
            style={{ height: "20px", width: "30px" }}
          ></button>

          <div
            className={`m-2 form-check form-switch text-${
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

// Navbar.defaultProps = {
//   title: "hello",
//   about: "hii",
// };
