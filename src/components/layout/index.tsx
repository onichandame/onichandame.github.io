import React, { FC, Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import { SEO } from "../SEO"

export const Layout: FC = ({ children, ...other }) => {
  return (
    <div {...other}>
      <SEO title="Home" />
      <Canvas
        colorManagement
        shadowMap
        pixelRatio={window.devicePixelRatio}
        concurrent
        style={{ height: "100vh", width: "100vw" }}
        camera={{
          isPerspectiveCamera: true,
          position: [-15, 5, 20],
          fov: 55,
          near: 0.01,
          far: 1000
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
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}
