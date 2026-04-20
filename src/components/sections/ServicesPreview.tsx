"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

import FadeUp from "@/components/ui/FadeUp"
import SectionLabel from "@/components/ui/SectionLabel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { services } from "@/lib/data/services"
import { cn } from "@/lib/utils"

export default function ServicesPreview() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const activeService = services[activeIndex]

  return (
    <section className="px-5 py-18 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp delay={0}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionLabel
              label="Services"
              title="Integrated services built to move reputation, reach, and recall."
              description="Five core practice areas work together so your brand does not have to choose between visibility and consistency."
              className="max-w-4xl"
            />
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C] transition-colors duration-700 hover:text-[#F5F0E8]"
            >
              View All Services -&gt;
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-16 hidden lg:block">
          <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)]">
            <div className="space-y-6">
              {services.map((service, index) => (
                <button
                  key={service.slug}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  className="block w-full text-left"
                >
                  <div className="flex items-end gap-5">
                    <span
                      className={cn(
                        "font-serif text-6xl font-light transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                        activeIndex === index
                          ? "text-[#C9A84C] opacity-100"
                          : "text-[#C9A84C] opacity-20"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 pb-2">
                      <p
                        className={cn(
                          "font-sans text-sm uppercase tracking-[0.28em] transition-colors duration-700",
                          activeIndex === index
                            ? "text-[#C9A84C]"
                            : "text-[#888880]"
                        )}
                      >
                        {service.shortLabel}
                      </p>
                      <div className="mt-4 h-px overflow-hidden bg-[#2A2A2A]">
                        {activeIndex === index ? (
                          <motion.div
                            layoutId="service-line"
                            className="h-full bg-[#C9A84C]"
                            transition={{
                              duration: 0.7,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="overflow-hidden rounded-[34px] border border-[#C9A84C]/15 bg-[#161616]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="relative min-h-[600px]"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,15,15,0.92)_0%,rgba(15,15,15,0.6)_36%,rgba(15,15,15,0.1)_62%,rgba(15,15,15,0.02)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-10">
                    <h3 className="font-serif text-5xl font-light text-[#F5F0E8]">
                      {activeService.title}
                    </h3>
                    <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#F5F0E8]">
                      {activeService.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {activeService.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-[#C9A84C]/20 bg-[rgba(15,15,15,0.6)] px-4 py-2 font-sans text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/services/${activeService.slug}`}
                      className="mt-7 inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C] transition-colors duration-700 hover:text-[#F5F0E8]"
                    >
                      Explore Service -&gt;
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-12 lg:hidden">
          <Accordion type="single" collapsible defaultValue={services[0].slug}>
            {services.map((service) => (
              <AccordionItem
                key={service.slug}
                value={service.slug}
                className="rounded-[28px] border border-[#C9A84C]/15 bg-[#161616] px-5 not-last:mb-4 not-last:border-b"
              >
                <AccordionTrigger className="py-5 font-serif text-2xl font-light text-[#F5F0E8] hover:no-underline">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={900}
                      height={640}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.06]"
                    />
                  </div>
                  <p className="mt-5 font-sans text-sm leading-relaxed text-[#888880]">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {service.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-[#C9A84C]/20 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C]"
                  >
                    Explore Service -&gt;
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  )
}
