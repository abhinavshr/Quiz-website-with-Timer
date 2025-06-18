import React from "react";
import "../styles/ResultScreen.css";

function ResultScreen({ score, totalQuestions, onRestart }) {
  return (
    <div className="result-screen">
      <h2>Quiz Completed!</h2>
      <p>
        You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong>
      </p>
      <button className="restart-button" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default ResultScreen;
