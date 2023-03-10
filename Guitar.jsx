/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/guitar.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/guitar.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.cialo.geometry} material={materials.Material} />
      <mesh geometry={nodes.podkladki.geometry} material={materials.czarny} />
      <mesh geometry={nodes.pickup.geometry} material={nodes.pickup.material} />
      <mesh geometry={nodes.drewno.geometry} material={materials.drewno} />
      <mesh geometry={nodes.frets.geometry} material={nodes.frets.material} position={[-0.56, 0.07, 0.2]} />
      <mesh geometry={nodes.mos.geometry} material={nodes.mos.material} />
      <mesh geometry={nodes.most.geometry} material={nodes.most.material} />
      <mesh geometry={nodes.nut.geometry} material={nodes.nut.material} />
      <mesh geometry={nodes.pret.geometry} material={nodes.pret.material} />
      <mesh geometry={nodes.dziury.geometry} material={nodes.dziury.material} />
      <mesh geometry={nodes.struny.geometry} material={nodes.struny.material} position={[0.14, 0.07, 0.33]} />
      <mesh geometry={nodes.wejscie.geometry} material={nodes.wejscie.material} position={[-2.35, -0.08, 0.85]} />
      <group position={[-2.31, -0.08, 0.91]} rotation={[0.28, 0.47, 1.44]} scale={0.62}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Cylinder007_1.geometry} material={nodes.Cylinder007_1.material} />
        <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Cylinder007_3.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cylinder007_4.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Cylinder007_5.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Cylinder007_6.geometry} material={materials['Material.019']} />
        <mesh geometry={nodes.Cylinder007_7.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.Cylinder007_8.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Cylinder007_9.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.Cylinder007_10.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Cylinder007_11.geometry} material={materials['Material.024']} />
        <mesh geometry={nodes.Cylinder007_12.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Cylinder007_13.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.Cylinder007_14.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.Cylinder007_15.geometry} material={materials['Material.028']} />
        <mesh geometry={nodes.Cylinder007_16.geometry} material={materials['Material.009']} />
      </group>
      <mesh geometry={nodes.knob.geometry} material={nodes.knob.material} position={[-1.55, 0.07, 0.59]} scale={0.05} />
      <mesh geometry={nodes.przel.geometry} material={nodes.przel.material} position={[-1.61, 0.04, 0.75]} scale={0.05} />
      <group position={[0.06, -0.08, -0.39]} rotation={[0, -0.05, -1.57]} scale={1.03}>
        <mesh geometry={nodes.Cylinder010.geometry} material={materials['Material.031']} />
        <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['Material.032']} />
        <mesh geometry={nodes.Cylinder010_2.geometry} material={materials['Material.033']} />
        <mesh geometry={nodes.Cylinder010_3.geometry} material={materials['Material.013']} />
      </group>
      <mesh geometry={nodes.klucze.geometry} material={nodes.klucze.material} position={[2.51, -0.09, 0.52]} scale={0.08} />
      <mesh geometry={nodes.Cube027.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Cube027_1.geometry} material={materials.czarny} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Circle034.geometry} material={nodes.Circle034.material} />
      <mesh geometry={nodes.Circle034_1.geometry} material={materials['Material.008']} />
      <mesh geometry={nodes.Circle034_2.geometry} material={materials['Material.018']} />
      <mesh geometry={nodes.Circle034_3.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Circle034_4.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Circle034_5.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.Circle034_6.geometry} material={materials['Material.007']} />
    </group>
  )
}

useGLTF.preload('/guitar.glb')
