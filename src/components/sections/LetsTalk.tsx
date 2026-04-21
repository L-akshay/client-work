import Image from "next/image"

import FadeUp from "@/components/ui/FadeUp"
import GoldButton from "@/components/ui/GoldButton"
import GhostButton from "@/components/ui/GhostButton"

export default function LetsTalk() {
  return (
    <section className="relative overflow-hidden px-5 py-20 lg:px-16">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt="Modern meeting room"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-[#161616]" />
        <div className="absolute -left-12 top-10 size-56 rounded-full bg-[#C9A84C]/[0.05] blur-3xl animate-float-orb" />
        <div className="absolute bottom-0 right-0 size-72 rounded-full bg-[#C9A84C]/[0.04] blur-3xl animate-float-orb-reverse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeUp delay={0}>
          <div className="relative overflow-hidden rounded-[36px] border border-[#C9A84C]/15 bg-[rgba(15,15,15,0.82)] px-8 py-12 text-center shadow-[0_26px_90px_rgba(15,15,15,0.28)] backdrop-blur-sm sm:px-12 lg:py-16">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />
            <p className="font-ui text-[11px] uppercase tracking-[0.34em] text-[#C9A84C]">
              Let&apos;s Talk
            </p>
            <h2 className="mt-6 font-serif text-5xl font-light leading-[0.92] text-[#F5F0E8] sm:text-6xl">
              Ready to build a brand story that carries further?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-ui text-[17px] leading-[1.9] text-[#888880]">
              Whether you are launching, repositioning, scaling, or repairing
              perception, we can design the communications system around it.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GoldButton href="/contact">Start a Conversation</GoldButton>
              <GhostButton href="/case-studies">See All Projects</GhostButton>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
