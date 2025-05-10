import React, { useState, useRef } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const refInterval = useRef(null)

  const startTimer = () => {
    if (refInterval.current !== null) return;
    refInterval.current = setInterval(() => {
      setSeconds(prev => prev +1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(refInterval.current)
  }

  const pauseTimer = () => {
    setSeconds(0)
    clearInterval(refInterval.current)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Time: {seconds}s</h1>
      <button style={{border: '1px solid black'}} onClick={() => startTimer()}>Start</button>
      <button style={{border: '1px solid black'}} onClick={() => stopTimer()}>Stop</button>
      <button style={{border: '1px solid black'}} onClick={() => pauseTimer()}>Reset</button>
    </div>
  );
}

export default Stopwatch;