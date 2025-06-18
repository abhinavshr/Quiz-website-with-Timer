import React, { useState, useEffect } from "react";

function Timer({ duration = 15, onTimeUp, trigger }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration, trigger]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="timer">
      Time Left: {timeLeft}s
    </div>
  );
}

export default Timer;
