import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

function QuizApp() {
  // do not modify the questions or answers below
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // Handle option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle submit
  const handleSubmit = () => {
    if (!selectedOption) {
      setFeedback("Please select an option!");
      return;
    }

    const isCorrect = selectedOption === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect!");
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(""); // Reset selected option
    } else {
      setIsQuizComplete(true);
    }
  };


  return (
    <div style={style.container}>
    {isQuizComplete ? (
      <div id="feedback" style={style.feedback}>
        Quiz Complete! You scored {score} out of {questions.length}.
      </div>
    ) : (
      <>
        <div id="question" style={style.question}>
          {questions[currentQuestion].question}
        </div>
        <div style={style.options}>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option${index + 1}`}
                name="quiz"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option${index + 1}`}>{option}</label>
            </div>
          ))}
        </div>
        <button style={style.button} onClick={handleSubmit}>
          Submit
        </button>
        <div id="feedback" style={style.feedback}>
          {feedback}
        </div>
      </>
    )}
  </div>
);
}

export default QuizApp