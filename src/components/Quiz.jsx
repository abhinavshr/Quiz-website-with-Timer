import React, { useState } from "react";
import { questions } from "../data/questions";
import Question from "./Question";
import Timer from "./Timer";
import "../styles/Quiz.css";

function Quiz({ onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  const handleTimeUp = () => {
    setIsAnswered(true);
    setTimeout(() => {
      goToNext();
    }, 1000);
  };    

const handleAnswer = (selectedIndex) => {
  if (isAnswered) return;

  setIsAnswered(true);

  const isCorrect = selectedIndex === currentQuestion.correct;
  let updatedScore = score;

  if (isCorrect) {
    updatedScore = score + 1;
    setScore(updatedScore);
  }

  setTimeout(() => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setIsAnswered(false);
    } else {
      onFinish(updatedScore, questions.length);
    }
  }, 1000);
};

  const goToNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < totalQuestions) {
      setCurrentIndex(nextIndex);
      setIsAnswered(false);
    } else {
      onFinish(score, totalQuestions); 
    }
  };

  return (
    <div>
      <h2>
        Question {currentIndex + 1} of {totalQuestions}
      </h2>
      <Timer duration={15} onTimeUp={handleTimeUp} trigger={currentIndex} />
      <Question
        question={currentQuestion}
        onAnswer={handleAnswer}
        isAnswered={isAnswered}    />
    </div>
  );
}

export default Quiz;
