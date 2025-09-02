export type Scale = "horizontal" | "vertical"

export type OfferItem = {
  title: string
  subtitle: string
  scale: Scale
  direction: string
  fromColor: string
  toColor: string
  cardBg: string
  position: string
  minHeight: string
}

export type OtherItem = {
  title: string
  url: string
  image: string
  bgColor:
    | "bg-success-foreground"
    | "bg-warning-foreground"
    | "bg-destructive-foreground"
  textColor: "text-success" | "text-warning" | "text-destructive"
}
