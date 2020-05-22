import React, { FC } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Drawer, Divider } from "@material-ui/core"

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 240
  },
  top: theme.mixins.toolbar
}))

export const Toc: FC = () => {
  const { top } = useStyles()
  return (
    <Drawer>
      <div className={top} />
      <Divider />
    </Drawer>
  )
}
