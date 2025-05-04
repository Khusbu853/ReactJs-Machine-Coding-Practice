import React, { useState } from 'react'
import './style.css'

function ProgressBar() {
    const [progress, setProgress] = useState(0)
  return (
    <>
    <h1>Progress Bar</h1>
    <div class='progress-bar-container'>
      <div className='progress-bar-body' style={{width:`${progress}%`, 
      background: progress < 40 ? 'red' : (progress >=40 && progress < 79) ? 'orange' : 'green' }}
      role='progressbar'
      >
      {progress}%
      </div>
    </div>
    <div class='button'>
    <button onClick={() => setProgress(prev => Math.min(prev + 10, 100))} >+10%</button>
    <button onClick={() => setProgress(prev => Math.max(prev - 10, 0))}>-10%</button>
    </div>

    </>
  )
}

export default ProgressBar
