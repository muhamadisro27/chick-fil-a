import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

type BoxProps<T> = {
  as?: T
  children?: ReactNode
} & ComponentPropsWithoutRef<"div">

const Box = <T extends ElementType = "div">({
  as,
  children,
  ...props
}: BoxProps<T>) => {
  const Component = as ?? "div"
  return <Component {...props}>{children}</Component>
}

export default Box
