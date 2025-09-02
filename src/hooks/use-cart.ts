"use client"
import { useCartStore } from "@/stores/cart"
import { Product, ProductCart } from "@/types/product"
import { formattedNumber } from "@/utils/strings"
import { useMemo } from "react"

export const useCart = () => {
  const {
    count,
    products,
    addProduct,
    addProductQuantity,
    subProductQuantity,
    resetCart: resetCartStore,
    removeProduct,
  } = useCartStore()

  const findProductInCart = (id: string) =>
    products.find((productCart) => id === productCart.id)

  const productInCart = useMemo(() => {
    const map = new Map(products.map((p) => [p.id, p]))

    return (product: Product) => map.get(product.id)
  }, [products])

  const addNewProduct = (product: Product) => {
    const currentProduct = findProductInCart(product.id)

    const newProduct: ProductCart = {
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
      quantity: currentProduct ? currentProduct.quantity + 1 : 1,
    }

    addProduct(newProduct)
  }

  const totalPrice = useMemo(() => {
    return formattedNumber(
      products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      ),
      "IDR"
    )
  }, [products])

  const totalPrices = useMemo(() => {
    return products.reduce((acc, product) => {
      acc[product.id] = product.price * product.quantity
      return acc
    }, {} as Record<string, number>)
  }, [products])

  const getTotalPriceForProduct = (id: string): string => {
    return formattedNumber(totalPrices[id] || 0, "IDR")
  }

  const resetCart = () => {
    resetCartStore()
    localStorage.removeItem("cart-storage")
  }

  return {
    count,
    products,
    totalPrice,
    getTotalPriceForProduct,
    productInCart,
    findProductInCart,
    addProductQuantity,
    subProductQuantity,
    addNewProduct,
    removeProduct,
    resetCart,
  }
}
