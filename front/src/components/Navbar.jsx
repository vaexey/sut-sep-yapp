import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSearch, FaCommentAlt, FaCog } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleUser = () => {
    if (isLoggedIn) {
      navigate(`/my-profile`);
    } else {
      navigate(`/login`);
    }
  };

  const handleSearch = () => {
    navigate(`/browse`);
  };

  const handleInbox = () => {
    if (isLoggedIn) {
      navigate(`/inbox`);
    } else {
      navigate(`/login`);
    }
  };

  const handleSettings = () => {
    if (isLoggedIn) {
      navigate(`/settings`);
    } else {
      navigate(`/login`);
    }
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
