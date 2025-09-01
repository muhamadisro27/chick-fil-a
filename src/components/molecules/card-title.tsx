import React, { FC } from "react"
import Typography from "../atoms/typography"

type CardTitleProps = {
  text: string
}

const CardTitle: FC<CardTitleProps> = ({ text }) => {
  return <Typography className="text-2xl" as="h3">{text}</Typography>
}

export default CardTitle
