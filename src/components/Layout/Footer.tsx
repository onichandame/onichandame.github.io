import React, { FC } from "react"

export const Footer: FC = props => {
  return (
    <footer {...props}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}
