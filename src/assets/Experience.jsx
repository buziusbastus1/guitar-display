
import { ScrollControls, PerspectiveCamera } from '@react-three/drei'
import { React } from 'react'
import { Guitar } from './Guitar'
import { Overlay } from './Section'

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <PerspectiveCamera enableZoom={false} enableRotate={false} />
       <ScrollControls pages={3} /* damping={0.25} */>
        {/* <Overlay /> */}
        <Guitar />
      </ScrollControls>
    </>
  )
}
