import React, { FC, Suspense } from "react"
import "three"
import { StandardEffects } from "drei"

export const Scene: FC = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <StandardEffects />
      <ambientLight />
      <pointLight position={[-5, 0, 0]} intensity={5} />
      <pointLight position={[0, -5, 0]} intensity={2} />
      {children}
    </Suspense>
  )
}
