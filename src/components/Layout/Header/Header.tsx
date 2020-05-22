import React, { FC, ReactElement, useReducer } from "react"
import {
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
  IconButton,
  Drawer
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { makeStyles, Theme } from "@material-ui/core/styles"

import { Title } from "./Title"
import { Lang } from "./Lang"
import { Github } from "./Github"
import { Sidebar } from "./Sidebar"

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
  const [open, toggle] = useReducer(old => !old, false)
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color={"primary"} position={"fixed"} className={styles.root}>
          <Toolbar>
            <IconButton onClick={toggle}>
              <Menu />
            </IconButton>
            <Title />
            <Lang />
            <Github />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        open={open}
        onClose={toggle}
        style={{ width: 240 }}
        anchor="left"
        variant="temporary"
      >
        <Sidebar />
      </Drawer>
    </>
  )
}
