import Image from "next/image"
import Link from "next/link"

import FadeUp from "@/components/ui/FadeUp"
import SectionLabel from "@/components/ui/SectionLabel"

export default function WhatWeDo() {
  return (
    <section className="px-5 py-18 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <FadeUp delay={0}>
          <div className="overflow-hidden rounded-[32px] border border-[#C9A84C]/15">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="NovaPR team in a strategy workshop"
              width={900}
              height={1040}
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.06]"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <SectionLabel
            label="What We Do"
            title="A strategic PR partner built for brands that want sharper presence."
            description="We connect editorial thinking, media access, creative direction, digital performance, and search visibility into one disciplined growth engine. That means fewer disconnected vendors and a far stronger brand signal across every touchpoint."
          />
          <Link
            href="/about"
            className="mt-8 inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C] transition-colors duration-700 hover:text-[#F5F0E8]"
          >
            Discover Who We Are -&gt;
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}
