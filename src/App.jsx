import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './assets/Experience'
import { React } from 'react'
function App () {
  return (
    <Canvas
      camera={{
        fov: 64
        // position: [2.3, 1.5, 2.3]
      }}
    >
      <Experience />
    </Canvas>
  )
}

export default App
