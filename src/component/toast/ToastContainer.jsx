import React, { useState } from 'react'
import Toast from './Toast'

const ToastContainer = () => {
  const [toast, setToast] = useState([])

  const handleToast = (type, message, duration) => {
    const id = Date.now()
    setToast((prev) => [...prev, {id, type, message, duration}])

    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  const removeToast = (id) => {
    setToast((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <div>
        <div>
        <button onClick={() => handleToast('success', 'Sucess Toast', 3000)}>Show Success</button>
        <button onClick={() => handleToast('error', 'Error Toast', 2000)}>Show Error</button>
        <button onClick={() => handleToast('info', 'Info Toast', 1000)}>Show Info</button>
        </div>
      
        {toast.map(({id, type, message, duration}) => (
          <Toast key = {id} type = {type} message={message} duration={duration}/>
        ))}
    </div>
  )
}

export default ToastContainer
