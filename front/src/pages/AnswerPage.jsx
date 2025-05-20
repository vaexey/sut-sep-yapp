import React from 'react';
import { useParams } from 'react-router-dom';

const AnswerPage = () => {
  const { questionId } = useParams();

  // Przykładowa odpowiedź — w przyszłości pobrana z bazy
  const fakeAnswer = {
    1: 'My favorite book is "1984" by George Orwell.',
    2: 'I started coding in high school with HTML and JavaScript.',
    3: 'I’d love to work as a product designer at a tech company.',
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Answer to Question {questionId}</h2>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>{fakeAnswer[questionId] || 'Answer not found.'}</p>
    </div>
  );
};

export default AnswerPage;
