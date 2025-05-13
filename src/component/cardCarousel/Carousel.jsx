import React, { useState } from 'react';
import './style.css'

function Carousel({ cards }) {
  const [active, setActive] = useState(0)

  if (!cards || cards.length === 0) return <div>No cards available</div>

  const current = cards[active]
  
  return (
    <div>
      {/* write code here */}
        <div class='card'>
          <h1>{current.title}</h1>
          <p>{current.description}</p>
        </div>

      
      <div class='button'>
        <button disabled={active === 0} onClick={() => setActive(active - 1)}>Previous</button>
        <span>{active + 1} of {cards.length}</span>
        <button disabled={active === cards.length -1} onClick={() => setActive(active + 1)}>Next</button>
      </div>

      
    </div>
  );
}

export default Carousel;