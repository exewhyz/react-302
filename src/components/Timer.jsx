import React, { useState, useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const timerRefId = useRef(null);
  const handleStart = () => {
    timerRefId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  const handlePause = () => {
    clearInterval(timerRefId.current);
  };
  const handleReset = () => {
    clearInterval(timerRefId.current);
    setTime(0);
  };
  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time: {time}s</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
