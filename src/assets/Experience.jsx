
import { ScrollControls, PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { React } from 'react'
import { Guitar } from './Guitar'
import { Overlay } from './Section'

export const Experience = ({ controlsEnabled }) => {
  return (
    <>

      <ambientLight intensity={0.5} />
       <spotLight intensity={0.6} position={[3, 9, 3]} color={'#bfc0d6'} castShadow/>
       {/* <spotLight intensity={0.9} position={[6, -1, 3]} color={'#bfc0d6'} castShadow/> */}

      <PerspectiveCamera /* enabled={controlsEnabled} *//>
       <ScrollControls pages={8} damping={0.1} distance={5} maxSpeed={1}>
        <Overlay />

        <Guitar />

      </ScrollControls>
<OrbitControls enabled={controlsEnabled}/>
      <Environment preset="night" />
    </>
  )
}
/* enableZoom={false} enableRotate={false}/> */
