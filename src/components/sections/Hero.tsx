"use client"

import * as React from "react"

import GoldButton from "@/components/ui/GoldButton"
import GhostButton from "@/components/ui/GhostButton"
import FadeUp from "@/components/ui/FadeUp"
import { site } from "@/lib/site-content"
import { heroStats } from "@/lib/data/stats"

const mobileHeroImage = "/images/hero/agency-office-mobile.jpg"

export default function Hero() {
  const [activeWord, setActiveWord] = React.useState(0)
  const hero = site.home.hero
  const rotatingWords = hero.rotatingWords

  React.useEffect(() => {
    if (rotatingWords.length <= 1) return

    let timer: number | null = null

    const startRotation = () => {
      if (timer !== null) return
      timer = window.setInterval(() => {
        setActiveWord((current) => (current + 1) % rotatingWords.length)
      }, 2500)
    }

    const stopRotation = () => {
      if (timer === null) return
      window.clearInterval(timer)
      timer = null
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopRotation()
      } else {
        startRotation()
      }
    }

    startRotation()
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      stopRotation()
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [rotatingWords.length])

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-32 pb-16 lg:px-16">
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileHeroImage} />
          <img
            src={hero.image}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.07] sm:opacity-[0.075] animate-hero-image-drift"
          />
        </picture>
        <div className="absolute inset-0 bg-[rgba(15,15,15,0.82)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.12)_0%,rgba(201,168,76,0.03)_28%,rgba(15,15,15,0.18)_58%,rgba(15,15,15,0.88)_100%)] animate-hero-glow-drift" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-16 xl:grid-cols-[1.1fr_0.62fr]">
        <div>
          <FadeUp delay={0}>
            <p className="font-sans text-xs uppercase tracking-[0.32em] text-[#C9A84C]">
              {hero.eyebrow}
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(40px,8vw,88px)] font-light leading-[0.9] text-[#F5F0E8]">
              {hero.headingPrefix}{" "}
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
                  <span
                    key={rotatingWords[activeWord]}
                    className="inline-block animate-word-rotate-in"
                  >
                    {rotatingWords[activeWord]}
                  </span>
                </span>
              </span>{" "}
              {hero.headingSuffix}
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-[#888880]">
              {hero.description}
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GoldButton href={hero.primaryCta.href}>{hero.primaryCta.label}</GoldButton>
              <GhostButton href={hero.secondaryCta.href}>{hero.secondaryCta.label}</GhostButton>
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
              {hero.insightLabel}
            </p>
            <div className="mt-6 space-y-6">
              {hero.insightItems.map((item) => (
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
