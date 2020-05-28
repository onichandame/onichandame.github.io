import React, { FC, useContext } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { List, ListItem, Typography, Divider } from "@material-ui/core"

import { LocaleContext, localize } from "../../../i18n"

type Props = {
  close: () => void
}

export const Sidebar: FC<Props> = ({ close, ...other }) => {
  const locale = useContext(LocaleContext)
  const redirect = (path: string) => {
    return () => {
      close()
      navigate(localize(locale, path))
    }
  }
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
    <div {...other}>
      <Typography variant={"h6"}>
        <ListItem button onClick={redirect("/")}>
          {data.site.siteMetadata.author}
        </ListItem>
      </Typography>
      <Divider />
      <List>
        <ListItem button onClick={redirect("/post")}>
          Blog
        </ListItem>
        <ListItem button onClick={redirect("/about")}>
          About
        </ListItem>
        <ListItem button onClick={redirect("/contact")}>
          Contact
        </ListItem>
      </List>
    </div>
  )
}
