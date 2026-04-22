"use client"

import * as React from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

import GoldButton from "@/components/ui/GoldButton"
import GhostButton from "@/components/ui/GhostButton"
import FadeUp from "@/components/ui/FadeUp"
import { heroStats } from "@/lib/data/stats"

const rotatingWords = ["Loudest", "Strongest", "Boldest", "Sharpest"] as const

const particles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: `${(index * 19 + 7) % 100}%`,
  top: `${(index * 13 + 11) % 100}%`,
  size: 2 + (index % 3),
  duration: 3 + (index % 6),
  offset: index % 2 === 0 ? -22 - index : 24 + index,
  opacity: 0.1 + (index % 3) * 0.08,
}))

export default function Hero() {
  const [activeWord, setActiveWord] = React.useState(0)

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % rotatingWords.length)
    }, 2500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-32 pb-16 lg:px-16">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=80"
          alt="Editorial office setting"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-[rgba(15,15,15,0.82)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.12)_0%,rgba(201,168,76,0.03)_28%,rgba(15,15,15,0.18)_58%,rgba(15,15,15,0.88)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-[#C9A84C]"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            animate={{ y: [0, particle.offset, 0] }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-16 xl:grid-cols-[1.1fr_0.62fr]">
        <div>
          <FadeUp delay={0}>
            <p className="font-sans text-xs uppercase tracking-[0.32em] text-[#C9A84C]">
              Premium PR and Growth Communications
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(40px,8vw,88px)] font-light leading-[0.9] text-[#F5F0E8]">
              We Are Your Brand&apos;s{" "}
              <span className="relative inline-grid grid-cols-1 grid-rows-1 align-baseline text-[#C9A84C] italic [line-height:1.08]">
                {rotatingWords.map((word) => (
                  <span
                    key={`sizer-${word}`}
                    aria-hidden
                    className="invisible col-start-1 row-start-1 inline-block"
                  >
                    {word}
                  </span>
                ))}
                <span className="col-start-1 row-start-1 inline-block overflow-hidden pb-[0.08em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[activeWord]}
                      initial={{ opacity: 0, y: "0.35em" }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: "-0.35em" }}
                      transition={{
                        duration: 0.55,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="inline-block"
                    >
                      {rotatingWords[activeWord]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>{" "}
              Voice
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-[#888880]">
              We shape the stories, media moments, creative systems, and digital
              campaigns that help ambitious brands look sharper, sound clearer,
              and grow with conviction.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GoldButton href="/contact">Start a Conversation</GoldButton>
              <GhostButton href="/services">Explore Services</GhostButton>
            </div>
          </FadeUp>

          <FadeUp delay={1.3}>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              {heroStats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div>
                    <p className="font-serif text-3xl font-light text-[#C9A84C]">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-[#888880]">
                      {stat.label}
                    </p>
                  </div>
                  {index < heroStats.length - 1 ? (
                    <span className="hidden h-10 w-px bg-[#C9A84C]/30 sm:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.4} className="hidden xl:block">
          <div className="rounded-[32px] border border-[#C9A84C]/15 bg-[rgba(22,22,22,0.72)] p-8 backdrop-blur-sm">
            <p className="font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C]">
              Editorial Precision
            </p>
            <div className="mt-6 space-y-6">
              {[
                "Public narratives that strengthen trust and visibility",
                "Digital campaigns built for attention and action",
                "Creative systems that make premium brands feel unmistakable",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-2 h-px w-10 bg-[#C9A84C]" />
                  <p className="font-sans text-sm leading-relaxed text-[#888880]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
