import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App(props) {
  const [mode, setMode] = React.useState(props.darkMode);
  console.log(mode);
  function handleMode() {
    setMode((prev) => !prev);
  }

  return (
    <>
      <Header mode={mode} handleModeBtn={handleMode} />
      <Main />
    </>
  );
}

export default App;
