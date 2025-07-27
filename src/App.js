import "./Appa.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textform from "./components/Textform";
// import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const enableMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils-Light mode";
      removeBodyclasses();
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.title = "Textutils-Dark mode";
      showAlert("Dark mode has been enabled", "success");
      removeBodyclasses();
    }
  };

  const toggle = () => {
    enableMode();
  };

  const removeBodyclasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };

  const color = (cls) => {
    removeBodyclasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        // about="About"
        toggleMode={toggle}
        navMode={mode}
        color={color}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Textform
              showAlert={showAlert}
              heading=" Textutils - Text Manipulation "
              navMode={mode}
              color={color}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
