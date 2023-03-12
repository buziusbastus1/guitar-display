import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './assets/Experience'
import { React, useState, useEffect } from 'react'
// import { EnableControlsButton } from './assets/Section'
import { Button1 } from './assets/FixedButton'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './assets/Home'
// import Przycisk from './assets/My'
export function MyCanvas () {
  return (
    <Canvas camera={{ fov: 64 }}>
      <Experience />
    </Canvas>
  )
}

function App () {
  // const [controlsEnabled, setControlsEnabled] = useState(false)

  // const toggleControlsEnabled = () => {
  //   setControlsEnabled(!controlsEnabled)
  // }

  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<MyCanvas/>}/>
      <Route path="/path/to/push" element={<Home />}/>
 </Routes>

    </Router>

      {/* <Experience  controlsEnabled={controlsEnabled}  /> */}
    {/* </Canvas> */}
        {/* <Button1 onClick={toggleControlsEnabled} />

 <button onClick={toggleShowHome}>Show Home</button> */}

 </>
  )
}

export default App
