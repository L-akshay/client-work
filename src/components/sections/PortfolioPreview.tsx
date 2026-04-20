"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useDragControls } from "framer-motion"

import FadeUp from "@/components/ui/FadeUp"
import PortfolioCard from "@/components/ui/PortfolioCard"
import SectionLabel from "@/components/ui/SectionLabel"
import { portfolioItems } from "@/lib/data/portfolio"

const previewItems = portfolioItems.slice(0, 4)

export default function PortfolioPreview() {
  const scrollRef = React.useRef<HTMLDivElement | null>(null)
  const controls = useDragControls()

  const scrollByAmount = (direction: "prev" | "next") => {
    const container = scrollRef.current
    if (!container) {
      return
    }

    const amount = direction === "next" ? 420 : -420
    container.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section className="px-5 py-18 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp delay={0}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionLabel
              label="Portfolio"
              title="Selected work that proves how strategy translates into traction."
              description="A preview of the campaigns, creative systems, and communications programs that helped brands gain sharper visibility."
              className="max-w-4xl"
            />
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollByAmount("prev")}
                className="inline-flex size-11 items-center justify-center rounded-full border border-[#C9A84C] text-[#C9A84C] transition-colors duration-700 hover:bg-[#C9A84C] hover:text-[#0F0F0F]"
                aria-label="Previous projects"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount("next")}
                className="inline-flex size-11 items-center justify-center rounded-full border border-[#C9A84C] text-[#C9A84C] transition-colors duration-700 hover:bg-[#C9A84C] hover:text-[#0F0F0F]"
                aria-label="Next projects"
              >
                <ChevronRight className="size-4" />
              </button>
              <Link
                href="/case-studies"
                className="ml-3 inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C] transition-colors duration-700 hover:text-[#F5F0E8]"
              >
                View All Projects -&gt;
              </Link>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-14 hidden lg:block">
          <div className="relative">
            <motion.div
              className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
              drag="x"
              dragControls={controls}
              dragListener={false}
              dragConstraints={{ left: 0, right: 0 }}
              onPointerDown={(event) => controls.start(event)}
              onDrag={(_, info) => {
                if (scrollRef.current) {
                  scrollRef.current.scrollLeft -= info.delta.x
                }
              }}
            />
            <div
              ref={scrollRef}
              className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
            >
              {previewItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[400px] snap-start"
                >
                  <PortfolioCard item={item} compact />
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-12 grid gap-6 lg:hidden">
          {previewItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
