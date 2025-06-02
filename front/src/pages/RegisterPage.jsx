import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    //api register
    navigate('/login');
  };

  return (
    <div className="registerContainer">
      <h2 className="registerTitle">Register</h2>
      <form className="registerForm" onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          className="registerInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          className="registerInput"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="registerInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Register
        </button>
      </form>
      <p className="registerText">
        Already have an account?{' '}
        <button className="linkButton" onClick={() => navigate('/login')}>
          Login here
        </button>
      </p>
    </div>
  );
};

export default RegisterPage;
