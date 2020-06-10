// particle rotating around a center point
import React, { FC, useRef, ComponentProps } from "react"
import { Mesh, Color } from "three"

type Props = ComponentProps<"mesh">

export const Particle: FC<Props> = props => {
  const particle = useRef<Mesh>(null)
  return (
    <mesh ref={particle} {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.05, 32, 32]} />
      <meshPhysicalMaterial
        emissive={new Color(0x00ff00)}
        emissiveIntensity={5}
        reflectivity={1}
        color={"blue"}
        attach="material"
      />
    </mesh>
  )
}
