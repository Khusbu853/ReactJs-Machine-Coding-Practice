import React, { useState } from 'react';

export const checkPasswordStrength = (password) => {
  let level = 0;

  if (password.length >= 8) {
    level = level + 1
  }

  if (/[0-9]/.test(password)) {
    level = level + 1
  }
  if (/[A-Z]/.test(password)) {
    level = level + 1
  }
  if (/[a-z]/.test(password)) {
    level = level + 1
  }
  if (/[^a-zA-Z0-9]/.test(password)) {
    level = level + 1
  }
  if (level === 1) return 'Level 1'
  if (level >= 2 && level <= 3) return 'Level 2'
  if (level >= 4 && level <= 5) return 'Level 3'
  return 'Weak Password'
};

const PasswordStrength = () => {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState('')

  const handleClick = () => {
    setStrength(checkPasswordStrength(password))
  }

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Check Strength</button>

      {strength && <p>Strength: {strength}</p>}
    </div>
  );
};

export default PasswordStrength;