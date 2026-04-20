import {
  AlertTriangle,
  BarChart2,
  Globe,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"

import FadeUp from "@/components/ui/FadeUp"
import SectionLabel from "@/components/ui/SectionLabel"

const cards = [
  {
    id: "01",
    icon: Shield,
    title: "Build authenticity and credibility",
    description:
      "Thoughtful PR creates third-party validation that helps your audience trust the brand before the sales conversation even starts.",
  },
  {
    id: "02",
    icon: TrendingUp,
    title: "Take your growth story further",
    description:
      "Strong communications make momentum visible, giving investors, customers, and partners a clearer reason to pay attention.",
  },
  {
    id: "03",
    icon: AlertTriangle,
    title: "Manage sensitive moments well",
    description:
      "A disciplined PR team helps brands respond faster, communicate clearly, and protect long-term reputation under pressure.",
  },
  {
    id: "04",
    icon: Users,
    title: "Shape brand perception",
    description:
      "Consistency across coverage, messaging, and storytelling builds memory and makes your brand feel more credible over time.",
  },
  {
    id: "05",
    icon: Globe,
    title: "Scale across markets",
    description:
      "Communications systems that travel well help brands expand into new sectors, cities, and audiences without losing clarity.",
  },
  {
    id: "06",
    icon: BarChart2,
    title: "Stay accountable to outcomes",
    description:
      "The best PR work is measured against visibility, sentiment, reach, and the business signals that matter most.",
  },
]

export default function WhySubscribe() {
  return (
    <section className="bg-[#161616] px-5 py-18 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeUp delay={0}>
          <SectionLabel
            label="Why Subscribe"
            title="Why should brands invest in PR services?"
            description="PR works best when it strengthens both perception and performance. The value is not only in visibility. It is in the trust, momentum, and long-term brand memory that visibility creates."
            align="center"
            className="max-w-4xl"
          />
        </FadeUp>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon

            return (
              <FadeUp key={card.id} delay={Math.min(index * 0.1, 0.5)}>
                <article className="h-full rounded-[28px] border border-[#C9A84C]/10 bg-[#0F0F0F] p-8 transition-all duration-700 hover:border-[#C9A84C]/30">
                  <p className="font-serif text-5xl font-light text-[#C9A84C]">
                    {card.id}
                  </p>
                  <Icon className="mt-5 size-7 text-[#C9A84C]" />
                  <h3 className="mt-5 font-serif text-2xl font-light text-[#F5F0E8]">
                    {card.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-[#888880]">
                    {card.description}
                  </p>
                </article>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
