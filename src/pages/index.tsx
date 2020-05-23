import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import { Typography } from "@material-ui/core"

import { Image } from "../components/Image"
import { LocalizedLink, useTranslation } from "../i18n"

type Props = PageProps<
  {
    allMdx: {
      edges: {
        node: {
          frontmatter: {
            title: string
          }
          fields: {
            name: string
            locale: string
          }
          parent: {
            relativeDirectory: string
          }
        }
      }[]
    }
  },
  { locale: string }
>

const IndexPage: FC<Props> = ({ data: { allMdx } }) => {
  const { greeting } = useTranslation()
  return (
    <div style={{ border: "1px green solid" }}>
      <Typography variant="h3">{greeting}</Typography>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        {allMdx.edges.map(({ node: post }) => (
          <div>
            <h5>{post.frontmatter.title}</h5>
            <LocalizedLink to={`posts/${post.parent.relativeDirectory}`}>
              {post.parent.relativeDirectory}
            </LocalizedLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query Toc($locale: String!) {
    allMdx(filter: { fields: { locale: { eq: $locale } } }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            name
            locale
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`
