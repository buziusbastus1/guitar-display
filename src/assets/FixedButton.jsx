import React from 'react'
export function Button1 ({ onClick }) {
//   console.log('sa')
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'block',
    zIndex: 999
    // color: 'black'
  }

  return <button style={buttonStyle} onClick={onClick}>but1</button>
}
