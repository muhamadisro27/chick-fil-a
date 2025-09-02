import { ProductCart } from "@/types/product"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartStore = {
  count: number
  products: ProductCart[]
  addProduct: (product: ProductCart) => void
  addProductQuantity: (id: string) => void
  subProductQuantity: (id: string) => void
  removeProduct: (id: string) => void
  resetCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      count: 0,
      products: [],
      addProduct: (product) =>
        set((state) => {
          const exists = state.products.find((p) => p.id === product.id)

          let updatedProducts
          if (exists) {
            updatedProducts = state.products.map((p) =>
              p.id === product.id ? { ...p, quantity: product.quantity } : p
            )
          } else {
            updatedProducts = [...state.products, product]
          }

          return {
            count: updatedProducts.reduce((acc, p) => acc + p.quantity, 0),
            products: updatedProducts,
          }
        }),
      addProductQuantity: (id: string) =>
        set((state) => {
          const updatedProducts = state.products.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + 1 } : p
          )

          return {
            count: updatedProducts.reduce((acc, p) => acc + p.quantity, 0),
            products: updatedProducts,
          }
        }),
      subProductQuantity: (id: string) =>
        set((state) => {
          const updatedProducts = state.products
            .map((p) =>
              p.id === id ? { ...p, quantity: Math.max(p.quantity - 1, 0) } : p
            )
            .filter((p) => p.quantity > 0)

          return {
            count: updatedProducts.reduce((acc, p) => acc + p.quantity, 0),
            products: updatedProducts,
          }
        }),
      removeProduct: (id: string) =>
        set((state) => {
          const updatedProducts = state.products.filter((p) => p.id !== id)
          return {
            count: updatedProducts.reduce((acc, p) => acc + p.quantity, 0),
            products: updatedProducts,
          }
        }),
      resetCart: () =>
        set(() => ({
          count: 0,
          products: [],
        })),
    }),
    {
      name: "cart-storage",
    }
  )
)
