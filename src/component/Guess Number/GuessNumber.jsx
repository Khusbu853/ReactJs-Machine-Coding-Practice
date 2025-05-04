import React, { useState } from "react";
import './style.css';

function GuessTheNumber() {
  const generateRandom = () => Math.floor(Math.random() * 100) + 1;

  const [randomNumber, setRandomNumber] = useState(generateRandom());
  const [userInput, setUserInput] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    const num = parseInt(userInput);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("Please enter a number between 1 and 100.");
      return;
    }

    setAttempt(prev => prev + 1);
    if (num === randomNumber) {
      setMessage(`Congratulations! You guessed the number in ${attempt + 1} attempts.`);
    } else if (num < randomNumber) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Too high! Try again.");
    }
  };

  const resetGame = () => {
    setRandomNumber(generateRandom());
    setUserInput("");
    setAttempt(0);
    setMessage("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "50px 0" }}>
      <h2>Guess the Number</h2>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
      />
      <div className="button" style={{ marginTop: "10px" }}>
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame} style={{ marginLeft: "10px" }}>Reset Game</button>
      </div>

      <h1>{message}</h1>
    </div>
  );
}

export default GuessTheNumber;