import { FC, ReactNode } from "react"

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <main className="w-full max-w-3xl m-auto min-h-dvh flex flex-col">{children}</main>
}

export default MainLayout
