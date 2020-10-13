import React, { Suspense } from "react"
import { OrbitControls, Sphere, useGLTF } from "@react-three/drei"
import { Canvas } from "react-three-fiber"

import { SEO } from "./component"

const Test = () => {
  const gltf = useGLTF(`/test.glb`)
  return <primitive object={gltf.scene} />
}

function App() {
  return (
    <div>
      <SEO />
      <Canvas
        style={{ height: "100vh", width: "100vw" }}
        colorManagement
        shadowMap
        pixelRatio={window.devicePixelRatio}
        concurrent
        camera={{
          isPerspectiveCamera: true,
          position: [-15, 5, 20],
          fov: 55,
          near: 0.01,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.8} />
        <spotLight intensity={1} position={[-16, 16, 0]} color="blue" />
        <spotLight intensity={1} position={[16, 16, 0]} color="red" />
        <OrbitControls minZoom={10} maxZoom={1} />
        <Suspense
          fallback={
            <Sphere>
              <meshBasicMaterial attach="material" color="hotpink" />
            </Sphere>
          }
        >
          <Test />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
