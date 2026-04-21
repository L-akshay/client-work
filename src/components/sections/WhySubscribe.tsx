"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  AlertTriangle, BarChart2, Globe,
  Shield, TrendingUp, Users,
} from "lucide-react"
import FadeUp from "@/components/ui/FadeUp"
import SectionLabel from "@/components/ui/SectionLabel"

const cards = [
  {
    id: "01", icon: Shield,
    title: "Build authenticity and credibility",
    description: "Thoughtful PR creates third-party validation that helps your audience trust the brand before the sales conversation even starts.",
  },
  {
    id: "02", icon: TrendingUp,
    title: "Take your growth story further",
    description: "Strong communications make momentum visible, giving investors, customers, and partners a clearer reason to pay attention.",
  },
  {
    id: "03", icon: AlertTriangle,
    title: "Manage sensitive moments well",
    description: "A disciplined PR team helps brands respond faster, communicate clearly, and protect long-term reputation under pressure.",
  },
  {
    id: "04", icon: Users,
    title: "Shape brand perception",
    description: "Consistency across coverage, messaging, and storytelling builds memory and makes your brand feel more credible over time.",
  },
  {
    id: "05", icon: Globe,
    title: "Scale across markets",
    description: "Communications systems that travel well help brands expand into new sectors, cities, and audiences without losing clarity.",
  },
  {
    id: "06", icon: BarChart2,
    title: "Stay accountable to outcomes",
    description: "The best PR work is measured against visibility, sentiment, reach, and the business signals that matter most.",
  },
]

function Card({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const Icon = card.icon

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.09,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative flex flex-col gap-6 overflow-hidden border-b border-r border-[#2a2a2a] bg-transparent p-8 transition-colors duration-700 hover:bg-[#161616]"
    >
      <div className="absolute left-0 top-0 h-[1.5px] w-0 bg-gradient-to-r from-[#C9A84C] to-transparent transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-full" />

      <div className="flex items-start justify-between">
        <span className="font-serif text-[40px] font-light leading-none text-[#C9A84C]/15 transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:text-[#C9A84C]/30">
          {card.id}
        </span>
        <div className="flex size-10 items-center justify-center rounded-full border border-[#2a2a2a] bg-transparent text-[#C9A84C]/60 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:border-[#C9A84C]/30 group-hover:text-[#C9A84C]">
          <Icon className="size-[15px]" />
        </div>
      </div>

      <div>
        <h3 className="font-serif text-[22px] font-light leading-snug text-[#F5F0E8]">
          {card.title}
        </h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-[#555550] transition-colors duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:text-[#888880]">
          {card.description}
        </p>
      </div>

      <div className="mt-auto h-px w-full overflow-hidden bg-transparent">
        <motion.div
          className="h-full origin-left bg-[#C9A84C]/30"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.3 + index * 0.09,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      </div>
    </motion.article>
  )
}

export default function WhySubscribe() {
  return (
    <section className="bg-[#0f0f0f] px-5 py-20 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeUp delay={0}>
          <SectionLabel
            label="Why Subscribe"
            title="Why should brands invest in PR services?"
            description="PR works best when it strengthens both perception and performance. The value is not only in visibility — it is in the trust, momentum, and long-term brand memory that visibility creates."
            align="center"
            className="mx-auto max-w-3xl"
          />
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 border-l border-t border-[#2a2a2a] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
