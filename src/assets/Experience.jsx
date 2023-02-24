// import { Stage, OrbitControls, useGLTF } from '@react-three/drei'
// import { Canvas, extend } from '@react-three/fiber'
// import React, { useRef, useState } from 'react'
// import { useGsapEffect } from './assets/gsap'
// import SectionOne from './SectionOne'
// import SectionTwo from './SectionTwo'
// import './Model.scss'
// extend({ OrbitControls })

// function Model (props) {
//   const { scene } = useGLTF('guitar.glb')
//   return <primitive object={scene} {...props} />
// }

// function Render () {
//   const imgRef = useRef(null)
//   const imgTrig = useRef(null)

//   useGsapEffect(imgRef, imgTrig)
//   // const imgRef = useRef(null)
//   // useGsapEffect(imgRef)
//   const [polar, setPolar] = useState({ offset: 0, theta: 0 })
//   return (
//     <div>
//   <Canvas ref={imgRef} className="my-canvas" shadows dpr={[1, 2]} camera={{ fov: 45 }} style={{ position: 'fixed' /* position: 'absolute', width: '600px', height: '600px' */ }} >
//       {/* <ambientLight /> */}
// {/* <color attach="background" args={['#9EABA4']}/> */}
// <OrbitControls enableDamping
//   dampingFactor={0.05}
//   rotateSpeed={0.5}
//   maxPolarAngle={Math.PI / 2} // Restrict camera angle to avoid upside-down view
//   polar={{ offset: 0, theta: 0 }}
//      onPointerMove={(e) => {
//        setPolar({ offset: polar.offset, theta: polar.theta + e.movementX * 0.01 })
//      }}/>
//   <Stage environment={null} intensity={1} contactShadowOpacity={0.1} shadowBias={-0.0015} >
//     <Model position={[0, 0, 0]} style={{ }}></Model>
//   </Stage>
//   </Canvas>
// <div className='one'>
//         <SectionOne ref={imgTrig} />
// </div>
// <div className='two'>
//         <SectionTwo />
// </div>
//   </div>
//   )
// }
// export default Render
import { OrbitControls, ScrollControls } from '@react-three/drei'
import { Guitar } from './Guitar'
import { React } from 'react'
// import { Overlay } from './Overlay'

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} enableRotate={false} />
       <ScrollControls pages={3} damping={0.25}>
        {/* <Overlay /> */}
        <Guitar />
      </ScrollControls>
    </>
  )
}
