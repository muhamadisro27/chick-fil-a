export function formatLabel(str: string): string {
  if (!str) return ""

  const exceptions = ["nik", "ktp", "npwp"]

  return str
    .split("-")
    .map((word) => {
      const lower = word.toLowerCase()
      if (exceptions.includes(lower)) return lower.toUpperCase()
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(" ")
}

export const formattedNumber = (num: number, additionalText: string = "") =>
  `${new Intl.NumberFormat("id-ID").format(num)} ${additionalText}`
