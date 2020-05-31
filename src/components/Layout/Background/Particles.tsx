// particles rotating around a center point
import React, { FC, useRef, useMemo } from "react"
import { Vector3, Mesh, Group } from "three"
import { useFrame } from "react-three-fiber"
import { clamp } from "@onichandame/math"

import { Particle } from "./Particle"

type Props = {
  count: number
}

const center = new Vector3(0, 0, -5)
const radius = 10
const width = 10
const speed = (0.1 * Math.PI) / 180

export const Particles: FC<Props> = ({ count }) => {
  const group = useRef<Group>(null)
  const particles = useMemo<
    { ref: React.MutableRefObject<Mesh>; component: React.ReactNode }[]
  >(() => {
    let result = []
    for (let i = 0; i < count; ++i) {
      const ref = useRef<Mesh>(null)
      const randAngle = clamp(Math.random() * 2 * Math.PI, 0, 2 * Math.PI)
      result.push({
        ref: ref,
        component: (
          <Particle
            position={[
              Math.random() * width - width / 2,
              Math.cos(randAngle) * radius,
              Math.sin(randAngle) * radius
            ]}
            ref={ref}
          />
        )
      })
    }
    return result
  }, [count])
  useFrame(() => {
    group && group.current && group.current.rotateX(-speed)
  })
  return (
    <group ref={group} position={center.toArray() as [number, number, number]}>
      {particles.map(({ component }) => component)}
    </group>
  )
}
