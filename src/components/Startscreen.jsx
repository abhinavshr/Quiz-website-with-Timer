import React from "react";
import "../styles/StartScreen.css";

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h2>Welcome to the Quiz!</h2>
      <p>Test your knowledge with a few quick questions.</p>
      <button onClick={onStart} className="start-button">
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
