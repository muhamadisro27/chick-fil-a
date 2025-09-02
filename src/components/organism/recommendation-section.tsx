import React from "react"
import Box from "@/components/atoms/box"
import CardTitle from "@/components/molecules/card-title"
import ProductList from "./product-list"
import { RECOMMENDATION_PRODUCTS } from "@/utils/constant"

const RecommendationSection = () => {
  return (
    <Box as="section" id="product-offers" className="pt-10">
      <CardTitle text="Recomendation" />

      <ProductList products={RECOMMENDATION_PRODUCTS} />
    </Box>
  )
}

export default RecommendationSection
