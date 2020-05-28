import React, { FC } from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { LocalizedLink } from "../../../i18n/LocalizedLink"
import { useTranslation } from "../../../i18n"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}))

export const Title: FC = () => {
  const { home } = useTranslation()
  const { root } = useStyles()
  return (
    <Typography className={root} variant={"h6"}>
      <LocalizedLink
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        {home}
      </LocalizedLink>
    </Typography>
  )
}
