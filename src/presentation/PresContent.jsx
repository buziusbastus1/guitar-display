import React from 'react'
const PresContent = ({ navigate, handleCollapse, isHidden, isCollapsed, handleColor1, handleColor2 }) => {
  return (
    <div className='pres'>
      <button className='toggle' style={{ }} onClick={handleCollapse}>
        {isHidden ? 'Show Menu' : 'Hide Menu'}
      </button>
      {!isCollapsed && (
        <div className='menu'>
          <h1 className='var'>Go to previous page:</h1>
          <button className='back' onClick={() => navigate('/')}>Go back</button>
            <h1 className='var'>Choose variant:</h1>
          <div className='colorbut'>
            <button onClick={handleColor1}>Default</button>
            <button onClick={handleColor2}>Dark</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PresContent
