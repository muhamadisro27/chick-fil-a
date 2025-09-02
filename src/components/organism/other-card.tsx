import Box from "@/components/atoms/box"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Typography from "@/components/atoms/typography"
import clsx from "clsx"
import Link from "next/link"
import { OtherItem } from "@/types/offers"

type OtherCardProps = {
  item: OtherItem
}

const OtherCard = ({ item }: OtherCardProps) => {
  return (
    <Link href={item.url} key={item.title}>
      <Card
        className={clsx(
          `flex-row gap-x-2 items-center justify-center border-none shadow-none`,
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
  )
}

export default OtherCard
