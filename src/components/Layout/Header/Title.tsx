import React, { FC } from "react"
import { Typography } from "@material-ui/core"

import { LocalizedLink } from "../../../i18n/LocalizedLink"
import { useTranslation } from "../../../i18n"

export const Title: FC = () => {
  const { home } = useTranslation()
  return (
    <Typography variant={"h6"}>
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
