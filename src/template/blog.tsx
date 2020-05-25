import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Grid, Typography } from "@material-ui/core"

import { dateFormat } from "../utils"

type Props = PageProps<
  {
    mdx: {
      frontmatter: {
        title: string
        author: string
        date: string
      }
      body: string
      headings: string[]
    }
  },
  {
    locale: string
    title: string
    author: string
  }
>

const Post: FC<Props> = ({ data: { mdx } }) => {
  return (
    <Grid container direction={"column"} spacing={2}>
      <Grid item>
        <Typography variant={"h3"}>{mdx.frontmatter.title}</Typography>
      </Grid>
      <Grid item>
        <Grid container justify={"space-between"} direction={"row"}>
          <Grid item>
            <Typography variant={"caption"}>
              {mdx.frontmatter.author}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"caption"}>
              {dateFormat(mdx.frontmatter.date)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <MDXRenderer headings={mdx.headings}>{mdx.body}</MDXRenderer>
      </Grid>
    </Grid>
  )
}

export default Post

export const query = graphql`
  query Post($locale: String!, $title: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        author
        date
      }
      body
      headings {
        value
        depth
      }
    }
  }
`
