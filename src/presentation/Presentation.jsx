import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { PresentationControls, useGLTF, Stage } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
// import { TextureLoader } from 'three'
import { material } from './materials'

function Model (props) {
  const { nodes, materials } = useGLTF('./models/guitarfin.glb')
  // const [woodColor, setWoodColor] = useState('#8B4513')
  // const woodColor = '#8B4513'

  console.log(location.pathname)
  return (
    <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cialo.geometry}
          // material={materials.cialoczer}

        >
    <meshStandardMaterial
      // ...material.red
  color={props.woodColor}
   map={materials.cialoczer.map}
          // scarsMap={materials.cialoczer.scarsMap}
    />
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

  const [woodColor, setWoodColor] = useState('#8B4513')

  const handleColor1 = () => {
    setWoodColor('#8B4513') // set the wood color to brown
  }

  const handleColor2 = () => {
    setWoodColor('#FFD700') // set the wood color to gold
  }
  return (
    <>
    <div>Home</div>
      <button onClick={() => navigate('/')}>Go back</button>
       <div>
        <button onClick={handleColor1}>Brown</button>
        <button onClick={handleColor2}>Gold</button>
      </div>
      <Canvas dpr={[1, 2]}>
   <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment="city" intensity={0.6} castShadow={false}>
          <Model woodColor={woodColor}/>
      </Stage>
      </PresentationControls>
       </Canvas>
      </>
  )
}
