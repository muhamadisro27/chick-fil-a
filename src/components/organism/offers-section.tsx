import Box from "@/components/atoms/box"
import CardTitle from "@/components/molecules/card-title"
import GradientCard from "@/components/molecules/gradient-card"
import { OFFER_ITEMS, OTHER_ITEMS } from "@/utils/constant"
import OtherCard from "./other-card"
import { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

type OfferSectionProps = {
  showOnly?: "1" | "2" | "all"
  showTitle?: boolean
  showOthers?: boolean
} & ComponentPropsWithoutRef<typeof Box>

const OffersSection = ({
  showOnly = "all",
  showTitle = true,
  showOthers = true,
  className,
  ...props
}: OfferSectionProps) => {
  return (
    <Box
      as="section"
      id="product-offers"
      className={cn("pt-20", className)}
      {...props}
    >
      {showTitle && <CardTitle text="Today's specials" />}

      <Box className="grid gap-6 pt-4">
        {(showOnly === "1" || showOnly === "all") && (
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OFFER_ITEMS.slice(0, 2).map((item, index) => (
              <GradientCard
                key={index}
                cardBg={item.cardBg}
                scale={item.scale}
                direction={item.direction}
                fromColor={item.fromColor}
                toColor={item.toColor}
                position={item.position}
                minHeight={item.minHeight}
                cardTitle={item.title}
                cardSubtitle={item.subtitle}
              />
            ))}
          </Box>
        )}

        {(showOnly === "2" || showOnly === "all") && (
          <Box className="grid">
            {OFFER_ITEMS.slice(2).map((item, index) => (
              <GradientCard
                key={index}
                cardBg={item.cardBg}
                scale={item.scale}
                direction={item.direction}
                fromColor={item.fromColor}
                toColor={item.toColor}
                position={item.position}
                minHeight={item.minHeight}
                cardTitle={item.title}
                maxWidthSubtitle="max-w-[200px]"
                cardSubtitle={item.subtitle}
              />
            ))}
          </Box>
        )}

        {showOthers && (
          <Box className="grid grid-cols-3 gap-4">
            {OTHER_ITEMS.map((item) => (
              <OtherCard item={item} key={item.title} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default OffersSection
