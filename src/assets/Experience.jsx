
import { React } from 'react'
import { ScrollControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Guitar } from './Guitar'
import { Overlay } from './Section'

export const Experience = () => {
  return (
    <>
       <ScrollControls pages={9} damping={0.1} distance={2} maxSpeed={0.5}>

        <Overlay />
        <Guitar />

      </ScrollControls>

      <PerspectiveCamera />
      <ambientLight intensity={1} />
       <spotLight intensity={2} position={[3, 10, 3]} color={'#bfc0d6'} castShadow/>
       <spotLight intensity={1} position={[-1, -2, -10]} color={'#f0bdbd'} angle={0.9} />
      <Environment preset="night" />
    </>
  )
}
