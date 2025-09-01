import { MenuItem } from "@/types/common"
import { OfferItems } from "@/types/offers"

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

export const OFFER_ITEMS: OfferItems[] = [
  {
    title: "Cozy up with autumn specials",
    subtitle: "Fresh from the garden",
    scale: "horizontal",
    direction: "180deg",
    fromColor: "rgba(79, 19, 16, 0) 0%",
    toColor: "#7E2200 70.67%",
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
    cardBg: "3.png",
    minHeight: "min-h-[240px]",
  },
]

export const a = [
  {

  },
]
