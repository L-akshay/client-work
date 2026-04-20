import ServicesSection from "@/components/sections/Services"
import FadeUp from "@/components/ui/FadeUp"
import GoldButton from "@/components/ui/GoldButton"
import PageHero from "@/components/ui/PageHero"

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Five integrated practice areas designed to strengthen reputation, visibility, and growth without losing brand consistency."
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1800&q=80"
      />
      <ServicesSection />
      <section className="px-5 pb-18 lg:px-16 lg:pb-24">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-[#C9A84C]/15 bg-[#161616] px-8 py-12 text-center">
          <FadeUp delay={0}>
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-[#C9A84C]">
              Need a tailored mix?
            </p>
            <h2 className="mt-6 font-serif text-5xl font-light text-[#F5F0E8]">
              We can shape the right service stack around your growth stage.
            </h2>
            <GoldButton href="/contact" className="mt-8">
              Talk to the Team
            </GoldButton>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
