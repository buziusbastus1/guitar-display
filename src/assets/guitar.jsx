// // import { React } from 'react'
// // import { useGLTF } from '@react-three/drei'

// // function Model (props) {
// //   const { scene } = useGLTF('guitar.glb')
// //   return <primitive object={scene} {...props} />
// // }
// // export default Model

// //   return (

// //       <group rotation={[-Math.PI / 2, 0, 0]}>
// //         <mesh castShadow geometry={nodes.Object_2.geometry}>
// //           <meshStandardMaterial color={snap.lid} name="lid" />
// //         </mesh>
// //         <mesh castShadow geometry={nodes.Object_3.geometry}>
// //           <meshStandardMaterial color={snap.base} name="base" />
// //         </mesh>
// //       </group>
// //   )
// // }

// // useGLTF.preload('./guitar.glb')
import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'

export function Guitar (props) {
  const { nodes, materials } = useGLTF('./models/guitar.glb')
  const ref = useRef()
  const tl = useRef()

  const scroll = useScroll()

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration())
  })
  useLayoutEffect(() => {
    tl.current = gsap.timeline()
    tl.current.to(
      ref.current.position, {
        duration: 2,
        y: 2
      },
      0
    )
  }, [])
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup.geometry}
        material={materials.sreb}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.podkladki.geometry}
        material={materials.czarny}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cialo.geometry}
        material={materials.drewno}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pret.geometry}
        material={materials.czarny}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mos.geometry}
        material={materials.czarny}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gryf.geometry}
        material={materials.drewno}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nut.geometry}
        material={materials.bialy}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bolec.geometry}
        material={materials.czarny}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.belec.geometry}
        material={materials.polysk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob.geometry}
        material={materials.czern}
        position={[-1.55, 0.06, 0.59]}
        scale={0.05}
      />
      <group position={[-2.35, -0.08, 0.85]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.polysk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_1.geometry}
          material={materials.czarny}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.przel.geometry}
        material={materials.czarny}
        position={[-1.61, 0.04, 0.75]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.klucze.geometry}
        material={materials.czarny}
        position={[2.51, -0.1, 0.36]}
        rotation={[-0.02, 0.03, -0.19]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.most.geometry}
        material={materials.czarny}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.drewno.geometry}
        material={materials.drewgryf}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frets.geometry}
        material={materials.fret}
        position={[-0.56, 0.07, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dziury.geometry}
        material={materials.czarny}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny002.geometry}
        material={materials.polysk}
        position={[0.14, 0.07, 0.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny.geometry}
        material={materials.polysk}
        position={[0.14, 0.07, 0.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sruby.geometry}
        material={materials.sreb}
        position={[-2.31, -0.08, 0.91]}
        rotation={[0.28, 0.47, 1.44]}
        scale={0.62}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny003.geometry}
        material={materials.polysk}
        position={[0.14, 0.07, 0.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny001.geometry}
        material={materials.polysk}
        position={[0.14, 0.07, 0.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.sreb}
        position={[-1.61, 0.05, 0.75]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny005.geometry}
        material={materials.polysk}
        position={[0.14, 0.07, 0.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knob002.geometry}
        material={materials.czern}
        position={[-1.93, 0.06, 0.82]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny004.geometry}
        material={materials.polysk}
        position={[0.14, 0.07, 0.33]}
      />
      <group
        position={[-2.48, -0.09, 0.19]}
        rotation={[-3.14, 0.01, 1.57]}
        scale={1.03}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials['sreb.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials['Material.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_3.geometry}
          material={materials.sreb}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/guitar.glb')
