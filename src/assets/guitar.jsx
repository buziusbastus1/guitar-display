import { React } from 'react'
import { useGLTF } from '@react-three/drei'

function Model (props) {
  const { scene } = useGLTF('guitar.glb')
  return <primitive object={scene} {...props} />
}
export default Model

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
