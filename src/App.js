import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, "1500");
    
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark mode enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="My 1st React App" mode={mode} modeToggle={toggleMode} />
      <Alert alert={alert} />
      <TextField showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    </>
  );
}

export default App;
