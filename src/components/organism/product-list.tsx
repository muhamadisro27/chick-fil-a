"use client"

import Box from "@/components/atoms/box"
import ProductCard from "./product-card"
import { Product } from "@/types/product"

type ProductListProps = {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Box className="grid grid-cols-3 gap-6 pt-3">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Box>
  )
}

export default ProductList
