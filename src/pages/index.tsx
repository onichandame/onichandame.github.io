import React, { FC } from "react"
import { graphql } from "gatsby"
import { Typography, Grid } from "@material-ui/core"

import { BlogPageProps } from "../types"
import { LocalizedLink, useTranslation } from "../i18n"
import { BlogList } from "../components/Blog"

const IndexPage: FC<BlogPageProps> = ({ data: { allMdx } }) => {
  const { greeting, more } = useTranslation()
  return (
    <Grid container spacing={5} alignItems={"stretch"} direction={"column"}>
      <Grid item>
        <Typography align={"center"} variant="h3">
          {greeting}
        </Typography>
      </Grid>
      <Grid item>
        <BlogList
          posts={allMdx.edges.map(({ node: post }) => ({
            title: post.frontmatter.title,
            date: post.frontmatter.date,
            author: post.frontmatter.author,
            slug: post.parent.relativeDirectory
          }))}
        />
        <LocalizedLink to={"/post"}>{`${more}...`}</LocalizedLink>
      </Grid>
    </Grid>
  )
}

export default IndexPage

export const query = graphql`
  query Toc($locale: String!) {
    allMdx(
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fields: { locale: { eq: $locale } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            author
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
