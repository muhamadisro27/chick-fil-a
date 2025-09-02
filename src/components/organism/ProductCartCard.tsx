import React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ProductCart } from "@/types/product"
import Typography from "@/components/atoms/typography"
import Box from "@/components/atoms/box"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Minus, Pencil, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

type ProductCartCardProps = {
  product: ProductCart
}

const ProductCartCard = ({ product }: ProductCartCardProps) => {
  const {
    findProductInCart,
    addProductQuantity,
    subProductQuantity,
    removeProduct,
    getTotalPriceForProduct,
  } = useCart()

  return (
    <Card className="shadow-none p-2 py-4">
      <CardHeader className="px-2">
        <Box className="flex space-x-2 pl-1 items-center w-max">
          <Box
            as="figure"
            className="w-[100px] h-[100px] rounded-xl bg-gradient-to-b from-[#FFCB63] to-[#FCF7EF] m-auto items-center relative"
          >
            <Image
              src={`/images/products/${product.image}`}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 640px) 40px, 60px"
              className="object-cover"
            />
          </Box>
          <Box>
            <Typography as="h5" className="text-base font-medium">
              {product.title}
            </Typography>
            <Typography as="h6" className="text-secondary text-base">
              {product.description}
            </Typography>
          </Box>
        </Box>
        <CardContent className="px-2 pt-2">
          <Box className="flex justify-between items-end">
            <Box className="flex space-x-7">
              <Box className="flex items-center space-x-2">
                <Button
                  className="cursor-pointer"
                  onClick={() => addProductQuantity(product.id)}
                  asChild
                >
                  <Typography
                    as="span"
                    className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-primary font-semibold text-sm"
                  >
                    <Plus size={30} />
                  </Typography>
                </Button>
                <Typography as="span" className="text-lg px-1 font-medium">
                  {findProductInCart(product.id)?.quantity ?? 0}
                </Typography>
                <Button
                  variant={"outline"}
                  className="cursor-pointer"
                  onClick={() => subProductQuantity(product.id)}
                  asChild
                >
                  <Typography
                    as="span"
                    className="flex items-center justify-center w-8 h-8 text-primary rounded-full bg-primary/20 font-semibold text-sm"
                  >
                    <Minus size={30} />
                  </Typography>
                </Button>
              </Box>
              <Box className="flex items-center space-x-3">
                <Button variant={"outline"} className="cursor-pointer" asChild>
                  <Typography
                    as="span"
                    className="flex items-center justify-center font-normal text-sm"
                  >
                    <Pencil />
                    Customize
                  </Typography>
                </Button>
                <Button
                  variant={"outline"}
                  className="cursor-pointer"
                  onClick={() => removeProduct(product.id)}
                  asChild
                >
                  <Typography
                    as="span"
                    className="flex items-center justify-center font-normal text-sm"
                  >
                    <Trash2 />
                    Remove
                  </Typography>
                </Button>
              </Box>
            </Box>

            <Box>
              <Typography className="text-base font-normal text-secondary">
                {getTotalPriceForProduct(product.id)}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardHeader>
    </Card>
  )
}

export default ProductCartCard
