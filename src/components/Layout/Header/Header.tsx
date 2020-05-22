import React, { FC, ReactElement } from "react"
import { AppBar, Toolbar, Slide, useScrollTrigger } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

import { Title } from "./Title"
import { Lang } from "./Lang"
import { Github } from "./Github"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2)
  }
}))

const HideOnScroll: FC = ({ children }) => {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children as ReactElement}
    </Slide>
  )
}

export const Header: FC = props => {
  const styles = useStyles()
  return (
    <HideOnScroll {...props}>
      <AppBar color={"primary"} position={"fixed"} className={styles.root}>
        <Toolbar>
          <Title />
          <Lang />
          <Github />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
