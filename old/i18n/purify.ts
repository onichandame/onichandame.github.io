import { locales } from "./locales"

export const purify = (raw: string) => {
  const subpaths = raw.split("/").filter(subpath => !!subpath)
  const currentLocale = subpaths[0]
  if (Object.keys(locales).indexOf(currentLocale) >= 0) subpaths.shift()
  return subpaths.join("/")
}
