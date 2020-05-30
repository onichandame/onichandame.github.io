import React, { FC } from "react"
import "three"
import { Canvas } from "react-three-fiber"

import { Scene } from "./Scene"

export const Background: FC = props => {
  return (
    <Canvas {...props}>
      <Scene>
        <mesh position={[1, 1, 0]}>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshPhysicalMaterial attach="material" color={"blue"} />
        </mesh>
      </Scene>
    </Canvas>
  )
}
