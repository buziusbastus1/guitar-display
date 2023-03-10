
import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame, useThree } from '@react-three/fiber'

export function Guitar (props) {
  const { nodes, materials } = useGLTF('./models/guitarc.glb')
  // console.log(materials.polysk)
  const { camera } = useThree()
  const ref = useRef()
  const tl = useRef()
  const guitar = useRef()
  const scroll = useScroll()
  const pickupMesh1 = useRef()
  const pickupMesh2 = useRef()
  // const camera = useRef()
  // camera.position.set(0, 0, 5)

  useFrame(() => {
    tl.current.seek((scroll.offset) * tl.current.duration())
    // console.log(ref.current.position)
    // console.log(ref.current.rotation)
    // console.log(ref.current.scale)
    // console.log(camera.position)
    // console.log(camera.rotation)
    // console.log(camera.fov)
  })
  useLayoutEffect(() => {
    // console.log(ref.current.position)
    // console.log(ref.current.rotation)
    gsap.registerPlugin()
    tl.current = gsap.timeline({ defaults: { duration: 0.20 } })

    tl.current.to(
      ref.current.position, {

        ease: 'SlowMo',
        x: 0.5,
        y: 4,
        z: 0
      }
    )
      .to(ref.current.rotation, {
      // duration: 2,
        ease: 'SlowMo',
        y: Math.PI / -2
      }, 0 // Start w tym samym momencie
      )
      .to(
        ref.current.scale, {
          ease: 'SlowMo',
          x: 2.3,
          y: 2.3,
          z: 2.3
        }, 0 // Start w tym samym momencie
      )
    tl.current.to(
      camera.position,
      {
        ease: 'SlowMo',
        x: -0.5,
        y: 6 + scroll.offset,
        z: 0
        // delay: scrollOffset * 2
      }
    )
    tl.current.to(
      camera.position,
      {
        ease: 'SlowMo',
        fov: 30,
        x: -1,
        y: 7,
        z: -1.5
        // duration: 2
      }
    )
      .to(
        pickupMesh1.current.rotation, { // knob
          ease: 'SlowMo',
          y: pickupMesh1.current.rotation.z + Math.PI
          // duration: 2
        }, '<'
      )
      .to(
        pickupMesh2.current.rotation, // knob
        {
          ease: 'SlowMo',
          y: Math.PI
          // duration: 2
        }, '<'
      )
    tl.current.to(
      camera.rotation,
      {
        ease: 'SlowMo',

        x: -Math.PI / 4,
        y: -Math.PI / 3,

        z: -Math.PI / 2
        // duration: 2
      }
    )
      .to(
        camera.position,
        {
          ease: 'SlowMo',

          fov: 40,
          x: -0.5,
          y: 6.5,
          z: -1.1
          // duration: 2
        }, '<'
      )
    // tl.current.pause(1.5)
    tl.current.to(
      ref.current.position, {

        ease: 'SlowMo',
        x: 0.4,
        y: 3,
        z: 1.5
        // duration: 1
      }
    )

    tl.current.to(
      ref.current.position, {

        ease: 'SlowMo',
        x: 1,
        y: 10.8,
        z: -4.5
        // duration: 10
      }
    )
      .to(
        camera.rotation,
        {
          ease: 'SlowMo',

          x: -Math.PI / 4,
          y: -Math.PI / 1.7,

          z: -Math.PI / 2
          // duration: 10
        }, '<'
      )
    tl.current.to(
      ref.current.position, {

        ease: 'SlowMo',
        x: 0,
        y: 0,
        z: 0
        // duration: 10
      }
    )
    // .to(
    //   ref.current.rotation, {

      //     ease: 'SlowMo',
      //     x: 0.78,
      //     y: 0,
      //     z: 0
      //   // duration: 10
      //   }, '<'
      // )
      .to(
        camera.position,
        {
          ease: 'SlowMo',

          x: 0,
          y: 0,
          z: 5
          // duration: 10
        }, '<'
      )
      .to(
        camera.rotation,
        {
          ease: 'SlowMo',

          x: 0,
          y: 0,
          z: 0
          // duration: 10
        }, '<'
      )
      .to(
        ref.current.rotation,
        {
          ease: 'SlowMo',

          x: 0.5,
          y: 0,
          z: 0
          // duration: 10
        }, '<'
      )
    tl.current.pause()
  }, [])
  return (
    <group {...props} dispose={null} ref={ref}position={[0, 1, 0]} rotation={[Math.PI / 4, 0, 0]} scale={1.5} >
      <group ref={guitar}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.knob.geometry}
          material={materials.czern}
           ref={pickupMesh1}
            position={[-1.57, 0.06, 0.4]}
        />
           <mesh
             castShadow
             receiveShadow
             geometry={nodes.knob002.geometry}
             material={materials.czern}
             position={[-1.96, 0.06, 0.63]}
             ref={pickupMesh2}

           />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.drewno001.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.drewno.geometry}
        material={materials['Material.002']}
        material-roughness={0.2}
      />
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.struny.geometry}
        material={materials['Material.004']}
      />
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.sruby.geometry}
        material={materials.sruby}
         material-metalness={3}
material-roughness={0.4}
      />
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.czesci.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cialo.geometry}
        material={materials['Material.005']}
      />
      </group>
    </group>
  )
}

useGLTF.preload('./models/guitarc.glb')
