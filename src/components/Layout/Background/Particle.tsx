// particle rotating around a center point
import React, { FC, useRef, ComponentProps } from "react"
import { useFrame } from "react-three-fiber"
import { Mesh, Color } from "three"

type Props = ComponentProps<"mesh">

export const Particle: FC<Props> = props => {
  const particle = useRef<Mesh>(null)
  useFrame(() => {
    if (particle && particle.current) {
      const model = particle.current
      model.position.y += 0.1
    }
  })
  return (
    <mesh ref={particle} {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.01, 32, 32]} />
      <meshPhysicalMaterial
        emissive={new Color(0x00ff00)}
        emissiveIntensity={1}
        reflectivity={1}
        color={"blue"}
        attach="material"
      />
    </mesh>
  )
}
