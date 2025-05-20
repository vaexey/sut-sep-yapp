import React, { useState } from 'react';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const username = 'User1';

  const answeredQuestions = [
    {
      id: 1,
      text: 'What is your favorite framework and why?',
      fromUser: 'bob_the_builder',
      answer: 'React, because it is flexible and component-based.',
    },
    {
      id: 2,
      text: 'How do you stay productive?',
      fromUser: 'alice123',
      answer: 'By planning my day and taking regular breaks.',
    },
  ];

  const handleReport = (id) => {
    alert(`Zgłoszono pytanie o ID: ${id}`);
  };

  return (
    <div className="myProfileContainer">
      <h1 className="myProfileTitle">My Profile: {username}</h1>

      <div className="questionsToMeSection">
        <h2 className="sectionTitle">Answered questions</h2>
        {answeredQuestions.length === 0 ? (
          <p className="noQuestions">You haven't answered any questions yet.</p>
        ) : (
          answeredQuestions.map((q) => (
            <div className="questionItem" key={q.id}>
              <div className="questionInfo">
                <div className="avatarCircle">👤</div>
                <div className="questionText">
                  <strong>{q.fromUser}:</strong> {q.text}
                </div>
              </div>
              <div className="submittedAnswer">
                <strong>Your answer:</strong> {q.answer}
              </div>
              <button className="reportButton" onClick={() => handleReport(q.id)}>
                Report
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyProfile;
