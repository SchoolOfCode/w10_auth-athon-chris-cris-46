import React, { useState } from "react";

import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";
import Profile from "../LoginProfile/LoginProfile";

import "./App.css";
import CalendarComp from "../Calendar/Calendar";

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleBG() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  const themeStyles = {
    backgroundColor: darkTheme ? "lightblue" : "orange",
  };

  return (
    <div className="App" style={themeStyles}>
      <ThemeContext.Provider value={darkTheme}>
        <LoginButton />
        <button className="fourth" onClick={toggleBG}>
          Toggle Theme
        </button>
        <Profile />
        <CalendarComp />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
