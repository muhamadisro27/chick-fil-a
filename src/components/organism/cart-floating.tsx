"use client"
import Box from "@/components/atoms/box"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Typography from "@/components/atoms/typography"
import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { toast } from "sonner"
import { useEffect } from "react"
import ProductQuantity from "./product-quantity"
import { formattedNumber } from "@/utils/strings"

const CartFloating = () => {
  const {
    count,
    products,
    totalPrice,
    getTotalPriceForProduct,
    resetCart,
    findProductInCart,
    addProductQuantity,
    subProductQuantity,
    removeProduct,
  } = useCart()

  const router = useRouter()

  const pathname = usePathname()

  const isPageCart = pathname.split("/")[1].includes("cart")

  useEffect(() => {
    const key = localStorage.getItem("cart-storage")
    if (!key && count === 0 && isPageCart) router.back()
  }, [count])

  const onContinue = () => {
    if (count === 0) {
      toast.error("You need add product to cart first !", {
        position: "top-center",
      })
      return
    }
    router.push("/cart")
  }

  const onPayment = () => {
    toast.success("Successfully payment for products !", {
      position: "top-center",
    })
    resetCart()

    router.push("/")
  }

  return (
    <Box className="fixed bottom-0 z-20 w-full h-auto max-w-3xl bg-white">
      {isPageCart ? (
        <Box className="bg-secondary/10">
          <Box className="py-4 px-6 flex flex-col space-y-2 items-end">
            <Box className="grid grid-cols-2 gap-3">
              <Typography className="min-w-[100px] text-secondary text-right">
                Subtotal
              </Typography>
              <Typography className="text-right">{totalPrice}</Typography>
            </Box>
            <Box className="grid grid-cols-2 gap-3">
              <Typography className="min-w-[100px] text-secondary text-right">
                PB1
              </Typography>
              <Typography className="text-right">
                {formattedNumber(20000)}
              </Typography>
            </Box>
          </Box>
          <Box className="flex border-t-2 justify-between items-end py-4 px-6">
            <Typography as="h5" className="font-medium text-base md:text-xl">
              Total payment
            </Typography>
            <Typography as="h6" className="font-semibold text-xl text-primary">
              {totalPrice}
            </Typography>
          </Box>
        </Box>
      ) : (
        <ScrollArea className="w-full">
          {count > 0 && (
            <Box className="bg-secondary/15 p-3 flex gap-3 w-max">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="border-none shadow-none py-4 min-w-[320px] gap-3"
                >
                  <CardHeader className="px-0">
                    <Box className="flex justify-between items-start">
                      <Box
                        as="figure"
                        className="w-[100px] h-[100px] items-start relative"
                      >
                        <Image
                          src={`/images/products/${product.image}`}
                          alt={product.title}
                          fill
                          priority
                          sizes="(max-width: 640px) 80px, 100px"
                          className="object-cover"
                        />
                      </Box>

                      <Button
                        variant={"ghost"}
                        onClick={() => removeProduct(product.id)}
                        className="cursor-pointer bg-secondary/30 rounded-full mr-2"
                        size={"sm"}
                        asChild
                      >
                        <Typography
                          as="span"
                          className="text-accent-foreground"
                        >
                          <X size={20} />
                        </Typography>
                      </Button>
                    </Box>
                    <Box className="px-4">
                      <Typography
                        as="h5"
                        className="line-clamp-1 text-lg font-medium"
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        as="span"
                        className="text-sm break-words whitespace-normal font-normal"
                      >
                        {product.description}
                      </Typography>
                    </Box>
                  </CardHeader>

                  <CardContent className="px-4 flex justify-between items-center">
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
                      <Typography
                        as="span"
                        className="text-lg px-1 font-medium"
                      >
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

                    <Typography
                      as="span"
                      className="text-secondary text-base font-medium"
                    >
                      {getTotalPriceForProduct(product.id)}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
          <ScrollBar orientation="horizontal" className="mt-2 bg-secondary/30" />
        </ScrollArea>
      )}

      <Box className="flex flex-col md:flex-row justify-between border-t h-full py-6">
        <Box className="flex space-x-4 ">
          <Button
            onClick={resetCart}
            variant={"outline"}
            className="cursor-pointer text-base py-6"
            size={"lg"}
          >
            Start over
          </Button>
          {isPageCart && (
            <Button
              variant={"ghost"}
              className="cursor-pointer text-base py-6"
              size={"lg"}
              onClick={() => router.back()}
            >
              Back
            </Button>
          )}
        </Box>

        <Box className="flex space-x-4">
          {isPageCart ? (
            <>
              <Button
                className="cursor-pointer text-primary bg-primary/10 border-none text-base py-6"
                size={"lg"}
                variant={"outline"}
              >
                Promo Code
              </Button>
              <Button
                className="cursor-pointer text-base py-6 border-none"
                size={"lg"}
                onClick={onPayment}
              >
                Proceed Payment
              </Button>
            </>
          ) : (
            <>
              <Box className="flex flex-col items-end justify-center">
                <Typography as="span" className="text-base font-normal">
                  Subtotal
                </Typography>
                <Typography
                  as="span"
                  className="text-lg font-semibold text-primary"
                >
                  {totalPrice}
                </Typography>
              </Box>

              <Box as="figure" className="relative w-[50px] h-[50px]">
                <ProductQuantity
                  quantity={count}
                  className="z-10 -top-2 -right-2 ring-1 rounded-full ring-white"
                />
                <Image
                  src={"/images/badges/cart-count.png"}
                  alt="cart-count"
                  fill
                  priority
                  sizes="(max-width: 640px) 80px, 100px"
                  className="object-cover"
                />
              </Box>

              <Button
                className="cursor-pointer text-base py-6"
                size={"lg"}
                onClick={() => onContinue()}
              >
                Continue
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default CartFloating
