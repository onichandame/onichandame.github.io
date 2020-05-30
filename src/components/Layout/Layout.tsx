import React, { FC } from "react"
import { PageProps } from "gatsby"
import { makeStyles, Theme } from "@material-ui/core/styles"

import { ThemeProvider } from "../Theme"
import { LocaleContext } from "../../i18n"
import { Background } from "./Background"
import { Header } from "./Header"
import { Footer } from "./Footer"

type Props = PageProps<{}, { locale: string }>

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    padding: theme.spacing(2),
    zIndex: 1100
  }
}))

export const Layout: FC<Props> = ({ children, pageContext: { locale } }) => {
  const { main } = useStyles()
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <Background />
      </div>
      <ThemeProvider>
        <LocaleContext.Provider value={locale}>
          <div style={{ position: "absolute", width: "100vw" }}>
            <Header />
            <main className={main}>{children}</main>
            <Footer />
          </div>
        </LocaleContext.Provider>
      </ThemeProvider>
    </>
  )
}
