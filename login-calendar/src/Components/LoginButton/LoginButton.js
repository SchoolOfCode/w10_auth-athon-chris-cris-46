import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./LoginButton.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="wrapper">
        <h1> Login to view calendar</h1>
        <img
          className="logo"
          src="https://www.freeiconspng.com/uploads/calendar-image-png-3.png"
          alt="app-logo"
        ></img>
        <br></br>
        <button className="login-button" onClick={() => loginWithRedirect()}>
          Login
        </button>
      </div>
    )
  );
};

export default LoginButton;
