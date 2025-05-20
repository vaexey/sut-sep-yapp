import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Profile.css';

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleAskQuestion = () => {
    navigate(`/ask/${username}`);
  };

  return (
    <div className="profileContainer">
      <h1 className="profileTitle">Profile: {username}</h1>
      <p className="profileInfo">This is {username}'s public profile page.</p>
      <button className="backButton" onClick={handleAskQuestion}>
        Ask Question
      </button>
    </div>
  );
};

export default Profile;
