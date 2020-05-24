import React, { FC } from "react"
import { Grid, Typography } from "@material-ui/core"

import { dateFormat } from "../../utils"

type Props = {
  title: string
  author: string
  date: string | Date | number
}

export const Entry: FC<Props> = ({ title, author, date }) => {
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Typography variant={"h6"}>{title}</Typography>
      </Grid>
      <Grid item>
        <Grid container direction={"row"} justify={"space-between"}>
          <Grid item>
            <Typography variant={"subtitle1"}>{author}</Typography>
          </Grid>
          <Grid item>
            <Typography variant={"subtitle1"}>{dateFormat(date)}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
