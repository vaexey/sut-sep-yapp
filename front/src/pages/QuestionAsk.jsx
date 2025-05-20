import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/QuestionAsk.css';

const QuestionAsk = () => {
  const { username } = useParams();
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Question sent to ${username}: ${question}`);
    setQuestion('');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="askContainer">
      <h2>Ask a question to {username}</h2>
      <form onSubmit={handleSubmit} className="askForm">
        <textarea
          className="askTextarea"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <button className="backButton" onClick={handleBack}>
          Back
        </button>
        <button type="submit" className="backButton">
          Send
        </button>
      </form>
    </div>
  );
};

export default QuestionAsk;
