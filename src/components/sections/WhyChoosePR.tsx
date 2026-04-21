"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import FadeUp from "@/components/ui/FadeUp"
import SectionLabel from "@/components/ui/SectionLabel"

const checklist = [
  { number: "01", text: "Creative PR strategy built around business goals" },
  { number: "02", text: "Wide media relations across national and niche titles" },
  { number: "03", text: "Comprehensive campaign orchestration from idea to coverage" },
  { number: "04", text: "Local and global visibility planning for scaling brands" },
  { number: "05", text: "Veteran PR specialists with execution depth" },
  { number: "06", text: "Cost-effective, result-oriented communications programs" },
  { number: "07", text: "Strong client success track record across categories" },
  { number: "08", text: "Trust-driven service with measurable reporting" },
]

function StatCard({
  value,
  label,
  delay,
  className,
}: {
  value: string
  label: string
  delay: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`rounded-[20px] border border-[#C9A84C]/20 bg-[#161616]/90 px-6 py-5 shadow-[0_18px_40px_rgba(15,15,15,0.18)] backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1 hover:border-[#C9A84C]/35 ${className ?? ""}`}
    >
      <p className="font-serif text-3xl font-light text-[#C9A84C]">{value}</p>
      <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-[#888880]">
        {label}
      </p>
    </motion.div>
  )
}

export default function WhyChoosePR() {
  return (
    <section className="bg-[#0F0F0F] px-5 py-20 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeUp delay={0}>
          <SectionLabel
            label="Why Choose A PR Agency"
            title="The right PR partner should strengthen credibility, speed, and clarity."
            description="A strong agency does more than secure mentions. It sharpens your story, protects your reputation, builds trust with the right audience, and keeps visibility connected to business outcomes."
          />

          <div className="mt-10">
            {checklist.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative flex cursor-default items-center gap-5 border-b border-[#2a2a2a] py-[14px] last:border-b-0"
              >
                <span className="pointer-events-none absolute inset-0 rounded-[8px] bg-[#C9A84C]/[0.04] opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-100 group-active:opacity-100" />
                <span className="pointer-events-none absolute left-0 top-1/2 h-0 w-[2px] -translate-x-1 -translate-y-1/2 rounded-full bg-[#C9A84C] opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:h-6 group-hover:translate-x-0 group-hover:opacity-100 group-active:h-6 group-active:translate-x-0 group-active:opacity-100" />

                <span className="w-7 shrink-0 pl-3 font-serif text-xs tracking-[0.16em] text-[#C9A84C]/30 transition-colors duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:text-[#C9A84C] group-active:text-[#C9A84C]">
                  {item.number}
                </span>

                <p className="flex-1 font-sans text-sm leading-relaxed text-[#888880] transition-colors duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:text-[#F5F0E8] group-active:text-[#F5F0E8]">
                  {item.text}
                </p>

                <span className="flex w-6 shrink-0 justify-end overflow-hidden">
                  <span className="h-px w-0 translate-x-2 bg-[#C9A84C] opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-6 group-hover:translate-x-0 group-hover:opacity-100 group-active:w-6 group-active:translate-x-0 group-active:opacity-100" />
                </span>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="relative">
            <div className="group relative overflow-hidden rounded-[32px] border border-[#C9A84C]/15 shadow-[0_24px_70px_rgba(15,15,15,0.18)]">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
                alt="Team presentation for communications planning"
                width={900}
                height={1040}
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04] group-active:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[linear-gradient(to_top,rgba(15,15,15,0.68)_0%,rgba(15,15,15,0.18)_48%,transparent_72%)] transition-opacity duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-100 group-active:opacity-100" />

              <div className="absolute bottom-6 left-6 hidden lg:block">
                <StatCard value="500+" label="Brands Elevated" delay={0.4} />
              </div>

              <div className="absolute right-6 top-6 hidden lg:block">
                <StatCard value="95%" label="Client Retention" delay={0.5} />
              </div>

              <div className="absolute right-6 top-1/2 hidden lg:block -translate-y-1/2">
                <StatCard value="8+" label="Years Experience" delay={0.6} />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:hidden">
              <StatCard
                value="500+"
                label="Brands Elevated"
                delay={0.4}
                className="w-full"
              />
              <StatCard
                value="95%"
                label="Client Retention"
                delay={0.5}
                className="w-full"
              />
              <StatCard
                value="8+"
                label="Years Experience"
                delay={0.6}
                className="w-full sm:col-span-2"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
