import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>Yapp</h1>
      <div className="homepage-buttons">
        <button onClick={() => navigate("/register")}>Create Account</button>
        <button onClick={() => navigate("/login")}>Log in</button>
        <button onClick={() => navigate("/browse")}>Browse</button>
      </div>
    </div>
  );
};

export default Homepage;