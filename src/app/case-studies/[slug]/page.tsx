import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import FadeUp from "@/components/ui/FadeUp"
import GoldButton from "@/components/ui/GoldButton"
import PageHero from "@/components/ui/PageHero"
import { portfolioItems } from "@/lib/data/portfolio"

type CaseStudyPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }))
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const item = portfolioItems.find((portfolioItem) => portfolioItem.slug === slug)

  if (!item) {
    notFound()
  }

  return (
    <>
      <PageHero
        title={item.client}
        description={item.title}
        image={item.image}
      />

      <section className="px-5 py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeUp delay={0}>
            <div className="mb-12 flex items-center justify-between">
              <span className="font-sans text-xs uppercase tracking-[0.24em] text-gold">
                {item.category}
              </span>
              <Link
                href="/case-studies"
                className="font-sans text-xs uppercase tracking-[0.24em] text-muted transition-colors duration-300 hover:text-gold"
              >
                &larr; All Work
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mb-16 grid grid-cols-3 gap-6 border-y border-charcoal-4 py-10">
              {item.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="font-serif text-4xl font-light text-gold">
                    {metric.value}
                  </p>
                  <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

          <div className="grid gap-12 lg:grid-cols-3">
            {[
              { label: "The Challenge", content: item.challenge },
              { label: "Our Approach", content: item.solution },
              { label: "The Outcome", content: item.outcome },
            ].map((block, index) => (
              <FadeUp key={block.label} delay={index * 0.1}>
                <div>
                  <p className="mb-4 font-sans text-xs uppercase tracking-[0.24em] text-gold">
                    {block.label}
                  </p>
                  <div className="mb-5 h-px w-8 bg-gold/40" />
                  <p className="font-sans text-sm leading-relaxed text-muted">
                    {block.content}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="mt-16 overflow-hidden rounded-[32px] border border-gold/15">
              <Image
                src={item.image}
                alt={item.title}
                width={1400}
                height={800}
                className="aspect-[16/7] w-full object-cover"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-16 text-center">
              <p className="mb-6 font-sans text-xs uppercase tracking-[0.24em] text-muted">
                Ready to build something similar?
              </p>
              <GoldButton href="/contact">Start a Conversation</GoldButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
