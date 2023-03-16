import { useNavigate, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import { PresentationControls, useGLTF, Stage } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
// import { TextureLoader } from 'three'
function Model (props) {
  const { nodes, materials } = useGLTF('./models/guitarfin.glb')
  const location = useLocation() // get the current URL

  // const colorMap = useLoader(TextureLoader, './textures/druga1.webp')
  const colorMap = useLoader(TextureLoader, './textures/drewno.webp')

  console.log(location.pathname)
  return (
    <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cialo.geometry}
          material={materials.cialoczer}
        >
          {/* <meshStandardMaterial map={colorMap} /> */}
    </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob.geometry}
        material={materials.czern}
        position={[-1.57, 0.06, 0.4]}
      />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.knob002.geometry}
          material={materials.czern}
          position={[-1.96, 0.06, 0.63]}
        />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.deska.geometry}
        material={materials.deska}
        //  material-metalness={3}
        // material-roughness={0.4}
      />
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.prog.geometry}
        material={materials.prog}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sruby.geometry}
        material={materials.sruby}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickupsrub.geometry}
        material={materials.pickupsrub}
        material-metalness={3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup.geometry}
        material={materials.pickup}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.czesci.geometry}
        material={materials.czarny}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.metal.geometry}
        material={materials.prog}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny.geometry}
        material={materials.pickup}
      />
    </group>
  )
}
useGLTF.preload('./models/guitarfin.glb')
export const Presentation = (props) => {
  const navigate = useNavigate()
  const location = useLocation().pathname
  return (
    <>
    <div>Home</div>
      <button onClick={() => navigate('/')}>Go back</button>
          {/* <button onClick={handleClick}>Toggle Texture</button> */}
      <Canvas dpr={[1, 2]}>
   <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment="city" intensity={0.6} castShadow={false}>
          <Model location={location} />
      </Stage>
      </PresentationControls>
       </Canvas>
      </>
  )
}
