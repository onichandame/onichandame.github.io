import React, { FC, ComponentProps } from "react"
import { Button } from "@material-ui/core"

type Props = ComponentProps<typeof Button>

export const Entry: FC<Props> = props => {
  return <Button variant={"text"} {...props} />
}
