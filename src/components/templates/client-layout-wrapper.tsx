"use client"

import React, { ReactNode } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/organism/sidebar"
import MainLayout from "./main-layout"
import CartFloating from "@/components/organism/cart-floating"
import { Toaster } from "sonner"
import { usePathname } from "next/navigation"

const ClientLayoutWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const hideSidebar = pathname === "/cart"

  return (
    <>
      <SidebarProvider>
        {!hideSidebar && <Sidebar />}
        <MainLayout>
          {children}
          <CartFloating />
        </MainLayout>
      </SidebarProvider>
      <Toaster />
    </>
  )
}

export default ClientLayoutWrapper
