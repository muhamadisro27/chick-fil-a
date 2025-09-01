"use client"

import {
  Sidebar as SidebarShadCN,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { MENU_SIDEBAR } from "@/utils/constant"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"
import Typography from "@/components/atoms/typography"
import Box from "@/components/atoms/box"
import { MenuItem } from "@/types/common"

export function Sidebar() {
  const currentURL = usePathname()

  const isActive = (url: string) => {
    if (!currentURL) return false

    const current = currentURL === "/" ? "/" : currentURL.replace(/\/$/, "")
    const target = url === "/" ? "/" : url.replace(/\/$/, "")

    if (target === "/") {
      return current === "/"
    }

    return current === target || current.startsWith(`${target}/`)
  }

  return (
    <SidebarShadCN className="border-none">
      <SidebarHeader className="py-4">
        <Typography as="h1">
          <Box as="figure" className="w-[140px] h-[63.29px] m-auto">
            <Link href="/" className="relative block w-full h-full">
              <Image
                src="/logo.svg"
                alt="chick-fil-a"
                fill
                priority
                className="object-contain"
              />
            </Link>
          </Box>
        </Typography>
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <ScrollArea className="h-full w-full px-4">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-4">
                {MENU_SIDEBAR.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      data-active={isActive(item.url)}
                      className="min-h-[100px] rounded-2xl transition-all data-[active=true]:bg-primary/10 data-[active=false]:border"
                      asChild
                    >
                      <Link href={item.url} className="relative space-x-1">
                        <Box
                          data-active={isActive(item.url)}
                          className="absolute left-0 w-[4px] h-[32px] data-[active=true]:bg-primary data-[active=true]:rounded-sm"
                        />
                        <Box as="figure" className="relative w-[60px] h-[60px]">
                          <Image
                            src={`/images/categories/${item.icon}`}
                            className="object-contain"
                            fill
                            alt={item.title}
                            priority={item.url === "/"}
                          />
                        </Box>
                        <Typography
                          as="span"
                          data-active={isActive(item.url)}
                          className="text-lg font-semibold data-[active=true]:text-primary data-[active=false]:text-secondary"
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter />
    </SidebarShadCN>
  )
}
