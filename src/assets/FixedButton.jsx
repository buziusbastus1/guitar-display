import React from 'react'

export function Button ({ onClick }) {
  console.log('s')
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px'
  }

  return <button style={buttonStyle} onClick={onClick}>Click me!</button>
}
