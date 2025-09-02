"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Box from "@/components/atoms/box"
import Image from "next/image"
import { Product, ProductBadge, ProductBadgeMap } from "@/types/product"
import Typography from "../atoms/typography"
import { formattedNumber } from "@/utils/strings"
import { PRODUCT_BADGES } from "@/utils/constant"
import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import ProductQuantity from "./product-quantity"

type ProductCardProps = {
  product: Product
}

const Badge = ({
  productBadge,
}: {
  productBadge: ProductBadgeMap[ProductBadge]
}) => {
  const { image, badge, width, height } = productBadge
  return (
    <Box as="figure" className="absolute -left-2 top-0">
      <Image
        src={`/images/badges/${image}`}
        alt={badge}
        width={width}
        height={height}
        priority
        sizes="(max-width: 640px) 150px, 200px"
        className="object-contain"
      />
    </Box>
  )
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { productInCart, addNewProduct } = useCart()

  const quantity = productInCart(product)?.quantity ?? 0

  return (
    <Card className="p-0 gap-2 shadow-none border-none py-2 cursor-pointer hover:shadow-md transition-all">
      <CardHeader className="px-0 bg-warning-foreground rounded-t-xl relative">
        {product.badge && (
          <Badge productBadge={PRODUCT_BADGES[product.badge]} />
        )}

        {quantity > 0 && <ProductQuantity quantity={quantity} />}

        <Box
          as="figure"
          className="w-[200px] h-[200px] m-auto items-center relative"
        >
          <Image
            src={`/images/products/${product.image}`}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 640px) 150px, 200px"
            className="object-cover"
          />
        </Box>
      </CardHeader>
      <CardContent className="px-3 space-y-0.5">
        <Typography as="h5" className="text-primary font-medium text-lg">
          {formattedNumber(product.price, "IDR")}
        </Typography>
        <Typography className="font-medium text-lg min-h-[56px]">
          {product.title}
        </Typography>
        <Typography
          as="span"
          className="font-normal text-secondary text-base mt-2"
        >
          {formattedNumber(product.calorie, "Cal")}
        </Typography>
      </CardContent>
      <CardFooter className="px-2 py-1">
        <Button
          className="w-full cursor-pointer"
          onClick={() => addNewProduct(product)}
        >
          Add to cart
          <ShoppingCart />
        </Button>
      </CardFooter>
    </Card>
  )
}

ProductCard.Badge = Badge

export default ProductCard
