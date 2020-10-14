import React, { FC } from "react"
import { Typography } from "@material-ui/core"

import { LocalizedLink } from "../../../i18n/LocalizedLink"

type Props = {
  to: string
}

export const Entry: FC<Props> = ({ to, ...other }) => {
  return (
    <LocalizedLink decoration={"none"} to={to}>
      <Typography {...other} variant={"button"} />
    </LocalizedLink>
  )
}
