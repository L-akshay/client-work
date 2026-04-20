import Image from "next/image"

import FadeUp from "@/components/ui/FadeUp"
import GoldButton from "@/components/ui/GoldButton"
import SectionLabel from "@/components/ui/SectionLabel"
import { allServiceGroups, services } from "@/lib/data/services"

export default function Services() {
  return (
    <section className="px-5 py-18 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-24">
          {services.map((service, index) => (
            <FadeUp key={service.slug} delay={0}>
              <article className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                  <div className="overflow-hidden rounded-[32px] border border-[#C9A84C]/15">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1100}
                      height={840}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.06]"
                    />
                  </div>
                </div>
                <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                  <SectionLabel
                    label={service.eyebrow}
                    title={service.title}
                    description={service.longDescription}
                  />
                  <div className="mt-6 flex flex-wrap gap-3">
                    {service.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-[#C9A84C]/20 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.subServices.map((item) => (
                      <div
                        key={item}
                        className="rounded-[22px] border border-[#C9A84C]/10 bg-[#161616] px-4 py-4 font-sans text-sm text-[#888880]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <GoldButton href={`/services/${service.slug}`} className="mt-8">
                    Explore Service
                  </GoldButton>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-24 rounded-[36px] border border-[#C9A84C]/15 bg-[#161616] p-8 lg:p-10">
            <SectionLabel
              label="Full Service List"
              title="A broader offering designed around modern brand visibility."
              description="In addition to our five core practices, we support launch, growth, reputation, and platform visibility through specialist services."
            />
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allServiceGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-serif text-2xl font-light text-[#F5F0E8]">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="font-sans text-sm text-[#888880]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
