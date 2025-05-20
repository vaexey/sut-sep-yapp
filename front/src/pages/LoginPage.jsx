import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    //here api login
    navigate('/my-profile');
  };

  return (
    <div className="loginContainer">
      <h2 className="loginTitle">Login</h2>
      <form className="loginForm" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="loginInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="loginInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Login
        </button>
      </form>
      <p className="loginText">
        Don't have an account?{' '}
        <button className="linkButton" onClick={() => navigate('/register')}>
          Register here
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
