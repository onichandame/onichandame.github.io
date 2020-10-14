import React, { FC, Suspense } from "react"
import "three"
import { StandardEffects } from "drei"

export const Scene: FC = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <StandardEffects />
      <ambientLight />
      {children}
    </Suspense>
  )
}
