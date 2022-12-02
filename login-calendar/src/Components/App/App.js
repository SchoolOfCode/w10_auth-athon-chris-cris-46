import { useState } from "react";

import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";
import Profile from "../LoginProfile/LoginProfile";

import "./App.css";
import CalendarComp from "../Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <LoginButton />

      <Profile />
      <CalendarComp />
    </div>
  );
}

export default App;
