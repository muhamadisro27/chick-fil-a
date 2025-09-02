import { MenuItem } from "@/types/common"
import { OfferItem, OtherItem } from "@/types/offers"
import { Product, ProductBadgeMap } from "@/types/product"

export const MENU_SIDEBAR: MenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: "cheese-burger.svg",
  },
  {
    title: "Deals",
    url: "/deals",
    icon: "cheese-burger.svg",
  },
  {
    title: "Breakfast",
    url: "/breakfast",
    icon: "cheese-burger.svg",
  },
  {
    title: "Entrées",
    url: "/entrees",
    icon: "chicken-burger.svg",
  },
  {
    title: "Salads",
    url: "/salads",
    icon: "salad.svg",
  },
  {
    title: "Sides",
    url: "/sides",
    icon: "chicken-burger.svg",
  },
  {
    title: "Kid's Meals",
    url: "/kids-meal",
    icon: "kids-meal.svg",
  },
  {
    title: "Treats",
    url: "/treats",
    icon: "treats.svg",
  },
  {
    title: "Beverages",
    url: "/beverages",
    icon: "beverage.svg",
  },
] as const

export const OFFER_ITEMS: OfferItem[] = [
  {
    title: "Cozy up with autumn specials",
    subtitle: "Fresh from the garden",
    scale: "horizontal",
    direction: "180deg",
    fromColor: "rgba(79, 19, 16, 0) 0%",
    toColor: "#7E2200 70.67%",
    position: "top -23px right -1px",
    cardBg: "1.png",
    minHeight: "min-h-[480px]",
  },
  {
    title: "Cozy up with autumn specials",
    subtitle: "Fresh from the garden",
    scale: "horizontal",
    direction: "180deg",
    fromColor: "rgba(91, 68, 68, 0)",
    toColor: "#5C1819 70.67%",
    position: "top -59px right -71px",
    cardBg: "2.png",
    minHeight: "min-h-[480px]",
  },
  {
    title: "Vegan burger",
    subtitle: "Taste like real chicken burger",
    scale: "vertical",
    direction: "270deg",
    fromColor: "rgba(38, 79, 16, 0) 23.01%",
    toColor: "#003116 76.68%",
    position: "top -59px right -71px",
    cardBg: "3.png",
    minHeight: "min-h-[240px]",
  },
]

export const OTHER_ITEMS: OtherItem[] = [
  {
    title: "Berry, Salad, Potato",
    image: "sides.svg",
    bgColor: "bg-success-foreground",
    textColor: "text-success",
    url: "/sides",
  },
  {
    title: "Lemonade, Ice Dream, Milkshake",
    image: "treats.svg",
    bgColor: "bg-warning-foreground",
    textColor: "text-warning",
    url: "/treats",
  },
  {
    title: "Dr Paper, Iced Tea",
    image: "beverage.svg",
    bgColor: "bg-destructive-foreground",
    textColor: "text-destructive",
    url: "/beverages",
  },
]

export const RECOMMENDATION_PRODUCTS: Product[] = [
  {
    id: "2c7f7b84-3c38-4e20-94f0-72c5c8a48a1f",
    title: "Chicken Sandwich",
    description: null,
    price: 39000,
    calorie: 370,
    badge: "hot",
    image: "chicken-sandwich.png",
  },
  {
    id: "5c4cce77-bd73-482a-9870-0a8d537ffcb0",
    title: "Deluxe Sandwich",
    description: null,
    price: 54000,
    calorie: 410,
    badge: "best-seller",
    image: "deluxe-sandwich.png",
  },
  {
    id: "7db5f285-8b8c-49b0-9a36-444f6e6c81f1",
    title: "Grilled Chicken Club Sandwich",
    description: null,
    price: 67000,
    calorie: 490,
    badge: null,
    image: "grilled-chicken-club-sandwich.png",
  },
]

export const PRODUCT_BADGES: ProductBadgeMap = {
  "best-seller": {
    badge: "best-seller",
    image: "best-seller.svg",
    width: 104,
    height: 32,
  },
  "better-value": {
    badge: "better-value",
    image: "better-value.svg",
    width: 116,
    height: 44,
  },
  hot: {
    badge: "hot",
    image: "hot.svg",
    width: 70,
    height: 44,
  },
}

export const PRODUCTS: Product[] = [
  {
    id: "2c7f7b84-3c38-4e20-94f0-72c5c8a48a1f",
    title: "Chicken Sandwich",
    description: "Nashville Crispy Fillet, Bacon Strips",
    price: 39000,
    calorie: 370,
    badge: "best-seller",
    image: "chicken-sandwich.png",
  },
  {
    id: "5c4cce77-bd73-482a-9870-0a8d537ffcb0",
    title: "Deluxe Sandwich",
    description: "Toasted Bun, Extra Beef Patty",
    price: 54000,
    calorie: 410,
    badge: "better-value",
    image: "deluxe-sandwich.png",
  },
  {
    id: "7db5f285-8b8c-49b0-9a36-44f6e6c81f1",
    title: "Grilled Chicken Club Sandwich",
    description: "Crispy Chicken",
    price: 67000,
    calorie: 490,
    badge: null,
    image: "grilled-chicken-club-sandwich.png",
  },
  {
    id: "7db5f285-8b8c-49b0-9a36-444f26c81f1",
    title: "Nuggets",
    description: null,
    price: 67000,
    calorie: 250,
    badge: null,
    image: "grilled-chicken-club-sandwich.png",
  },
  {
    id: "7db5f285-8b8c-49b0-9a36-441f6e6c81f1",
    title: "Grilled Nuggets",
    description: null,
    price: 67000,
    calorie: 490,
    badge: null,
    image: "grilled-chicken-club-sandwich.png",
  },
  {
    id: "7db5f285-8b8c-49b0-9a36-441f626c81f1",
    title: "Spicy Chicken Sandwich",
    description: null,
    price: 67000,
    calorie: 490,
    badge: null,
    image: "chicken-sandwich.png",
  },
]
