import ServicesSection from "@/components/sections/Services"
import ClosingCta from "@/components/ui/ClosingCta"
import PageHero from "@/components/ui/PageHero"

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Five integrated practice areas designed to strengthen reputation, visibility, and growth without losing brand consistency."
        image="/images/hero/services.jpg"
      />
      <ServicesSection />
      <ClosingCta
        eyebrow="Need A Tailored Mix?"
        heading={[
          "We can shape the right service stack",
          "around your growth stage.",
        ]}
        supporting="Some brands need one sharp capability. Others need an integrated mix across PR, digital, creator, creative, and search. We build around the outcome, not a rigid package."
        primaryCta={{ href: "/contact", label: "Talk to the Team" }}
        secondaryCta={{ href: "/contact", label: "Start a Conversation" }}
      />
    </>
  )
}
