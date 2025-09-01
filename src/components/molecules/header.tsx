import { FC } from "react"
import Box from "@/components/atoms/box"
import Typography from "@/components/atoms/typography"

type HeaderProps = {
  hasDescription?: boolean
  titleText: string
  descriptionText?: string
}

const Header: FC<HeaderProps> = ({
  hasDescription = false,
  titleText = "",
  descriptionText = "",
}) => {
  return (
    <Box as="header">
      <Typography
        as="h2"
        className="font-semibold max-w-[500px] text-2xl md:text-3xl xl:text-6xl break-words whitespace-normal"
      >
        {titleText}
      </Typography>
      {hasDescription && (
        <Typography className="break-words whitespace-normal">
          {descriptionText}
        </Typography>
      )}
    </Box>
  )
}

export default Header
