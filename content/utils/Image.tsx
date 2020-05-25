import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type Props = {
  src: string
}

export const Image: FC<Props> = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "${src}" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
