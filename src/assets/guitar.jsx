import { React, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model (props, ref) {
  const { scene } = useGLTF('guitar.glb')
  return <primitive ref={ref} object={scene} {...props} />
}
export default forwardRef(Model)
// export const scene = useGLTF('guitar.glb').scene
// export default function Model () {
//   const { nodes } = useGLTF('/guitar.glb')

//   return (

//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh castShadow geometry={nodes.Object_2.geometry}>
//           <meshStandardMaterial color={snap.lid} name="lid" />
//         </mesh>
//         <mesh castShadow geometry={nodes.Object_3.geometry}>
//           <meshStandardMaterial color={snap.base} name="base" />
//         </mesh>
//       </group>
//   )
// }

// useGLTF.preload('./guitar.glb')
