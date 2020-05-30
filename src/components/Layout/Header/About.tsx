import React, { FC } from "react"

import { Entry } from "./Entry"
import { useTranslation } from "../../../i18n"

export const About: FC = () => {
  const { about } = useTranslation()
  return <Entry to={"/about"}>{about}</Entry>
}
