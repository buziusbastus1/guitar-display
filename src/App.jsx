import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './assets/Experience'
import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { CanvasContent } from './presentation/Presentation'
import PresContent from './presentation/PresContent'
function MyCanvas () {
  return (
    <Canvas camera={{ fov: 64 }}>
      <Experience />
    </Canvas>
  )
}
function MyPresentation () {
  const navigate = useNavigate()

  const [woodColor, setWoodColor] = useState('#ffffff')

  const handleColor1 = () => {
    setWoodColor('#ffffff')
  }
  const handleColor2 = () => {
    setWoodColor('#bababa')
  }
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
    setIsHidden(!isHidden)
  }
  return (
    <>
    <Canvas dpr={[1, 2]} camera={{ position: [0, 20, 20] }}>
     <CanvasContent woodColor={woodColor} />
     </Canvas>
      <PresContent navigate={navigate} handleCollapse={handleCollapse} isHidden={isHidden} isCollapsed={isCollapsed} handleColor1={handleColor1} handleColor2={handleColor2} />
      {/* <Presentation /> */}
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
