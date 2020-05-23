import { localize } from "./localize"
import { purify } from "./purify"

export const replaceLocale = (path: string, locale: string) => {
  return localize(locale, purify(path))
}
