"use client"

import { useCart } from "@/hooks/use-cart"
import Box from "../atoms/box"
import { ScrollArea } from "../ui/scroll-area"
import { ProductCart } from "@/types/product"
import ProductCartCard from "./ProductCartCard"
import Typography from "../atoms/typography"

const CartListSection = () => {
  const { products } = useCart()

  const renderProducts = (products: ProductCart[]) => {
    if (products.length === 0) {
      return (
        <Box className="w-full m-auto">
          <Typography as="h5" className="text-center text-secondary">
            No items in cart
          </Typography>
        </Box>
      )
    }

    return (
      <Box className="grid space-y-4 max-h-[500px] pb-20">
        {products.map((product) => (
          <ProductCartCard key={product.id} product={product} />
        ))}
      </Box>
    )
  }

  return (
    <Box className="mt-4 md:mt-8 border-t">
      <ScrollArea className="h-full w-full p-4 py-4">
        {renderProducts(products)}
      </ScrollArea>
    </Box>
  )
}

export default CartListSection
