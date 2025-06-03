import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Profile.css';

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleAskQuestion = () => {
    navigate(`/ask/${username}`);
  };

  // Przykładowe pytania
  const questions = [
    { id: 1, text: 'What is your favorite book?', fromUser: 'alice123', avatar: '🙋‍♂️' },
    { id: 2, text: 'How did you start coding?', fromUser: 'bob_the_builder', avatar: '🙋‍♂️' },
    { id: 3, text: 'What’s your dream job?', fromUser: 'charlie88', avatar: '🙋‍♂️' },
  ];

  const handleShowAnswer = (questionId) => {
    navigate(`/answer/${questionId}`);
  };

  return (
    <div className="profileContainer">
      <h1 className="profileTitle">Profile: {username}</h1>
      <p className="profileInfo">This is {username}'s public profile page.</p>
      <button className="backButton" onClick={handleAskQuestion}>
        Ask Question
      </button>

      <div className="questionsSection">
        {questions.map((q) => (
          <div className="questionItem" key={q.id}>
            <div className="questionAuthor">
              <div className="avatarCircle">{q.avatar}</div>
              <div className="questionText">{q.text}</div>
            </div>
            <button className="showAnswer" onClick={() => handleShowAnswer(q.id)}>
              Show answer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
