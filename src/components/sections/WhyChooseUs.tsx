"use client"

import * as React from "react"
import Image from "next/image"
import { animate, useInView, useMotionValue } from "framer-motion"

import FadeUp from "@/components/ui/FadeUp"
import SectionLabel from "@/components/ui/SectionLabel"
import { performanceStats } from "@/lib/data/stats"

function Stat({
  value,
  label,
  description,
  delay,
}: {
  value: number
  label: string
  description: string
  delay: number
}) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = React.useState(0)

  React.useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplay(Math.round(latest))
    })

    return unsubscribe
  }, [motionValue])

  React.useEffect(() => {
    if (!isInView) {
      return
    }

    const controls = animate(motionValue, value, {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    })

    return () => controls.stop()
  }, [delay, isInView, motionValue, value])

  return (
    <div ref={ref} className="rounded-[24px] border border-[#C9A84C]/10 bg-[#0F0F0F] p-6">
      <p className="font-serif text-5xl font-light text-[#C9A84C]">{display}%</p>
      <p className="mt-3 font-sans text-xs uppercase tracking-[0.24em] text-[#F5F0E8]">
        {label}
      </p>
      <p className="mt-3 font-sans text-sm leading-relaxed text-[#888880]">
        {description}
      </p>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="bg-[#161616] px-5 py-18 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeUp delay={0}>
          <div className="overflow-hidden rounded-[32px] border border-[#C9A84C]/15">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
              alt="NovaPR team collaborating in the office"
              width={900}
              height={1040}
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.06]"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <SectionLabel
            label="Why Choose Us"
            title="We deliver the kind of communications work that feels considered and measurable."
            description="Our team blends editorial instinct, strategic discipline, and execution depth. That means clearer messaging, stronger rollout quality, and better alignment between attention and business growth."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {performanceStats.map((stat, index) => (
              <Stat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                delay={Math.min(index * 0.1, 0.4)}
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
