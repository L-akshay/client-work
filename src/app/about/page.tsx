import Image from "next/image"
import Link from "next/link"
import {
  Gem,
  Globe2,
  Handshake,
  Lightbulb,
} from "lucide-react"

import FadeUp from "@/components/ui/FadeUp"
import GoldButton from "@/components/ui/GoldButton"
import PageHero from "@/components/ui/PageHero"
import SectionLabel from "@/components/ui/SectionLabel"
import { teamMembers } from "@/lib/data/team"
import { timeline } from "@/lib/data/timeline"

const values = [
  {
    icon: Lightbulb,
    title: "Clarity",
    description:
      "We simplify complexity into communication that teams, media, and audiences can understand immediately.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description:
      "Long-term relationships matter more than short bursts of noise, so we protect credibility at every step.",
  },
  {
    icon: Globe2,
    title: "Reach",
    description:
      "We think in terms of amplification, distribution, and where narratives travel best.",
  },
  {
    icon: Gem,
    title: "Craft",
    description:
      "Every deck, pitch, story angle, and creative asset should feel considered, premium, and ready for scrutiny.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="We are a communications partner for brands that want sharper strategy, stronger visibility, and execution that feels premium from start to finish."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=80"
      />

      <section className="px-5 py-18 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <FadeUp delay={0}>
            <SectionLabel
              label="Mission & Vision"
              title="We help ambitious brands communicate with more authority."
              description="Our mission is to build strategic communications systems that make brands easier to trust, easier to notice, and easier to remember. Our vision is to be the agency brands call when they need both editorial sharpness and modern growth thinking in one room."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#C9A84C]/12 bg-[#161616] p-6">
                <p className="font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C]">
                  Mission
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-[#888880]">
                  Shape credible stories and execute them across PR, social,
                  creative, creator, and search channels with measurable impact.
                </p>
              </div>
              <div className="rounded-[24px] border border-[#C9A84C]/12 bg-[#161616] p-6">
                <p className="font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C]">
                  Vision
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-[#888880]">
                  Become the agency known for bringing composure, clarity, and
                  commercial thinking into modern communications work.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="overflow-hidden rounded-[32px] border border-[#C9A84C]/15">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1400&q=80"
                alt="NovaPR team collaborating"
                width={1100}
                height={1100}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.06]"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-[#161616] px-5 py-18 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeUp delay={0}>
            <SectionLabel
              label="Our Story"
              title="A timeline shaped by steady expansion and sharper capability."
              align="center"
              className="mx-auto max-w-4xl"
            />
          </FadeUp>

          <div className="relative mt-16">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#C9A84C]/20 lg:block" />
            <div className="space-y-10">
              {timeline.map((item, index) => (
                <FadeUp key={item.year} delay={0}>
                  <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
                    <div
                      className={index % 2 === 0 ? "lg:text-right" : "lg:order-3"}
                    >
                      <div className="rounded-[24px] border border-[#C9A84C]/12 bg-[#0F0F0F] p-6">
                        <p className="font-serif text-4xl font-light text-[#C9A84C]">
                          {item.year}
                        </p>
                        <h3 className="mt-3 font-serif text-2xl font-light text-[#F5F0E8]">
                          {item.title}
                        </h3>
                        <p className="mt-3 font-sans text-sm leading-relaxed text-[#888880]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:flex lg:justify-center">
                      <span className="mt-8 inline-flex size-4 rounded-full border border-[#C9A84C] bg-[#0F0F0F]" />
                    </div>
                    <div className={index % 2 === 0 ? "lg:order-3" : "lg:order-1"} />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-18 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeUp delay={0}>
            <SectionLabel
              label="Team"
              title="A senior team built across strategy, media, growth, and creative."
              align="center"
              className="mx-auto max-w-4xl"
            />
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <FadeUp key={member.name} delay={0}>
                <article className="overflow-hidden rounded-[28px] border border-[#C9A84C]/15 bg-[#161616]">
                  <div className="overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={700}
                      height={860}
                      className="h-80 w-full object-cover transition-transform duration-700 hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex items-start justify-between p-6">
                    <div>
                      <h3 className="font-serif text-2xl font-light text-[#F5F0E8]">
                        {member.name}
                      </h3>
                      <p className="mt-2 font-sans text-sm text-[#888880]">
                        {member.role}
                      </p>
                    </div>
                    <Link
                      href={member.linkedin}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-[#C9A84C]/20 text-[#C9A84C] transition-colors duration-700 hover:bg-[#C9A84C] hover:text-[#0F0F0F]"
                    >
                      <span className="font-sans text-xs font-bold uppercase">
                        in
                      </span>
                    </Link>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#161616] px-5 py-18 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeUp delay={0}>
            <SectionLabel
              label="Values"
              title="The principles behind how we work."
              align="center"
              className="mx-auto max-w-4xl"
            />
          </FadeUp>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <FadeUp key={value.title} delay={0}>
                  <article className="rounded-[28px] border border-[#C9A84C]/12 bg-[#0F0F0F] p-8">
                    <Icon className="size-7 text-[#C9A84C]" />
                    <h3 className="mt-5 font-serif text-2xl font-light text-[#F5F0E8]">
                      {value.title}
                    </h3>
                    <p className="mt-4 font-sans text-sm leading-relaxed text-[#888880]">
                      {value.description}
                    </p>
                  </article>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-18 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-[#C9A84C]/15 bg-[#161616] px-8 py-12 text-center">
          <FadeUp delay={0}>
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-[#C9A84C]">
              Next Step
            </p>
            <h2 className="mt-6 font-serif text-5xl font-light text-[#F5F0E8]">
              Let&apos;s build the next chapter together.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#888880]">
              If you need a communications partner that can think strategically
              and execute beautifully, we should talk.
            </p>
            <GoldButton href="/contact" className="mt-8">
              Contact Us
            </GoldButton>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
