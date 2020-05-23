import React, { FC, ReactElement, useReducer } from "react"
import {
  AppBar,
  Grid,
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

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2)
  },
  drawer: {
    width: drawerWidth
  },
  drawerContent: {
    width: drawerWidth
  },
  menuButtom: {
    marginRight: theme.spacing(2)
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
    <div style={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <AppBar position={"fixed"} className={styles.root}>
          <Toolbar>
            <IconButton onClick={toggle} className={styles.menuButtom}>
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
        className={styles.drawer}
        anchor="left"
        variant="temporary"
      >
        <Grid
          className={styles.drawerContent}
          container
          direction="row"
          justify="center"
        >
          <Grid item xs={10}>
            <Sidebar />
          </Grid>
        </Grid>
      </Drawer>
    </div>
  )
}
