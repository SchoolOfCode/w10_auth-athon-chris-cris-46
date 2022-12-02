import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./LogoutButton.css";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="logoutt-button"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
