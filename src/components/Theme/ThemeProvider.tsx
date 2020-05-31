import React, { FC } from "react"
import { CssBaseline } from "@material-ui/core"
import { MuiThemeProvider } from "@material-ui/core/styles"

import { darkTheme } from "./dark"

export const ThemeProvider: FC = props => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div {...props} />
    </MuiThemeProvider>
  )
}

export default ThemeProvider
