import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Alert from "./components/Alert/Alert";
import TextForm from "./components/TextForm/TextForm";

export type AttensionType = { msg: string; type: string } | null;

function App() {
  const [checked, setChecked] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("light");
  const [attension, setAttension] = useState<AttensionType>(null);

  const showAlert = (message: string, type: string): void => {
    setTimeout(() => {
      setAttension({ msg: message, type: type });
    }, 1000);
    setTimeout(() => {
      setAttension(null);
    }, 4000);
  };
  const toggleCheckboxMod = (): void => {
    setChecked(!checked);

    if (mode === "light") {
      setMode("dark");
      document.body.classList.add("dark-mode");
      document.body.style.backgroundColor = "#333";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.classList.remove("dark-mode");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <div className="App">
      <NavBar
        toggleCheckboxMod={toggleCheckboxMod}
        checked={checked}
        showAlert={showAlert}
        mode={mode}
      />
      {attension && <Alert attension={attension} />}
      <TextForm alertText={showAlert} mode={mode} />
    </div>
  );
}

export default App;
