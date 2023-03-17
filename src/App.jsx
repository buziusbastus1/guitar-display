import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './assets/Experience'
import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Presentation } from './presentation/Presentation'

export function MyCanvas () {
  return (
    <Canvas camera={{ fov: 64 }}>
      <Experience />
    </Canvas>
  )
}
export function MyPresentation () {
  return (
    <>
      <Presentation />
</>
  )
}

function App () {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<MyCanvas/>}/>
      <Route path="/presentation" element={<MyPresentation />}/>

    </Routes>
    </Router>

 </>
  )
}

export default App
