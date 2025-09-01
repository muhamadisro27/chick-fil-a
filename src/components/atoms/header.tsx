import { FC } from "react"
import Typography from "./typography"

type HeaderProps = {
  text: string
}

const Header: FC<HeaderProps> = ({ text }) => {
  return <Typography className="">{text}</Typography>
}

export default Header
