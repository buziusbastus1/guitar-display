import React from 'react'
import { useNavigate } from 'react-router-dom'

const Przycisk = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/path/to/push')
  }

  return (
    <div>
      <button onClick={handleClick}>Go to Przycisk</button>
    </div>
  )
}

export default Przycisk
