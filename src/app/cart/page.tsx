"use client"

import Box from "@/components/atoms/box"
import Typography from "@/components/atoms/typography"
import CartListSection from "@/components/organism/cart-list-section"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
  const { count } = useCart()

  return (
    <Box>
      <Link href="/" className="relative block w-full h-full">
        <Box
          as="figure"
          className="w-[120px] h-[80px] m-auto items-center relative"
        >
          <Image
            src="/logo.svg"
            alt="chick-fil-a"
            fill
            priority
            className="object-contain"
          />
        </Box>
      </Link>

      <Box className="flex pt-4 space-x-4 items-center justify-center md:justify-start px-6 lg:px-0">
        <Badge className="rounded-lg text-sm md:text-base font-normal py-1.5">
          {count} items
        </Badge>
        <Typography
          as="h3"
          className="font-semibold text-2xl md:text-3xl lg:text-4xl"
        >
          Your Order
        </Typography>
      </Box>

      <CartListSection />
    </Box>
  )
}

export default Page
