import Box from "@/components/atoms/box"
import Container from "@/components/atoms/container"
import Typography from "@/components/atoms/typography"
import Header from "@/components/molecules/header"
import OffersSection from "@/components/organism/offers-section"

export default function Home() {
  return (
    <Container className="pt-6">
      <Header titleText="What would you like today?" />

      <OffersSection />
    </Container>
  )
}
