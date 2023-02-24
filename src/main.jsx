import ReactDOM, {/* createRoot */} from 'react-dom/client'
import React from 'react'
import './index.css'
// import Model from './Model'
// import Text from './Text'
import App from './App'
// import SectionOne from './SectionOne'
// import SectionTwo from './SectionTwo'

// const root = createRoot(document.getElementById('root'))
// root.render(<App />)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
