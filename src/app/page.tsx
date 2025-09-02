"use client"

import Container from "@/components/atoms/container"
import Header from "@/components/molecules/header"
import OffersSection from "@/components/organism/offers-section"
import RecommendationSection from "@/components/organism/recommendation-section"
import { cn } from "@/lib/utils"
import { useCartStore } from "@/stores/cart"

export default function Home() {
  const { count } = useCartStore()

  return (
    <Container className={cn("pt-6", count > 0 ? "pb-90" : "pb-30")}>
      <Header titleText="What would you like today?" />

      <OffersSection />

      <RecommendationSection />
    </Container>
  )
}
