import Portfolio from "@/components/sections/Portfolio"
import PageHero from "@/components/ui/PageHero"

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        description="A look at the campaigns and brand systems we have built across PR, social, creative, and influencer programs."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80"
      />
      <Portfolio />
    </>
  )
}
