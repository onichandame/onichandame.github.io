import React, { FC, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { List, Link, ListItem, Typography, Divider } from "@material-ui/core"

import { LocaleContext, localize } from "../../../i18n"

export const Sidebar: FC = props => {
  const locale = useContext(LocaleContext)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div {...props}>
      <Typography variant={"h6"}>
        <Link href={localize(locale, "/")}>
          {data.site.siteMetadata.author}
        </Link>
      </Typography>
      <Divider />
      <List>
        <ListItem button>Blog</ListItem>
        <ListItem button>About</ListItem>
        <ListItem button>Contact</ListItem>
      </List>
    </div>
  )
}
