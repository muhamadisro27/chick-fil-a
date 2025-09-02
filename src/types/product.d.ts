export interface Product {
  id: string
  title: string
  description: string | null
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

export interface ProductCart
  extends Pick<Product, "id" | "image" | "title" | "description" | "price"> {
  quantity: number
}
