import React, { FC, useContext, useState } from "react"
import { navigate } from "gatsby"
import { Menu, Button, MenuItem } from "@material-ui/core"
import { Translate, ExpandMore } from "@material-ui/icons"

import { locales, LocaleContext, replaceLocale } from "../../../i18n"

export const Lang: FC = () => {
  const locale = useContext(LocaleContext)
  const [anchor, setAnchor] = useState<null | HTMLElement>(null)
  const close = () => setAnchor(null)
  return (
    <div>
      <Button
        aria-controls="language-selector"
        aria-haspopup="true"
        onClick={({ currentTarget }) => setAnchor(currentTarget)}
      >
        <Translate />

        {locales[locale].full}
        <ExpandMore />
      </Button>
      <Menu
        id="language-selector"
        anchorEl={anchor}
        keepMounted
        open={!!anchor}
        onClose={close}
      >
        {Object.keys(locales).map(locale => (
          <MenuItem
            button
            onClick={() => {
              close()
              navigate(replaceLocale(window.location.pathname, locale))
            }}
            id={locale}
            value={locale}
          >
            {locales[locale].full}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
