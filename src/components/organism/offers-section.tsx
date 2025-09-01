import Box from "@/components/atoms/box"
import { Card } from "@/components/ui/card"
import CardTitle from "@/components/molecules/card-title"
import GradientCard from "@/components/molecules/gradient-card"
import { OFFER_ITEMS } from "@/utils/constant"
import Image from "next/image"
import Typography from "@/components/atoms/typography"

const OffersSection = () => {
  return (
    <Box as="section" id="product-offers" className="pt-20">
      <CardTitle text="Today's specials" />

      <Box className="grid gap-6 pt-4">
        <Box className="grid grid-cols-2 gap-6">
          {OFFER_ITEMS.slice(0, 2).map((item, index) => (
            <GradientCard
              key={index}
              cardBg={item.cardBg}
              scale={item.scale}
              direction={item.direction}
              fromColor={item.fromColor}
              toColor={item.toColor}
              minHeight={item.minHeight}
              cardTitle={item.title}
              cardSubtitle={item.subtitle}
            />
          ))}
        </Box>

        <Box className="grid">
          {OFFER_ITEMS.slice(2).map((item, index) => (
            <GradientCard
              key={index}
              cardBg={item.cardBg}
              scale={item.scale}
              direction={item.direction}
              fromColor={item.fromColor}
              toColor={item.toColor}
              minHeight={item.minHeight}
              cardTitle={item.title}
              cardSubtitle={item.subtitle}
            />
          ))}
        </Box>

        <Box className="grid grid-cols-3 gap-4">
          <Card className="flex-row">
            <Box
              as="figure"
              className="relative w-[60px] h-[60px] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/categories/sides.svg"
                alt="sides"
                fill
                priority
                className="object-cover"
              />
            </Box>
            <Typography
              as="span"
              className="text-accent-foreground text-xl font-semibold line-clamp-2"
            >
              Berry, Salad, Potato
            </Typography>
          </Card>

          <Card className="flex-row">
            <Box
              as="figure"
              className="relative w-[60px] h-[60px] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/categories/sides.svg"
                alt="sides"
                fill
                priority
                className="object-cover"
              />
            </Box>
            <Typography
              as="span"
              className="text-accent-foreground text-xl font-semibold line-clamp-2"
            >
              Lemonade, Ice Dream, Milkshake
            </Typography>
          </Card>

          <Card className="flex-row">
            <Box
              as="figure"
              className="relative w-[60px] h-[60px] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/categories/sides.svg"
                alt="sides"
                fill
                priority
                className="object-cover"
              />
            </Box>
            <Typography
              as="span"
              className="text-accent-foreground text-xl font-semibold line-clamp-2"
            >
              Dr Paper, Iced Tea
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default OffersSection
