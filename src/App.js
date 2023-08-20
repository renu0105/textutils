import "./Appa.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textform from "./components/Textform";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

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
      document.body.style.backgroundColor = "#262450";
      showAlert("dark mode has been enalebed", "success");
      document.title = "Textutils-Dark mode";

      //  setInterval(() => {
      //    document.title="Textutils is good website";

      //   }, 1000);

      // setInterval(() => {
      //   document.title="Install Textutils now"

      //  }, 2000);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Textutils-Light mode";
      showAlert("light mode has been enalebed", "success");
    }
  };

  const toggle = () => {
    enableMode();
  };

  return (
    <>
      <Navbar
        title="Textutils"
        about="About"
        toggleMode={toggle}
        navMode={mode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Textform showAlert={showAlert} navMode={mode} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
