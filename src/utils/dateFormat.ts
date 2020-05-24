type Props = Date | string | number

export const dateFormat = (date: Props) => {
  date = new Date(date)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
