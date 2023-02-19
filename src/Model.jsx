import { Stage, OrbitControls } from '@react-three/drei'
import { Canvas, extend } from '@react-three/fiber'
import React from 'react'
import Model from './assets/guitar'
extend({ OrbitControls })

// function Model (props) {
//   const { scene } = useGLTF('guitar.glb')
//   return <primitive object={scene} {...props} />
// }
function Render () {
  return (
  <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }} style={{ position: 'absolute'/*, width: '600px', height: '600px' */ }} >
      <ambientLight />
<color attach="background" args={['#9EABA4']}/>
<OrbitControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}/>
  <Stage environment={null} intensity={1} contactShadowOpacity={0.1} shadowBias={-0.0015}>
    <Model scale={0.11}></Model>
  </Stage>
  </Canvas>
  )
}
export default Render
