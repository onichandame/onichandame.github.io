import React, { FC } from "react"
import { AppBar, Typography, Toolbar } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

import { Lang } from "./Lang"
import { LocalizedLink } from "../../i18n/LocalizedLink"
import { useTranslation } from "../../i18n"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2)
  }
}))

export const Header: FC = () => {
  const { home } = useTranslation()
  const styles = useStyles()
  return (
    <AppBar className={styles.root}>
      <Toolbar>
        <Typography
          variant={"h5"}
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <LocalizedLink
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {home}
          </LocalizedLink>
        </Typography>
        <Lang />
      </Toolbar>
    </AppBar>
  )
}
