import React, { FC, ComponentProps, useContext } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link } from "gatsby"

import { LocaleContext, localize } from "../i18n"

const useStyles = makeStyles((theme: Theme) => ({
  none: {
    textDecoration: "none",
    color: theme.palette.text.primary
  }
}))

type Props = {
  decoration?: "none" | "default"
} & ComponentProps<typeof Link>

export const LocalizedLink: FC<Props> = ({
  to,
  ref,
  decoration = "default",
  ...other
}) => {
  const { none } = useStyles()
  const locale = useContext(LocaleContext)
  return (
    <Link
      className={decoration === "none" ? none : ""}
      to={localize(locale, to)}
      {...other}
    />
  )
}
