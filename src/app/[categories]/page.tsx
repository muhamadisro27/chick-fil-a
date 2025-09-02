"use client"

import Container from "@/components/atoms/container"
import Header from "@/components/molecules/header"
import OffersSection from "@/components/organism/offers-section"
import ProductSection from "@/components/organism/product-section"
import { cn } from "@/lib/utils"
import { useCartStore } from "@/stores/cart"
import { formatLabel } from "@/utils/strings"
import { usePathname } from "next/navigation"
import React from "react"

const Page = () => {
  const pathname = usePathname()

  const { count } = useCartStore()

  const title = pathname.split("/")[1]

  return (
    <Container className={cn("pt-6", count > 0 ? "pb-90" : "pb-30")}>
      <Header
        titleText={formatLabel(title)}
        hasDescription
        descriptionText={`${formatLabel(
          title
        )} is served until 12.00, get your favorites before they’re gone!`}
      />

      <OffersSection
        className="pt-6"
        showOnly="2"
        showTitle={false}
        showOthers={false}
      />

      <ProductSection id={`${title}-products`} />
    </Container>
  )
}

export default Page
