import Box from "@/components/atoms/box"
import { Card } from "@/components/ui/card"
import CardTitle from "@/components/molecules/card-title"
import GradientCard from "@/components/molecules/gradient-card"
import { OFFER_ITEMS, OTHER_ITEMS } from "@/utils/constant"
import Image from "next/image"
import Typography from "@/components/atoms/typography"
import clsx from "clsx"
import Link from "next/link"

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
              position={item.position}
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
              position={item.position}
              minHeight={item.minHeight}
              cardTitle={item.title}
              cardSubtitle={item.subtitle}
            />
          ))}
        </Box>

        <Box className="grid grid-cols-3 gap-4">
          {OTHER_ITEMS.map((item) => (
            <Link href={item.url} key={item.title}>
              <Card
                className={clsx(
                  `flex-row gap-x-2 items-center justify-center`,
                  item.bgColor
                )}
              >
                <Box
                  as="figure"
                  className="relative w-[60px] h-[60px] overflow-hidden rounded-lg"
                >
                  <Image
                    src={`/images/categories/${item.image}`}
                    alt={item.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </Box>
                <Typography
                  as="span"
                  className={clsx(
                    "text-xl font-semibold line-clamp-2 max-w-[130px]",
                    item.textColor
                  )}
                >
                  {item.title}
                </Typography>
              </Card>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default OffersSection
