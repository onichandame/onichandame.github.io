import React, { FC } from "react"

import { Entry } from "./Entry"
import { useTranslation } from "../../../i18n"

export const Contact: FC = () => {
  const { contact } = useTranslation()
  return <Entry to={"/contact"}>{contact}</Entry>
}
