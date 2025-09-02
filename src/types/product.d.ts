export interface Product {
  id: string
  title: string
  price: number
  calorie: number
  image: string
  badge: ProductBadge | null
}

export type ProductBadge = "hot" | "best-seller" | "better-value"

export type ProductBadgeMap = {
  [K in ProductBadge]: {
    badge: ProductBadge
    image: string
    width: number
    height: number
  }
}
