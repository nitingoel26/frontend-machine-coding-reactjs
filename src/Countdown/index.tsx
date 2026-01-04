import { useEffect, useRef, useState } from "react";
/*
Set target date/time or duration for countdown
Display days, hours, minutes, and seconds remaining
Visual timer that updates every second
Format time values (e.g., pad single digits with zero)
Pause/resume functionality (optional)
Reset countdown to initial value
Visual indicators when countdown reaches zero (alerts, animations)
Advance: Customizable display format (show/hide specific units)
Advance: Handle timezone differences
Unit/integration testing for time calculations
Key Concepts to Cover:
React useState and useEffect hooks
setInterval and clearInterval for timers (Important)
Component cleanup in useEffect (prevent memory leaks)
Date manipulation and time calculations
Conditional rendering based on countdown state
Advance: Performance optimization (avoid unnecessary re-renders)
*/

const CountdownComponent = () => {
  const [duration, setDuration] = useState(0);
  const [currentDate, setCurrentDate] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setCurrentDate(selectedDate);
  };
  const ref = useRef(0);

  useEffect(() => {
    return () => {
      if (ref.current) {
        clearInterval(ref.current);
        ref.current = 0;
      }
    };
  }, []);

  useEffect(() => {
    const selectedTimestamp = new Date(currentDate).getTime();
    const now = Date.now();
    setDuration(selectedTimestamp - now);
  }, [currentDate]);

  const handleStart = () => {
    if (duration < 0) return;
    if (ref.current) {
      clearInterval(ref.current);
    }
    ref.current = setInterval(() => {
      setDuration((prev) => prev - 1000);
    }, 1000);
  };
  console.log(ref.current);
  const hours = duration > 0 ? Math.floor(duration / 3600000) : 0;
  const minutes = duration > 0 ? Math.floor((duration % 3600000) / 60000) : 0;
  const seconds = duration > 0 ? Math.floor((duration % 60000) / 1000) : 0;
  return (
    <>
      <label htmlFor="select-date"> Select Date</label>
      <input
        id="select-date"
        type="datetime-local"
        value={currentDate}
        onChange={handleChange}
      />
      <button onClick={handleStart}>Start</button>

      <h3>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h3>
    </>
  );
};

export default CountdownComponent;
