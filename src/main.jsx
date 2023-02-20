import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import Model from './Model'
import Text from './Text'
import SectionOne from './SectionOne'
function App () {
  return (
    <div>
<Text />
      <Model />
 <SectionOne />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
