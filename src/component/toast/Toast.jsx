import React, { useEffect, useState } from 'react';

// Toast Component
const Toast = ({ message, type, duration }) => {
  const [showToast, setShowToast] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, duration)

    return () => clearTimeout(timer)
  }, duration)

  if (!showToast) return null;

  const background = type === 'success' ? 'green' : type === 'error' ? 'red' : 'blue'

  return (
    <div style={{background, color: 'white', padding: '10px 20px', border: '1px solid black', borderRadius: '5px', margin: '10px 0'}}>
      {message}
    </div>
  );
};

export default Toast;