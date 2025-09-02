import { Card, CardContent } from "@/components/ui/card"
import { ComponentProps, FC, ReactNode } from "react"
import Box from "@/components/atoms/box"
import { cn } from "@/lib/utils"
import clsx from "clsx"
import Typography from "../atoms/typography"
import { Button } from "../ui/button"

type Scale = "horizontal" | "vertical"

type GradientCardProps = {
  direction: string
  fromColor: string
  toColor: string
  scale: Scale
  cardBg: string
  position: string
  minHeight: string
  cardTitle: string
  cardSubtitle: string
} & ComponentProps<typeof Card>

const GradientCard: FC<GradientCardProps> = ({
  direction = "180deg",
  fromColor = "rgba(79, 19, 16, 0) 0%",
  toColor = "#7E2200 70.67%",
  scale = "horizontal" as Scale,
  cardBg,
  position = 'top -59px right -71px',
  className,
  minHeight = "min-h-[480px]",
  cardTitle,
  cardSubtitle,
  ...props
}) => {
  const gradientScaleClass =
    scale === "vertical" ? "min-w-[577px] h-full" : "w-full min-h-[300px]"

  return (
    <Card
      style={{
        backgroundImage: `url('/images/offers/${cardBg}')`,
        backgroundPosition : position
      }}
      className={clsx(
        "relative bg-no-repeat bg-cover border-none",
        className,
        minHeight
      )}
      {...props}
    >
      <Box
        style={{
          background: `linear-gradient(${direction}, ${fromColor}, ${toColor})`,
        }}
        className={cn(
          "absolute rounded-xl w-full bottom-0",
          gradientScaleClass
        )}
      />
      <CardContent className="flex h-full items-end z-10">
        <Box className="flex flex-col space-y-2">
          <Typography className="font-normal text-white text-base" as="h5">
            {cardTitle}
          </Typography>
          <Typography className="text-white font-semibold text-2xl" as="h6">
            {cardSubtitle}
          </Typography>
          <Button
            variant={"secondary"}
            className="w-max mt-4 bg-white/[24%] rounded-2xl py-6 text-white font-normal cursor-pointer hover:bg-white/30"
            size={"lg"}
          >
            Order now
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default GradientCard
