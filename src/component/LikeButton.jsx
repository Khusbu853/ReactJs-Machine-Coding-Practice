import React, { useState } from 'react';

function LikeButton() {
  const [isClick, setIsClick] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      style={{
        border: isHover ? '2px solid red' : '2px solid gray',
        color: isHover ? 'red' : isClick ? 'white' : 'gray',
        background: isClick ? 'red' : 'white',
        borderRadius: '20px',
        padding: '8px 16px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setIsClick((prev) => !prev)}
    >
      {isClick ? '🤍 Like' : '❤️ Like'}
    </button>
  );
}

export default LikeButton;

