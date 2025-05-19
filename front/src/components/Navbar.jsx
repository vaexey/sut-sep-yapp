import React from 'react';
import { FaUser, FaSearch, FaCommentAlt, FaCog } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <FaUser className="nav-icon" />
      <FaSearch className="nav-icon" />
      <FaCommentAlt className="nav-icon" />
      <FaCog className="nav-icon" />
    </div>
  );
};

export default Navbar;
