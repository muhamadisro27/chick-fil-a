import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef, ReactNode } from "react"
import Box from "./box"

type ContainerProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<typeof Box>

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <Box {...props} className={cn("p-6", className)}>
      {children}
    </Box>
  )
}

export default Container
