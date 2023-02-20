import { Stage, OrbitControls } from '@react-three/drei'
import { Canvas, extend } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Model from './assets/guitar'
import SectionOne from './SectionOne'
import './Model.scss'
extend({ OrbitControls })
gsap.registerPlugin(ScrollTrigger)

function Render () {
  const imgRef = useRef(null)
  const imgTrig = useRef(null)

  useEffect(() => {
    const el = imgRef.current
    const trigger = imgTrig.current
    gsap.fromTo(el, { x: 180 }, {
      y: Math.PI,
      rotation: 180,
      duration: 2,
      scrollTrigger: {
        trigger: trigger,
        start: 'top 10%', // start the animation when the trigger is 80% in view
        end: '+=1000', // end the animation when the canvas has rotated 1000 units
        scrub: 1
      }
    })
  }, [])

  return (
    <div>
  <Canvas ref={imgRef} className="my-canvas" shadows dpr={[1, 2]} camera={{ fov: 45 }} style={{ position: 'fixed' /* position: 'absolute', width: '600px', height: '600px' */ }} >
      <ambientLight />
{/* <color attach="background" args={['#9EABA4']}/> */}
<OrbitControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}/>
  <Stage environment={null} intensity={1} contactShadowOpacity={0.1} shadowBias={-0.0015} >
    <Model scale={0.91} style={{ }}></Model>
  </Stage>
  </Canvas>
  <SectionOne ref={imgTrig}/>
  </div>
  )
}
export default Render
