"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import FadeUp from "@/components/ui/FadeUp"

export default function About() {
  return (
    <section id="about" className="px-[5%] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <FadeUp delay={0}>
          <div className="overflow-hidden rounded-lg border border-[#C9A84C]/30 bg-[#161616]">
            <Image
              src="/images/sections/about-consultation.jpg"
              alt="Two people in a strategy consultation"
              width={600}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="max-w-2xl">
            <div className="mb-8 h-16 w-px bg-[#C9A84C]" />
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#C9A84C]">
              About Us
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light text-[#F5F0E8] sm:text-5xl">
              Integrated PR &amp; Marketing Agency
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed font-light text-[#888880] sm:text-lg">
              Welcome to NovaPR, your partner in strategic communication
              excellence. We specialise in crafting compelling narratives,
              building media relationships, and delivering measurable results.
              With a dynamic team of industry experts, we customise PR
              solutions that align seamlessly with your unique goals.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-[#C9A84C] transition hover:underline"
            >
              Read More
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
