import React, { useState } from "react";
import Quiz from "./components/Quiz";
import ResultScreen from "./components/ResultScreen";
import StartScreen from "./components/Startscreen";
import "./styles/App.css";

function App() {
  const [step, setStep] = useState("start");
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleStart = () => {
    setStep("quiz");
    setScore(0);
  };

  const handleFinish = (finalScore, totalQs) => {
    setScore(finalScore);
    setTotalQuestions(totalQs);
    setStep("result");
  };

  const handleRestart = () => {
    setStep("start");
    setScore(0);
    setTotalQuestions(0);
  };

  let component;
  switch (step) {
    case "start":
      component = <StartScreen onStart={handleStart} />;
      break;
    case "quiz":
      component = <Quiz onFinish={handleFinish} />;
      break;
    case "result":
      component = (
        <ResultScreen
          score={score}
          totalQuestions={totalQuestions}
          onRestart={handleRestart}
        />
      );
      break;
    default:
      component = <p>An error occurred.</p>;
  }

  return (
    <div className="App">
      <h1> React Quiz App</h1>
      {component}
    </div>
  );
}

export default App;
