import React from "react";
import "../styles/Question.css";

function Question({ question, onAnswer, isAnswered, userAnswer }) {
  return (
    <div className="question-container">
      <p className="question-text">{question.question}</p>
      <ul className="options">
        {question.options.map((option, index) => {
          let className = "option-button";
          if (isAnswered) {
            if (index === question.correct) {
              className += " correct";
            } else if (index === userAnswer) { 
              className += " incorrect";
            }
          }

          return (
            <li key={index}>
              <button
                className={className}
                onClick={() => onAnswer(index)}
                disabled={isAnswered}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Question;

