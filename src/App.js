import "./Appa.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textform from "./components/Textform";
// import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");

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
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#9ea78e99 ";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils-Dark mode";
      removeBodyclasses();

      //  setInterval(() => {
      //    document.title="Textutils is good website";

      //   }, 1000);

      // setInterval(() => {
      //   document.title="Install Textutils now"

      //  }, 2000);
    } else {
      setmode("light");
      document.body.style.backgroundColor = " #ebe7d7";
      document.title = "Textutils-Light mode";
      showAlert("Light mode has been enabled", "success");
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
              heading=" TextUtils-Case converter, Copy text, Word counter, Character counter"
              navMode={mode}
            />
          }
        />
        {/* <Route path="/about" element={<About navMode={mode} />} /> */}
      </Routes>
    </>
  );
}

export default App;
