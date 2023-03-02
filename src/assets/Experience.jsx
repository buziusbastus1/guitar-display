
import { ScrollControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { React } from 'react'
import { Guitar } from './Guitar'
import { Overlay } from './Section'

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
       <spotLight intensity={0.6} position={[3, 9, 4]} color={'#bfc0d6'} castShadow/>
       {/* <spotLight intensity={0.9} position={[6, -1, 3]} color={'#bfc0d6'} castShadow/> */}

      <PerspectiveCamera enableZoom={false} enableRotate={false} />
       <ScrollControls pages={8} damping={0.1} >
        <Overlay />
        <Guitar />
      </ScrollControls>
      <Environment preset="night" />
    </>
  )
}
