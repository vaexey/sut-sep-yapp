import React, { useState } from 'react';
import '../styles/QuestionInbox.css';

const QuestionInbox = () => {
  const questions = [
    { id: 101, text: 'What motivates you to code?', fromUser: 'charlie88' },
    { id: 102, text: 'What do you think about TypeScript?', fromUser: 'devMaster' },
  ];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (id) => {
    setSubmitted((prev) => ({ ...prev, [id]: answers[id] }));
    setAnswers((prev) => ({ ...prev, [id]: '' }));
  };

  const handleReport = (id) => {
    alert(`Zgłoszono pytanie o ID: ${id}`);
  };

  const unanswered = questions.filter((q) => !submitted[q.id]);

  return (
    <div className="questionInboxContainer">
      <h1 className="questionInboxTitle">Question Inbox</h1>

      {unanswered.length === 0 ? (
        <p className="noQuestions">No new questions.</p>
      ) : (
        unanswered.map((q) => (
          <div className="questionItem" key={q.id}>
            <div className="questionInfo">
              <div className="avatarCircle">👤</div>
              <div className="questionText">
                <strong>{q.fromUser}:</strong> {q.text}
              </div>
            </div>
            <textarea
              className="answerTextarea"
              placeholder="Type your answer..."
              value={answers[q.id] || ''}
              onChange={(e) => handleChange(q.id, e.target.value)}
            />
            <div className="actionButtons">
              <button className="submitAnswerButton" disabled={!answers[q.id]} onClick={() => handleSubmit(q.id)}>
                Send Answer
              </button>
              <button className="reportButtonInbox" onClick={() => handleReport(q.id)}>
                Report
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default QuestionInbox;
