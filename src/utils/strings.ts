export const formattedNumber = (num: number, additionalText: string = "") =>
  `${new Intl.NumberFormat("id-ID").format(num)} ${additionalText}`
