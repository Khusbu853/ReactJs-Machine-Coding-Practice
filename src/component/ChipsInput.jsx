import React, { useState } from 'react';

const ChipsInput = () => {
  const [chipsInput, setChipsInput] = useState('');
  const [chips, setChips] = useState([]);
  const [count, setCount] = useState(0);

  const handleChipsInputChange = (e) => {
    setChipsInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setChips([...chips, {
        label: e.target.value.trim(),
        id: count
      }]);
      setChipsInput('');
      setCount(count + 1);
    }
  };

  const handleDelete = (id) => {
    setChips(chips.filter(chip => chip.id !== id));
  };

  return (
    <div>
      <h1>Chips Input</h1>
      <input
        type="text"
        placeholder="Type a tag and press Enter"
        value={chipsInput}
        onChange={handleChipsInputChange}
        onKeyDown={handleKeyDown}
        style={{ padding: '10px' }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
        {chips.map((chip) => (
          <div key={chip.id} style={{ background: '#eee', padding: '0px 15px', borderRadius: '20px' }}>
            {chip.label}
            <button 
              onClick={() => handleDelete(chip.id)} 
              style={{ marginLeft: '10px', background: 'transparent', border: 'none', color: 'red', cursor: 'pointer' }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;

