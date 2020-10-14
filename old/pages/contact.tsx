import React, { FC } from "react"
import { Grid } from "@material-ui/core"

const ContactPage: FC = () => {
  return (
    <Grid container direction={"column"}>
      <Grid item>
        email: <a href={"mailto:zxinmyth@gmail.com"}>zxinmyth@gmail.com</a>
      </Grid>
    </Grid>
  )
}

export default ContactPage
