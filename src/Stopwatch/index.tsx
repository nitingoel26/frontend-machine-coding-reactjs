import { useRef, useState, useEffect } from "react";
import "./styles.css";
const StopWatch = () => {
  const [count, setCount] = useState<number>(0);
  const [stop, setStop] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const hh = Math.floor(count / 3600);
  const mm = Math.floor((count % 3600) / 60);
  const ss = count % 60;
  const handleReset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setStop(false);
    setCount(0);
  };
  const handleStop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setStop(true);
    }
  };
  return (
    <div className="container">
      <div>
        {hh.toString().padStart(2, "0")}:{mm.toString().padStart(2, "0")}:
        {ss.toString().padStart(2, "0")}
      </div>
      <div className="buttons">
        <button onClick={handleStart}>{stop ? "Restart" : "Start"}</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
