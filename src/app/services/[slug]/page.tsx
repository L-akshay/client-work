import Image from "next/image"
import { notFound } from "next/navigation"

import FadeUp from "@/components/ui/FadeUp"
import GoldButton from "@/components/ui/GoldButton"
import GhostButton from "@/components/ui/GhostButton"
import PageHero from "@/components/ui/PageHero"
import SectionLabel from "@/components/ui/SectionLabel"
import ServiceCard from "@/components/ui/ServiceCard"
import { getServiceBySlug, services } from "@/lib/data/services"

type ServicePageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3)

  return (
    <>
      <PageHero
        title={service.title}
        description={service.description}
        image={service.heroImage}
      />

      <section className="px-5 py-18 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <FadeUp delay={0}>
            <SectionLabel
              label="What We Do"
              title={service.eyebrow}
              description={service.longDescription}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {service.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-[#C9A84C]/20 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.subServices.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#C9A84C]/10 bg-[#161616] p-5 font-sans text-sm leading-relaxed text-[#888880]"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="overflow-hidden rounded-[32px] border border-[#C9A84C]/15">
              <Image
                src={service.image}
                alt={service.title}
                width={1200}
                height={980}
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
              label="Our Process"
              title="A clear process that keeps execution sharp."
              align="center"
              className="mx-auto max-w-4xl"
            />
          </FadeUp>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <FadeUp key={step.title} delay={Math.min(index * 0.1, 0.4)}>
                <article className="h-full rounded-[28px] border border-[#C9A84C]/12 bg-[#0F0F0F] p-7">
                  <p className="font-serif text-5xl font-light text-[#C9A84C]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 font-serif text-2xl font-light text-[#F5F0E8]">
                    {step.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-[#888880]">
                    {step.description}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-18 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeUp delay={0}>
            <SectionLabel
              label="Results"
              title="Metrics that show how the work performs."
              className="max-w-4xl"
            />
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {service.metrics.map((metric) => (
              <FadeUp key={metric.label} delay={0}>
                <article className="rounded-[28px] border border-[#C9A84C]/15 bg-[#161616] p-8">
                  <p className="font-serif text-6xl font-light text-[#C9A84C]">
                    {metric.value}
                  </p>
                  <p className="mt-3 font-sans text-xs uppercase tracking-[0.24em] text-[#F5F0E8]">
                    {metric.label}
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-[#888880]">
                    {metric.detail}
                  </p>
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
              label="Related Services"
              title="Adjacent capabilities that strengthen the same outcome."
              className="max-w-4xl"
            />
          </FadeUp>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedServices.map((item) => (
              <FadeUp key={item.slug} delay={0}>
                <ServiceCard service={item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-18 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-[#C9A84C]/15 bg-[#161616] px-8 py-12 text-center">
          <FadeUp delay={0}>
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-[#C9A84C]">
              Contact CTA
            </p>
            <h2 className="mt-6 font-serif text-5xl font-light text-[#F5F0E8]">
              Need this service for your next move?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#888880]">
              We can tailor the scope, rollout pace, and channel mix around your
              brand stage and immediate business priorities.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GoldButton href="/contact">Let&apos;s Talk</GoldButton>
              <GhostButton href="/services">See All Services</GhostButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
