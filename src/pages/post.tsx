import React, { FC } from "react"
import { graphql } from "gatsby"

import { BlogPageProps } from "../types"
import { SEO } from "../components/SEO"
import { BlogList } from "../components/Blog"

const BlogPage: FC<BlogPageProps> = ({
  data: { allMdx },
  pageContext: { locale }
}) => {
  return (
    <>
      <SEO title={"Blogs"} lang={locale} />
      <BlogList
        posts={allMdx.edges.map(({ node: post }) => ({
          title: post.frontmatter.title,
          date: post.frontmatter.date,
          author: post.frontmatter.author,
          slug: post.parent.relativeDirectory
        }))}
      />
    </>
  )
}

export default BlogPage

export const query = graphql`
  query To($locale: String!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fields: { locale: { eq: $locale }, type: { eq: "post" } } }
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
