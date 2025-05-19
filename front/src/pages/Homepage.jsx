import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <p className="title">Yapp</p>
      <div className="homepage-buttons">
        <button className="button" onClick={() => navigate('/register')}>
          Create Account
        </button>
        <button className="button" onClick={() => navigate('/login')}>
          Log in
        </button>
        <button className="button" onClick={() => navigate('/browse')}>
          Browse
        </button>
      </div>
    </div>
  );
};

export default Homepage;
