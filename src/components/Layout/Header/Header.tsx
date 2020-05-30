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
        <AppBar color={"primary"} position={"sticky"} className={styles.root}>
          <Toolbar>
            <Grid
              container
              direction={"row"}
              justify={"space-between"}
              alignItems={"center"}
            >
              <Grid item>
                <Grid
                  container
                  alignItems={"center"}
                  direction={"row"}
                  spacing={2}
                >
                  <Grid item>
                    <Title />
                  </Grid>
                  <Grid item>
                    <Blog />
                  </Grid>
                  <Grid item>
                    <About />
                  </Grid>
                  <Grid item>
                    <Contact />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid alignItems={"center"} container direction={"row"}>
                  <Grid item>
                    <Lang />
                  </Grid>
                  <Grid item>
                    <Github />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
