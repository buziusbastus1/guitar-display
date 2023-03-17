import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { PresentationControls, useGLTF, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './Presentation.scss'
function Model (props) {
  const { nodes, materials } = useGLTF('./models/guitarfin.glb')

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
  // normalMap={materials.cialoczer.map}
  map={materials.cialoczer.map}
// roughnessMap={materials.cialoczer.map}
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

  const [woodColor, setWoodColor] = useState('#ffffff')

  const handleColor1 = () => {
    setWoodColor('#ffffff')
  }

  const handleColor2 = () => {
    setWoodColor('#cfcfcf')
  }
  return (
    <div className='presentation'>

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
    <div className='pres'>
      <h1>Home</h1>
      <button onClick={() => navigate('/')}>Go back</button>
       <div>
        <button onClick={handleColor1}>Default</button>
        <button onClick={handleColor2}>Dark</button>
      </div></div>
      </div>
  )
}
