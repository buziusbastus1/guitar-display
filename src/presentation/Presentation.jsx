import { useNavigate } from 'react-router-dom'
import React, { useState, useRef, useEffect } from 'react'
import { PresentationControls, useGLTF, Stage, OrbitControls, Bounds, useBounds } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './Presentation.scss'
import * as THREE from 'three'
function Model (props, name) {
  const { nodes, materials } = useGLTF('./models/guitarfin.glb')

  const knob1 = useRef()
  const knob002 = useRef()

  console.log(location.pathname)
  return (
    <group {...props} dispose={null} position={[0, 0, 0]} rotation={[0.5, 0, 0]} scale={1.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cialo.geometry}
          // material={materials.cialoczer}
        >
    <meshStandardMaterial
  color={props.woodColor}
  map={materials.cialoczer.map}
  // map={texture}
  // format={1}
   />
</mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob.geometry}
        material={materials.czern}
        position={[-1.57, 0.06, 0.4]}
        ref={knob1 }
        name='Curly'
      />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.knob002.geometry}
          material={materials.czern}
          position={[-1.96, 0.06, 0.63]}
          ref={knob002 }
          name='DNA'
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

  // const handleColor2 = () => {
  //   setWoodColor('orange')
  // }
  const handleColor2 = () => {
    setWoodColor('#a0e697')
  }

  return (
    <div className='presentation'>

      <Canvas dpr={[1, 2]}>
   {/* <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      > */}
       <OrbitControls maxDistance={5} minDistance={1.5} minZoom={2} />
        <Stage environment="city" intensity={0.6} castShadow={false}>
          <Bounds fit clip observe margin={1.2}>
          <SelectToZoom>
          <Model woodColor={woodColor} />
          </SelectToZoom>
          </Bounds>
      </Stage>
      {/* </PresentationControls> */}
       </Canvas>
    <div className='pres'>
      <button onClick={() => navigate('/')}>Go back</button>
       <div className='colorbut'>
        <button onClick={handleColor1}>Default</button>
        <button onClick={handleColor2}>Dark</button>
      </div>
      </div>
      </div>
  )
}
function SelectToZoom ({ children }) {
  const api = useBounds()
  return (
    <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
      {children}
    </group>
  )
}
