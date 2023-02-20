import { Stage, OrbitControls } from '@react-three/drei'
import { Canvas, extend } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Model from './assets/guitar'
import './Model.scss'
extend({ OrbitControls })

// function Model (props) {
//   const { scene } = useGLTF('guitar.glb')
//   return <primitive object={scene} {...props} />
// }
function Render () {
  const imgRef = useRef(null)
  useEffect(() => {
    const el = imgRef.current
    gsap.fromTo(el, { rotation: 90 }, { rotation: 180, duration: 3 })
  }, [])

  return (
  <Canvas ref={imgRef} className="my-canvas" shadows dpr={[1, 2]} camera={{ fov: 45 }} style={{ position: 'fixed' /* position: 'absolute', width: '600px', height: '600px' */ }} >
      <ambientLight />
{/* <color attach="background" args={['#9EABA4']}/> */}
<OrbitControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}/>
  <Stage environment={null} intensity={1} contactShadowOpacity={0.1} shadowBias={-0.0015} >
    <Model scale={0.91} style={{ }}></Model>
  </Stage>
  </Canvas>
  )
}
export default Render
