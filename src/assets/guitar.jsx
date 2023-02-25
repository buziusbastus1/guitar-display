
import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame, useThree } from '@react-three/fiber'

export function Guitar (props) {
  const { nodes, materials } = useGLTF('./models/guitar.glb')
  const { camera } = useThree()
  const ref = useRef()
  const tl = useRef()
  const guitar = useRef()
  const scroll = useScroll()
  // const camera = useRef()
  // camera.position.set(0, 0, 5)
  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration())
    // console.log(ref.current.position)
    // console.log(camera.position)
  })
  useLayoutEffect(() => {
    // console.log(ref.current.position)
    // console.log(ref.current.rotation)
    gsap.registerPlugin()
    tl.current = gsap.timeline()

    tl.current.to(
      ref.current.position, {
        // duration: 1,
        ease: 'power2.inOut',
        x: 0,
        y: 4,
        z: 0
      }
    )
      .to(ref.current.rotation, {
      // duration: 1,
        ease: 'power2.inOut',
        y: Math.PI / -2
      }, 0 // Start w tym samym momencie
      )
      .to(
        ref.current.scale, { // Add this line to animate scale
          ease: 'power2.inOut',
          x: 2.3, // Zoom in 2x in the x-axis direction
          y: 2.3, // Zoom in 2x in the y-axis direction
          z: 2.3 // Zoom in 2x in the z-axis direction
        }, 0 // Start w tym samym momencie
      )
      .to(
        camera.position,
        {
          x: 0,
          y: 6,
          z: 1
        }
      )

    // .to(
    //   ref.current.position, {
    //     ease: 'power2.inOut',
    //     x: 2,
    //     y: 0,
    //     z: 2,
    //     duration: 2
    //   }, '+=2')

    // tl.current.to(
    //   camera.position, { // new tween for camera position
    //     duration: 1,
    //     x: 1,
    //     y: 1,
    //     z: -3
    //   },
    //   0 // start at the same time as the previous tween
    // )
    // tl.current.from(
    //   camera.position,
    //   {
    //     x: 0,
    //     y: 0,
    //     z: 4
    //   },
    //   0.5
    // )

    // tl.current.from(
    //   ref.current.position,
    //   {
    //     duration: 0.5,
    //     y: 2
    //   },
    //   1
    // )

    // tl.current.to(
    //   ref.current.rotation,
    //   { scrub: true, x: 0, y: Math.PI / 6, z: 0, markers: true },
    //   0
    // )
  }, [])
  return (
    <group {...props} dispose={null} ref={ref}position={[0, 1, 0]} rotation={[Math.PI / 4, 0, 0]} scale={1.5} >
      <group ref={guitar}>
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
        material={materials.bialy}
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
        geometry={nodes.pret.geometry}
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
        geometry={nodes.belec.geometry}
        material={materials.polysk}
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
        geometry={nodes.Plane008.geometry}
        material={materials.polysk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_1.geometry}
        material={materials.czarny}
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
        geometry={nodes.knob.geometry}
        material={materials.czern}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.przel.geometry}
        material={materials.czarny}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.klucze.geometry}
        material={materials.czarny}
        rotation={[-0.02, 0.03, -0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny002.geometry}
        material={materials.polysk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny003.geometry}
        material={materials.polysk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.sreb}
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
        geometry={nodes.knob002.geometry}
        material={materials.czern}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frets.geometry}
        material={materials.fret}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sruby.geometry}
        material={materials.sreb}
        rotation={[0.28, 0.47, 1.44]}
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
        geometry={nodes.struny005.geometry}
        material={materials.polysk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny.geometry}
        material={materials.polysk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny001.geometry}
        material={materials.polysk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny004.geometry}
        material={materials.polysk}
      />
      <group rotation={[-3.14, 0.01, 1.57]}>
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
    </group>
  )
}

useGLTF.preload('./models/guitar.glb')
