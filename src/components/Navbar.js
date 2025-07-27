import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg`}
      style={{
        backgroundColor: props.navMode === "dark" ? "#343a40" : "#0a0a45",
        color: props.navMode === "dark" ? "white" : "black",
        width: "100%",
        padding: "0 40px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div className=" d-flex container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            color: props.navMode === "dark" ? "orange" : "white",
            fontWeight: "bold",
          }}
        >
          {props.title}
        </Link>

        <div className="d-flex align-items-center flex-wrap justify-content-center">
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
              style={{
                color: props.navMode === "dark" ? "orange" : "white",
              }}
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
