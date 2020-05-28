import React, { FC } from "react"
import { PageProps } from "gatsby"
import { makeStyles, Theme } from "@material-ui/core/styles"

import { ThemeProvider } from "../Theme"
import { LocaleContext } from "../../i18n"
import "./Layout.css"
import { Header } from "./Header"
import { Footer } from "./Footer"

type Props = PageProps<{}, { locale: string }>

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    padding: theme.spacing(2)
  }
}))

export const Layout: FC<Props> = ({ children, pageContext: { locale } }) => {
  const { main } = useStyles()
  return (
    <ThemeProvider>
      <LocaleContext.Provider value={locale}>
        <div>
          <Header />
          <main className={main}>{children}</main>
          <Footer />
        </div>
      </LocaleContext.Provider>
    </ThemeProvider>
  )
}
