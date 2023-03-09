import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './assets/Experience'
import { React, useState } from 'react'
// import { EnableControlsButton } from './assets/Section'
import { Button1 } from './assets/FixedButton'

function App () {
  const [controlsEnabled, setControlsEnabled] = useState(false)

  const toggleControlsEnabled = () => {
    setControlsEnabled(!controlsEnabled)
  }

  return (
    <>
    <Canvas
      camera={{
        fov: 64
        // position: [2.3, 1.5, 2.3]
      }}
    >
      <Experience controlsEnabled={controlsEnabled} />
    </Canvas>
 <Button1 onClick={toggleControlsEnabled} />
 </>
  )
}

export default App
