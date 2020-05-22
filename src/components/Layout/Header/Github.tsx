import React, { FC } from "react"
import { IconButton } from "@material-ui/core"
import { GitHub } from "@material-ui/icons"
import { useStaticQuery, graphql } from "gatsby"

export const Github: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
        }
      }
    }
  `)
  return (
    <IconButton href={data.site.siteMetadata.github}>
      <GitHub />
    </IconButton>
  )
}
