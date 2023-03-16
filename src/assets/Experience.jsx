
import { ScrollControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { React } from 'react'
import { Guitar } from './Guitar'
import { Overlay } from './Section'

export const Experience = () => {
  return (
    <>

       <ScrollControls pages={9} damping={0.1} distance={5} maxSpeed={0.5}>

        <Overlay />
        <Guitar />

      </ScrollControls>
      <PerspectiveCamera />
      <ambientLight intensity={0.5} />
       <spotLight intensity={1} position={[3, 9, 3]} color={'#bfc0d6'} castShadow/>
      <Environment preset="night" />
    </>
  )
}
/* enableZoom={false} enableRotate={false}/> */
