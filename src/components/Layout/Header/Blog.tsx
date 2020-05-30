import React, { FC } from "react"

import { Entry } from "./Entry"
import { useTranslation } from "../../../i18n"

export const Blog: FC = () => {
  const { blog } = useTranslation()
  return <Entry>{blog}</Entry>
}
