// particles rotating around a center point
import React, { FC, useRef, useMemo } from "react"
import { Vector3, Group } from "three"
import { useFrame } from "react-three-fiber"

import { Particle } from "./Particle"

type Props = {
  count: number
}

const width = 25
const depth = 5
const height = 15
const center = new Vector3(0, 0, 0)

const genStartPoint = () => {
  return new Vector3(
    Math.random() * width - width / 2 + center.x,
    Math.random() * height - height / 2 + center.y,
    Math.random() * depth - depth / 2 + center.z
  )
}

export const Particles: FC<Props> = ({ count }) => {
  const group = useRef<Group>(null)
  const particles = useMemo<{ component: React.ReactNode }[]>(() => {
    let result = []
    for (let i = 0; i < count; ++i) {
      result.push({
        component: <Particle position={genStartPoint()} />
      })
    }
    return result
  }, [count])
  const speeds: number[] = []
  for (let i = 0; i < count; ++i) speeds.push(Math.random() * 0.01 + 0.01)
  const animate = () => {
    group.current.children.forEach((particle, i) => {
      particle.position.y += speeds[i]
      //particle.position.x += Math.random() * 0.2 - 0.1
      if (
        particle.position.y - center.y > height / 2 ||
        Math.abs(particle.position.x) - center.x > width / 2
      ) {
        const birthPoint = genStartPoint()
        particle.position.x = birthPoint.x
        particle.position.y = birthPoint.y
        particle.position.z = birthPoint.z
      }
    })
  }
  useFrame(() => {
    animate()
  })
  return (
    <group ref={group} position={center}>
      {particles.map(({ component }) => component)}
    </group>
  )
}
