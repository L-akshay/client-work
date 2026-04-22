import Portfolio from "@/components/sections/Portfolio"
import PageHero from "@/components/ui/PageHero"
import { featuredCaseStudy } from "@/lib/data/portfolio"

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        description={featuredCaseStudy.title}
        image={featuredCaseStudy.image}
      />
      <Portfolio />
    </>
  )
}
