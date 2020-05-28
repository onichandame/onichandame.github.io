import React, { FC, ComponentProps, useContext } from "react"
import { navigate } from "gatsby"
import { List, ListItem } from "@material-ui/core"

import { localize, LocaleContext } from "../../i18n"
import { Entry } from "./Entry"

type Props = {
  posts: Array<{ slug: string } & ComponentProps<typeof Entry>>
}
export const BlogList: FC<Props> = ({ posts }) => {
  const locale = useContext(LocaleContext)
  return (
    <List>
      {posts.map(({ slug, ...other }) => (
        <ListItem
          button
          onClick={() => navigate(localize(locale, `/post/${slug}`))}
        >
          <Entry {...other} />
        </ListItem>
      ))}
    </List>
  )
}
