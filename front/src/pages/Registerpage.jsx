import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Loginpage.css'; // Używamy tych samych stylów co logowanie

const Registerpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Utworzono konto dla: ${username}`);
    // tutaj możesz dodać logikę zapisu do backendu lub localStorage
    navigate('/login'); // przekieruj do logowania po rejestracji
  };

  return (
    <div className="browse">
      <div className="leftCol">
        <p className="title">Yapp</p>
        <p className="description">Create a new account</p>
        <button className="backButton" onClick={() => navigate('/')}>
          Back
        </button>
      </div>

      <div className="rightCol">
        <form onSubmit={handleRegister} className="loginForm">
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registerpage;
