import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Box from "@/components/atoms/box"
import Image from "next/image"
import { Product, ProductBadge, ProductBadgeMap } from "@/types/product"
import Typography from "../atoms/typography"
import { formattedNumber } from "@/utils/strings"
import { PRODUCT_BADGES } from "@/utils/constant"

type ProductCardProps = {
  product: Product
  onClick: (product: Product) => void
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

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Card
      onClick={() => onClick(product)}
      className="p-0 gap-2 rounded-b-none shadow-none border-none py-2 cursor-pointer"
    >
      <CardHeader className="px-0 bg-warning-foreground rounded-t-xl relative">
        {product.badge && (
          <Badge productBadge={PRODUCT_BADGES[product.badge]} />
        )}
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
    </Card>
  )
}

ProductCard.Badge = Badge

export default ProductCard
