import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './assets/Experience'
import { React, useState, useEffect } from 'react'
// import { EnableControlsButton } from './assets/Section'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Presentation } from './assets/Presentation'
// import Przycisk from './assets/My'
export function MyCanvas () {
  return (
    <Canvas camera={{ fov: 64 }}>
      <Experience />
    </Canvas>
  )
}

function App () {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<MyCanvas/>}/>
      <Route path="/presentation" element={<Presentation />}/>

    </Routes>
    </Router>

 </>
  )
}

export default App
