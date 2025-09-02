import Box from "@/components/atoms/box"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"
import BadgeProductCategory from "./badge-product-categories"
import ProductList from "./product-list"
import { PRODUCTS } from "@/utils/constant"

type ProductSectionProps = {} & ComponentPropsWithoutRef<typeof Box>

const ProductSection = ({ className, ...props }: ProductSectionProps) => {
  return (
    <Box as="section" className={cn("pt-10", className)} {...props}>
      <BadgeProductCategory />
      
      <ProductList products={PRODUCTS} />
    </Box>
  )
}

export default ProductSection
