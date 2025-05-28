import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Loginpage.css';

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Zalogowano jako: ${username}`);
  };

  return (
    <div className="browse"> {/* <- ten sam layout co w Browse */}
      <div className="leftCol">
        <p className="title">Yapp</p>
        <p className="description">Log in to your account</p>
        <button className="backButton" onClick={() => navigate('/')}>
          Back
        </button>
      </div>

      <div className="rightCol">
        <form onSubmit={handleLogin} className="loginForm">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="searchInput"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="searchInput"
            required
          />
          <button type="submit" className="backButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
