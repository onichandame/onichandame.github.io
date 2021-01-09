import React, { FC, ReactElement, useReducer } from "react"
import {
  AppBar,
  Grid,
  Toolbar,
  Slide,
  useScrollTrigger,
  Drawer
} from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

import { Title } from "./Title"
import { Blog } from "./Blog"
import { About } from "./About"
import { Contact } from "./Contact"
import { Lang } from "./Lang"
import { Github } from "./Github"
import { Sidebar } from "./Sidebar"

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  tab: { marginLeft: theme.spacing(2) },
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

export const Header: FC = () => {
  const styles = useStyles()
  const [open, toggle] = useReducer(old => !old, false)
  return (
    <>
      <HideOnScroll>
        <AppBar color={"primary"} position="static" className={styles.root}>
          <Toolbar>
            <Title />
            <div className={styles.tab}>
              <Blog />
            </div>
            <div className={styles.tab}>
              <About />
            </div>
            <div className={styles.tab}>
              <Contact />
            </div>
            <div style={{ flexGrow: 1 }} />
            <div style={{ flexGrow: 1 }} />
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
            <Sidebar close={toggle} />
          </Grid>
        </Grid>
      </Drawer>
    </>
  )
}
