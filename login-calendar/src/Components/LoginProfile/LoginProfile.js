import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import "./LoginProfile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div class="card">
          <img className="profile-img" src={user.picture} alt={user.name} />

          <p class="title">Logged in as:</p>
          <h1>{user.name}</h1>
          <p>{user.email}</p>

          <p>
            <LogoutButton />
          </p>
        </div>
      </div>
    )
  );
};

export default Profile;
