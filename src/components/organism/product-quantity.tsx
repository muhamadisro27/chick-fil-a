import React, { ComponentPropsWithoutRef } from "react"
import Box from "@/components/atoms/box"
import Typography from "../atoms/typography"
import { cn } from "@/lib/utils"

type ProductQuantityProps = {
  quantity: number
} & ComponentPropsWithoutRef<typeof Box>

const ProductQuantity = ({
  quantity = 0,
  className,
  ...props
}: ProductQuantityProps) => {
  return (
    <Box className={cn("absolute right-5 top-3", className)} {...props}>
      <Typography
        as="span"
        className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-primary font-semibold text-sm"
      >
        {quantity}
      </Typography>
    </Box>
  )
}

export default ProductQuantity
