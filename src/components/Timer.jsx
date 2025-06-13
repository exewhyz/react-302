import { useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const timerRef = useRef();

  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const handlePause = () => {
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setTime(0);
  };
  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time: {time}s</p>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
