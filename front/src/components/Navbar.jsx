import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaUser, FaSearch, FaCommentAlt, FaCog } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleUser = () => {
    navigate(`/my-profile`);
  };
  const handleSearch = () => {
    navigate(`/browse`);
  };
  const handleInbox = () => {
    navigate(`/inbox`);
  };
  const handleSettings = () => {
    navigate(`/my-profile`);
  };
  return (
    <div className="navbar">
      <button className="navButton" onClick={handleUser}>
        <FaUser className="nav-icon" />
      </button>
      <button className="navButton" onClick={handleSearch}>
        <FaSearch className="nav-icon" />
      </button>
      <button className="navButton" onClick={handleInbox}>
        <FaCommentAlt className="nav-icon" />
      </button>
      <button className="navButton" onClick={handleSettings}>
        <FaCog className="nav-icon" />
      </button>
    </div>
  );
};

export default Navbar;
