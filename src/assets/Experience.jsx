
import { ScrollControls, PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { React, useRef, useEffect } from 'react'
import { Guitar } from './Guitar'
import { Overlay } from './Section'
// import { BrowserRouter, Route /* Switch */ } from 'react-router-dom'
// import Home from './Home'
export const Experience = ({ /* controlsEnabled */}) => {
  const scrollControlsRef = useRef(null)

  useEffect(() => {
    if (location.state?.scroll && scrollControlsRef.current) {
      scrollControlsRef.current.scrollToPage(location.state?.page || 0)
    }
  }, [location.state?.scroll])

  return (
    <>

       <ScrollControls pages={8} damping={0.1} distance={5} maxSpeed={0.5}>

        <Overlay />
        <Guitar />

      </ScrollControls>
      <PerspectiveCamera /* enabled={controlsEnabled} */ />
{/* <OrbitControls  enabled={controlsEnabled}  /> */}
      <ambientLight intensity={0.5} />
       <spotLight intensity={0.6} position={[3, 9, 3]} color={'#bfc0d6'} castShadow/>
      <Environment preset="night" />
    </>
  )
}
/* enableZoom={false} enableRotate={false}/> */
