// particles rotating around a center point
import React, { FC, useRef, useMemo } from "react"
import { Vector3, Group } from "three"
import { useFrame } from "react-three-fiber"

import { Particle } from "./Particle"

type Props = {
  count: number
}

const center = new Vector3(0, 0, -5)
const radius = 10

export const Particles: FC<Props> = ({ count }) => {
  const group = useRef<Group>(null)
  const particles = useMemo<{ component: React.ReactNode }[]>(() => {
    let result = []
    for (let i = 0; i < count; ++i) {
      const angle = Math.random() * 2 * Math.PI
      const distance = Math.random() * radius
      result.push({
        component: (
          <Particle
            position={[
              Math.cos(angle) * distance,
              Math.sin(angle) * distance,
              Math.sin(angle) * distance
            ]}
          />
        )
      })
    }
    return result
  }, [count])
  const animate = () => {
    group.current.children.forEach(particle => {
      particle.position.y += Math.random() * 0.1 + 0.1
      if (particle.position.y > 5) particle.position.y = 0
    })
  }
  useFrame(() => {
    animate()
  })
  return (
    <group ref={group} position={center.toArray() as [number, number, number]}>
      {particles.map(({ component }) => component)}
    </group>
  )
}
