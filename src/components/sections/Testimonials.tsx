"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

import FadeUp from "@/components/ui/FadeUp"
import SectionLabel from "@/components/ui/SectionLabel"
import TestimonialCard from "@/components/ui/TestimonialCard"
import { testimonials } from "@/lib/data/testimonials"
import { cn } from "@/lib/utils"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [])

  const previousIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length
  const nextIndex = (activeIndex + 1) % testimonials.length

  const desktopItems = [
    { index: previousIndex, active: false },
    { index: activeIndex, active: true },
    { index: nextIndex, active: false },
  ]

  return (
    <section className="bg-[#0F0F0F] px-5 py-18 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeUp delay={0}>
          <SectionLabel
            label="Testimonials"
            title="Some great words from our clients"
            description="The strongest proof of our work is what clients say after the campaigns go live and the results start compounding."
            align="center"
            className="max-w-4xl"
          />
        </FadeUp>

        <div className="mt-16 hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {desktopItems.map((item) => (
            <motion.div
              key={`${testimonials[item.index].name}-${item.active ? "active" : "side"}`}
              layout
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={cn(item.active ? "scale-[1.05]" : "scale-[0.95]")}
            >
              <TestimonialCard
                testimonial={testimonials[item.index]}
                active={item.active}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIndex].name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <TestimonialCard testimonial={testimonials[activeIndex]} active />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                index === activeIndex ? "w-8 bg-[#C9A84C]" : "w-2 bg-[#2A2A2A]"
              )}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
