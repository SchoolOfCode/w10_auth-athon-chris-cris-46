import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./LoginButton.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <label>
        <h1> Login to view calendar</h1>
        <br></br>
        <button className="login-button" onClick={() => loginWithRedirect()}>
          Login
        </button>
      </label>
    )
  );
};

export default LoginButton;
