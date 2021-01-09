import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Grid, Typography } from "@material-ui/core"

import { useTranslation } from "../i18n"
import { SEO } from "../components/SEO"

type Props = PageProps<
  {
    mdx: {
      body: string
      headings: string[]
    }
  },
  {
    name: string
    locale: string
  }
>

const Post: FC<Props> = ({ data: { mdx }, pageContext: { locale } }) => {
  const { author } = useTranslation()
  return (
    <>
      <SEO title={author} lang={locale} />
      <Grid container direction={"column"} spacing={0} alignItems={"center"}>
        <Grid item>
          <Typography variant={"h3"}>{author}</Typography>
        </Grid>
        <Grid item>
          <MDXRenderer headings={mdx.headings}>{mdx.body}</MDXRenderer>
        </Grid>
      </Grid>
    </>
  )
}

export default Post

export const query = graphql`
  query Resume($locale: String!, $type: String!) {
    mdx(fields: { type: { eq: $type }, locale: { eq: $locale } }) {
      body
      headings {
        value
        depth
      }
    }
  }
`
