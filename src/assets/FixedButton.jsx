import React from 'react'
export function Button1 ({ onClick, buttonColor }) {
//   console.log('sa')
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: buttonColor,
    color: 'black'
  }

  return <button style={buttonStyle} onClick={onClick}>but1</button>
}
