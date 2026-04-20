import ClientsMarquee from "@/components/sections/ClientsMarquee"
import ContactShort from "@/components/sections/ContactShort"
import Hero from "@/components/sections/Hero"
import LetsTalk from "@/components/sections/LetsTalk"
import PortfolioPreview from "@/components/sections/PortfolioPreview"
import ServicesPreview from "@/components/sections/ServicesPreview"
import StatsTicker from "@/components/sections/StatsTicker"
import Testimonials from "@/components/sections/Testimonials"
import WhatWeDo from "@/components/sections/WhatWeDo"
import WhyChoosePR from "@/components/sections/WhyChoosePR"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import WhySubscribe from "@/components/sections/WhySubscribe"

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <WhatWeDo />
      <ServicesPreview />
      <WhyChoosePR />
      <WhySubscribe />
      <PortfolioPreview />
      <WhyChooseUs />
      <StatsTicker />
      <Testimonials />
      <LetsTalk />
      <ContactShort />
    </>
  )
}
