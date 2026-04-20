import FadeUp from "@/components/ui/FadeUp"
import GoldButton from "@/components/ui/GoldButton"
import PageHero from "@/components/ui/PageHero"
import SectionLabel from "@/components/ui/SectionLabel"

const benefits = [
  "High-trust team culture with strong ownership",
  "Cross-disciplinary exposure across PR, growth, and creative",
  "Work on brands that are actively shaping their category",
  "Flexible collaboration rhythm and focused execution environment",
]

const roles = [
  {
    title: "Senior PR Manager",
    type: "Full Time",
    location: "New Delhi / Hybrid",
  },
  {
    title: "Creative Strategist",
    type: "Full Time",
    location: "New Delhi / Hybrid",
  },
  {
    title: "Influencer Marketing Lead",
    type: "Full Time",
    location: "Remote / India",
  },
]

const process = [
  "Introductory conversation",
  "Role-fit discussion with the team",
  "Short case or portfolio review",
  "Final alignment and offer discussion",
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        description="We are building a team of strategists, storytellers, creatives, and operators who care deeply about high-quality execution."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800&q=80"
      />
      <section className="px-5 py-18 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeUp delay={0}>
            <SectionLabel
              label="Why Join"
              title="A place for people who like thoughtful work and real momentum."
              description="We care about sharp ideas, reliable follow-through, and building a team that is calm under pressure and ambitious about craft."
            />
          </FadeUp>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <FadeUp key={benefit} delay={0}>
                <div className="rounded-[24px] border border-[#C9A84C]/12 bg-[#161616] p-6 font-sans text-sm leading-relaxed text-[#888880]">
                  {benefit}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <FadeUp delay={0}>
              <SectionLabel
                label="Open Roles"
                title="Current opportunities"
                className="max-w-3xl"
              />
            </FadeUp>
            <div className="mt-10 space-y-5">
              {roles.map((role) => (
                <FadeUp key={role.title} delay={0}>
                  <article className="rounded-[28px] border border-[#C9A84C]/15 bg-[#161616] p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h2 className="font-serif text-3xl font-light text-[#F5F0E8]">
                          {role.title}
                        </h2>
                        <p className="mt-3 font-sans text-sm text-[#888880]">
                          {role.type} · {role.location}
                        </p>
                      </div>
                      <GoldButton href="/contact">Apply Now</GoldButton>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={0.1}>
            <div className="rounded-[32px] border border-[#C9A84C]/15 bg-[#161616] p-8">
              <SectionLabel
                label="Hiring Process"
                title="What to expect"
              />
              <div className="mt-8 space-y-4">
                {process.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-[22px] border border-[#C9A84C]/10 bg-[#0F0F0F] p-5"
                  >
                    <p className="font-serif text-3xl font-light text-[#C9A84C]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 font-sans text-sm text-[#888880]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
