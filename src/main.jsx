import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import Model from './Model'
import Text from './Text'

function App () {
  return (
    <div>
      <Model />
<Text />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
