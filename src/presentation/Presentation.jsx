import React, { useState, useEffect } from 'react'
import { useGLTF, OrbitControls, Bounds } from '@react-three/drei'
import { SelectToZoom } from './SelectToZoom'
import './Presentation.scss'

function Model ({ woodColor, ...props }) {
  const { nodes, materials } = useGLTF('./models/guitarp.glb')

  const state = ({
    current: null,
    items: {
      knob: 'knob',
      switch: 'switch',
      bridge: 'bridge',
      keys: 'keys',
      fretboard: 'fretboard',
      pickups: 'pickups',
      body: 'body'
    }
  })

  const [hovered, set] = useState(null)

  useEffect(() => {
    const textElement = document.createElement('div')
    textElement.style.cssText = `
    position: fixed;
    font-family: Inter var, sans-serif;
    font-size: 20px;
    color: white;
    pointer-events: none;
  `

    const handleMove = (event) => {
      const { clientX, clientY } = event.touches ? event.touches[0] : event
      const x = clientX + 30
      const y = clientY + 30
      textElement.style.top = `${y}px`
      textElement.style.left = `${x}px`
    }

    if (hovered) {
      textElement.textContent = hovered
      document.body.appendChild(textElement)
      document.addEventListener('mousemove', handleMove)
      document.addEventListener('touchmove', handleMove, { passive: true })
      return () => {
        document.body.removeChild(textElement)
        document.removeEventListener('mousemove', handleMove)
        document.removeEventListener('touchmove', handleMove)
      }
    }
  }, [hovered])
  return (
    <group {...props} dispose={null} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cialo.geometry}
        // onClick={(e) => e.stopPropagation()}
 onPointerOver={(e) => {
   e.stopPropagation()
   set(state.items.body)
 }}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
        >

    <meshStandardMaterial
  color={woodColor}
  map={materials.cialoczer.map}
   />
</mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob.geometry}
        material={materials.czern}
        position={[-1.57, 0.06, 0.4]}
        onPointerOver={(e) => {
          e.stopPropagation()
          set(state.items.knob)
        }}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
      />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.knob002.geometry}
          material={materials.czern}
          position={[-1.96, 0.06, 0.63]}
          onPointerOver={(e) => {
            e.stopPropagation()
            set(state.items.knob)
          }}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
        />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.drewno001.geometry}
        material={materials.deska}
         onPointerOver={(e) => {
           e.stopPropagation()
           set(state.items.fretboard)
         }}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
        //  material-metalness={3}
        // material-roughness={0.4}
      />
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.prog.geometry}
        material={materials.prog}
        onPointerOver={(e) => {
          e.stopPropagation()
          set(state.items.fretboard)
        }}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sruby.geometry}
        material={materials.sruby}
           material-roughness={0.4}
           material-metalness={1.4}
        onClick={(e) => e.stopPropagation()}

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
        position={[-1.17, 0.08, 0.02]}
           onPointerOver={(e) => {
             e.stopPropagation()
             set(state.items.pickups)
           }}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.czesci.geometry}
        material={materials.czarny}
        onClick={(e) => e.stopPropagation()}

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
        onClick={(e) => e.stopPropagation()}

      />
          <mesh
        castShadow
        receiveShadow
        geometry={nodes.keys.geometry}
        material={materials.czarny}
        onPointerOver={(e) => {
          e.stopPropagation()
          set(state.items.keys)
        }}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
      />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials.prog}
        onPointerOver={(e) => {
          e.stopPropagation()
          set(state.items.switch)
        }}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
      />
         <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.czarny}
        onPointerOver={(e) => {
          e.stopPropagation()
          set(state.items.switch)
        }}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
      />
            <mesh
        castShadow
        receiveShadow
        geometry={nodes.bridge.geometry}
        material={materials.czarny}
         onPointerOver={(e) => {
           e.stopPropagation()
           set(state.items.bridge)
         }}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
      />
    </group>
  )
}
useGLTF.preload('./models/guitarp.glb')

export const CanvasContent = ({ woodColor }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <hemisphereLight color="#5c4f2d" position={[0, 0, 13]} intensity={1} />
       <spotLight intensity={1.5} position={[-2, 1, 2]} />
      <Bounds fit margin={1.5} damping={5}>
        <SelectToZoom>
          <Model woodColor={woodColor} />
        </SelectToZoom>
      </Bounds>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2.5} maxDistance={2.5} minDistance={0.3}/>
      </>
  )
}
