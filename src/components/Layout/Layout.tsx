import React, { FC } from "react"
import { PageProps } from "gatsby"
import { Grid } from "@material-ui/core"

import { ThemeProvider } from "../Theme"
import { LocaleContext } from "../../i18n"
import "./Layout.css"
import { Header } from "./Header"
import { Footer } from "./Footer"

type Props = PageProps<{}, { locale: string }>

export const Layout: FC<Props> = ({ children, pageContext: { locale } }) => {
  return (
    <ThemeProvider>
      <LocaleContext.Provider value={locale}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <main style={{ flexGrow: 1 }}>{children}</main>
          <Footer />
        </div>
      </LocaleContext.Provider>
    </ThemeProvider>
  )
}
