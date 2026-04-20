"use client"

import * as React from "react"
import { animate, useInView, useMotionValue } from "framer-motion"

import { statsTicker } from "@/lib/data/stats"

function Counter({
  value,
  suffix,
  label,
  delay,
}: {
  value: number
  suffix: string
  label: string
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
    <div ref={ref} className="px-4 py-8 text-center lg:px-8">
      <p className="font-serif text-6xl font-light text-[#0F0F0F] sm:text-7xl">
        {display}
        {suffix}
      </p>
      <p className="mt-4 font-sans text-sm uppercase tracking-[0.24em] text-[#0F0F0F]">
        {label}
      </p>
    </div>
  )
}

export default function StatsTicker() {
  return (
    <section className="bg-[#C9A84C] px-5 py-10 lg:px-16 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-0 divide-y divide-[#0F0F0F]/20 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {statsTicker.map((stat, index) => (
          <Counter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={Math.min(index * 0.1, 0.3)}
          />
        ))}
      </div>
    </section>
  )
}
