"use client"

import * as React from "react"

import FadeUp from "@/components/ui/FadeUp"
import PortfolioCard from "@/components/ui/PortfolioCard"
import SectionLabel from "@/components/ui/SectionLabel"
import {
  featuredCaseStudy,
  portfolioItems,
  type PortfolioCategory,
} from "@/lib/data/portfolio"
import Image from "next/image"

const filters: ("All" | PortfolioCategory)[] = [
  "All",
  "PR",
  "Social",
  "Creative",
  "Influencer",
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] =
    React.useState<"All" | PortfolioCategory>("All")

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section className="px-5 py-18 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp delay={0}>
          <div className="overflow-hidden rounded-[36px] border border-[#C9A84C]/15 bg-[#161616]">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="overflow-hidden">
                <Image
                  src={featuredCaseStudy.image}
                  alt={featuredCaseStudy.title}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.06]"
                />
              </div>
              <div className="p-8 lg:p-10">
                <p className="font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C]">
                  {featuredCaseStudy.client}
                </p>
                <h2 className="mt-6 font-serif text-4xl font-light leading-[0.96] text-[#F5F0E8]">
                  {featuredCaseStudy.title}
                </h2>
                <p className="mt-6 font-sans text-base leading-relaxed text-[#888880]">
                  {featuredCaseStudy.result}
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-[#888880]">
                  {featuredCaseStudy.excerpt}
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionLabel
              label="Case Studies"
              title="Work designed to move both attention and outcomes."
              description="Browse a cross-section of campaigns spanning PR, social, creative, and influencer strategy."
              className="max-w-4xl"
            />
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-11 rounded-full border px-5 py-2 font-sans text-xs uppercase tracking-[0.22em] transition-all duration-700 ${
                    activeFilter === filter
                      ? "border-[#C9A84C] bg-[#C9A84C] text-[#0F0F0F]"
                      : "border-[#2A2A2A] text-[#888880] hover:border-[#C9A84C]/40 hover:text-[#F5F0E8]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <FadeUp key={item.id} delay={0}>
              <PortfolioCard item={item} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
