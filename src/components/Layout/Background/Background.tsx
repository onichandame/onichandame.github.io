import React, { FC, ComponentProps } from "react"
import { Canvas } from "react-three-fiber"

import { Scene } from "./Scene"
import { Particles } from "./Particles"

type Props = Omit<ComponentProps<typeof Canvas>, "children">

export const Background: FC<Props> = props => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 10]
      }}
      {...props}
    >
      <Scene>
        <group>
          <Particles count={10} />
        </group>
      </Scene>
    </Canvas>
  )
}
